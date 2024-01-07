const ObjectQuestions = [
    {
      question: "What is an object in JavaScript?",
      answers: [
        { A: "A data type", correct: false },
        { B: "A collection of key-value pairs", correct: true },
        { C: "A loop construct", correct: false },
        { D: "A function", correct: false }
      ]
    },
    {
      question: "How do you create an empty object in JavaScript?",
      answers: [
        { A: "var obj = new Object();", correct: false },
        { B: "var obj = {};", correct: true },
        { C: "var obj = createObject();", correct: false },
        { D: "var obj = new {};", correct: false }
      ]
    },
    {
      question: "How do you access the value of a property in an object?",
      answers: [
        { A: "Using parentheses: obj('propertyName');", correct: false },
        { B: "Using square brackets: obj['propertyName'];", correct: false },
        { C: "Using dot notation: obj.propertyName;", correct: true },
        { D: "Using commas: obj,propertyName,", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `delete` operator in JavaScript objects?",
      answers: [
        { A: "To remove an entire object", correct: false },
        { B: "To remove a property from an object", correct: true },
        { C: "To delete the object's prototype", correct: false },
        { D: "To delete a function from an object", correct: false }
      ]
    },
    {
      question: "How do you check if a property exists in an object?",
      answers: [
        { A: "if (obj.propertyName) { }", correct: false },
        { B: "if (obj.hasProperty('propertyName')) { }", correct: false },
        { C: "if ('propertyName' in obj) { }", correct: true },
        { D: "if (obj.exists('propertyName')) { }", correct: false }
      ]
    },
    {
      question: "What is the difference between `Object.keys(obj)` and `for...in` loop for iterating over object properties?",
      answers: [
        { A: "They are equivalent and can be used interchangeably", correct: false },
        { B: "`Object.keys(obj)` only iterates over enumerable own properties, while `for...in` loop iterates over all enumerable properties including prototype properties", correct: true },
        { C: "`Object.keys(obj)` only iterates over prototype properties, while `for...in` loop iterates over all own properties", correct: false },
        { D: "They both iterate in reverse order", correct: false }
      ]
    },
    {
      question: "What is a constructor function in JavaScript objects?",
      answers: [
        { A: "A function that creates objects with predefined properties and methods", correct: true },
        { B: "A function that deletes objects", correct: false },
        { C: "A function that updates object properties", correct: false },
        { D: "A function that adds properties to objects", correct: false }
      ]
    },
    {
      question: "How do you create an object with a specific prototype in JavaScript?",
      answers: [
        { A: "var obj = createObject(prototype);", correct: false },
        { B: "var obj = new Object(prototype);", correct: false },
        { C: "var obj = Object.create(prototype);", correct: true },
        { D: "var obj = new prototype.Object();", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `Object.freeze(obj)` method in JavaScript?",
      answers: [
        { A: "To freeze the entire JavaScript program", correct: false },
        { B: "To prevent the addition of new properties to an object", correct: false },
        { C: "To prevent the deletion of properties from an object", correct: false },
        { D: "To make the object immutable (read-only)", correct: true }
      ]
    },
    {
      question: "How do you clone an object in JavaScript?",
      answers: [
        { A: "var newObj = obj.clone();", correct: false },
        { B: "var newObj = Object.clone(obj);", correct: false },
        { C: "var newObj = Object.assign({}, obj);", correct: true },
        { D: "var newObj = cloneObject(obj);", correct: false }
      ]
    }
  ];
  
export default ObjectQuestions;  