var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 516, "sl" : 38, "el" : 88, "name" : "ServiceTypeTests",
    "methods" : [
              {"sl" : 40, "el" : 43, "sc" : 3},  {"sl" : 45, "el" : 50, "sc" : 3},  {"sl" : 52, "el" : 59, "sc" : 3},  {"sl" : 61, "el" : 68, "sc" : 3},  {"sl" : 70, "el" : 87, "sc" : 3}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_1" : {
					  "name" : "sequenceCheck",
					  "pass" : true,
					  "methods" : [{"sl": 52 },{"sl": 61 },{"sl": 70 },],
					  "statements" : [{"sl": 53 },{"sl": 54 },{"sl": 56 },{"sl": 57 },{"sl": 62 },{"sl": 63 },{"sl": 65 },{"sl": 66 },{"sl": 73 },{"sl": 74 },{"sl": 75 },{"sl": 77 },{"sl": 78 },{"sl": 79 },{"sl": 80 },{"sl": 83 },{"sl": 84 },{"sl": 85 },]
					  },
		"test_4" : {
					  "name" : "serviceTypes",
					  "pass" : true,
					  "methods" : [{"sl": 40 },{"sl": 45 },],
					  "statements" : [{"sl": 41 },{"sl": 42 },{"sl": 46 },{"sl": 47 },{"sl": 48 },{"sl": 49 },]
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
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [  ] ,
  [  ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [ 4   ] ,
  [  ] ,
  [  ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [  ] ,
  [ 1   ] ,
  [ 1   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [  ] ,
  [ 1   ] ,
  [ 1   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 1   ] ,
  [  ] ,
  [  ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [  ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [  ] ,
  [  ] ,
  [ 1   ] ,
  [ 1   ] ,
  [ 1   ] ,
  [  ] ,
  [  ] ,
  [  ] 
];