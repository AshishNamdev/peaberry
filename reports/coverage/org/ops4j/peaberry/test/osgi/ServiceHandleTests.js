var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 550, "sl" : 39, "el" : 123, "name" : "ServiceHandleTests",
    "methods" : [
             {"sl" : 78, "el" : 89, "sc" : 3},  {"sl" : 91, "el" : 93, "sc" : 3},  {"sl" : 95, "el" : 122, "sc" : 3}  ]}
    ,
    {"id" : 550, "sl" : 42, "el" : 44, "name" : "ServiceHandleTests.WordService",
    "methods" : [
             ]}
    ,
    {"id" : 550, "sl" : 46, "el" : 52, "name" : "ServiceHandleTests.WordServiceImplA",
    "methods" : [
             {"sl" : 49, "el" : 51, "sc" : 5}  ]}
    ,
    {"id" : 552, "sl" : 54, "el" : 60, "name" : "ServiceHandleTests.WordServiceImplB",
    "methods" : [
              {"sl" : 57, "el" : 59, "sc" : 5}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_8" : {
					  "name" : "testWiring",
					  "pass" : true,
					  "methods" : [{"sl": 49 },{"sl": 57 },{"sl": 91 },{"sl": 95 },],
					  "statements" : [{"sl": 50 },{"sl": 58 },{"sl": 92 },{"sl": 97 },{"sl": 98 },{"sl": 100 },{"sl": 101 },{"sl": 104 },{"sl": 105 },{"sl": 107 },{"sl": 108 },{"sl": 110 },{"sl": 111 },{"sl": 113 },{"sl": 114 },{"sl": 118 },{"sl": 119 },]
					  }
 };

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [  [],   [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 8   ] ,
  [ 8   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 8   ] ,
  [ 8   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 8   ] ,
  [ 8   ] ,
  [  ] ,
  [  ] ,
  [ 8   ] ,
  [  ] ,
  [ 8   ] ,
  [ 8   ] ,
  [  ] ,
  [ 8   ] ,
  [ 8   ] ,
  [  ] ,
  [  ] ,
  [ 8   ] ,
  [ 8   ] ,
  [  ] ,
  [ 8   ] ,
  [ 8   ] ,
  [  ] ,
  [ 8   ] ,
  [ 8   ] ,
  [  ] ,
  [ 8   ] ,
  [ 8   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 8   ] ,
  [ 8   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] 
];
