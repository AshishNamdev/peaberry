/**
 * Copyright (C) 2008 Stuart McCulloch
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.ops4j.peaberry;

import static com.google.inject.matcher.Matchers.member;
import static org.ops4j.peaberry.ServiceMatcher.annotatedWithService;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.util.logging.Logger;

import org.ops4j.peaberry.internal.LeasedScope;
import org.ops4j.peaberry.internal.NonDelegatingClassLoaderHook;
import org.ops4j.peaberry.internal.OSGiServiceRegistry;
import org.ops4j.peaberry.internal.ServiceBindingFactory;
import org.ops4j.peaberry.internal.StaticScope;
import org.osgi.framework.BundleContext;

import com.google.inject.Binder;
import com.google.inject.ClassLoaderHook;
import com.google.inject.Guice;
import com.google.inject.Injector;
import com.google.inject.Module;
import com.google.inject.Scope;
import com.google.inject.internal.GuiceCodeGen;

/**
 * @author stuart.mcculloch@jayway.net (Stuart McCulloch)
 */
public final class Peaberry {

  /**
   * @param bc current bundle context
   * @return OSGi service injection rules
   */
  public static Module getOSGiModule(final BundleContext bc) {

    return new Module() {
      public void configure(Binder binder) {

        binder.bind(BundleContext.class).toInstance(bc);

        // auto-bind service dependencies and implementations
        binder.addBindingFactory(member(annotatedWithService()),
            new ServiceBindingFactory(new OSGiServiceRegistry(bc)));

        binder.bindScope(Static.class, STATIC_SERVICE_SCOPE);
        binder.bindScope(Leased.class, LEASED_SERVICE_SCOPE);
      }
    };
  }

  private static final Scope STATIC_SERVICE_SCOPE = new StaticScope();
  private static final Scope LEASED_SERVICE_SCOPE =
      new LeasedScope(Long.getLong("peaberry.default.lease", 300));

  private static final ClassLoaderHook NON_DELEGATING_LOADER_HOOK =
      new NonDelegatingClassLoaderHook();

  /**
   * Convenience method for constructing an OSGi enabled Guice injector
   * 
   * @param bc current bundle context
   * @param module custom Guice module
   * @return OSGi enabled injector
   * 
   * @throws Exception
   */
  public static Injector getOSGiInjector(BundleContext bc, Module module) {

    // eagerly load logging subsystem, as this appears to fix class unloading
    Logger.getAnonymousLogger();

    // use container classloading when creating the injector
    GuiceCodeGen.setThreadClassLoaderHook(NON_DELEGATING_LOADER_HOOK);
    try {
      final Injector injector = Guice.createInjector(getOSGiModule(bc), module);
      return (Injector) GuiceCodeGen.getProxy(Injector.class,
          new InvocationHandler() {
            public Object invoke(Object proxy, Method method, Object[] args)
                throws Throwable {
              // use container classloading when using the injector
              GuiceCodeGen.setThreadClassLoaderHook(NON_DELEGATING_LOADER_HOOK);
              try {
                return method.invoke(injector, args);
              } finally {
                GuiceCodeGen.setThreadClassLoaderHook(null);
              }
            }
          });
    } finally {
      GuiceCodeGen.setThreadClassLoaderHook(null);
    }
  }
}
