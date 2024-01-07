const MethodQuestions = [
    {
      question: "What is a method in JavaScript?",
      answers: [
        { A: "A loop construct", correct: false },
        { B: "A special type of variable", correct: false },
        { C: "A function that is a property of an object", correct: true },
        { D: "A data type", correct: false }
      ]
    },
    {
      question: "How do you define a method within an object literal?",
      answers: [
        { A: "method = function() { }", correct: false },
        { B: "define method() { }", correct: false },
        { C: "method() { }", correct: false },
        { D: "method: function() { }", correct: true }
      ]
    },
    {
      question: "What is the primary difference between a function and a method in JavaScript?",
      answers: [
        { A: "Methods are used for arithmetic operations, while functions are used for logical operations", correct: false },
        { B: "Functions are standalone, while methods are associated with objects", correct: true },
        { C: "Methods are always asynchronous, while functions are synchronous", correct: false },
        { D: "Functions are only used in the global scope, while methods are used within functions", correct: false }
      ]
    },
    {
      question: "How do you call a method within an object in JavaScript?",
      answers: [
        { A: "myObject.method();", correct: true },
        { B: "call myObject.method;", correct: false },
        { C: "invoke myObject.method();", correct: false },
        { D: "run myObject.method;", correct: false }
      ]
    },
    {
      question: "What is the purpose of the 'this' keyword in a method?",
      answers: [
        { A: "It refers to the global object", correct: false },
        { B: "It is used for variable declaration", correct: false },
        { C: "It refers to the object that the method is called on", correct: true },
        { D: "It is a reserved keyword with no specific purpose", correct: false }
      ]
    }
  ];
  
  export default MethodQuestions;
  