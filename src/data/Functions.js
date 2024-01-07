const FunctionsQuestions = [
    {
      question: "What is a function in JavaScript?",
      answers: [
        { A: "A loop construct", correct: false },
        { B: "A special type of variable", correct: false },
        { C: "A block of code designed to perform a specific task", correct: true },
        { D: "A data type", correct: false }
      ]
    },
    {
      question: "How do you define a function in JavaScript?",
      answers: [
        { A: "function = myFunction() { }", correct: false },
        { B: "def myFunction(): {}", correct: false },
        { C: "function myFunction() { }", correct: true },
        { D: "func myFunction() { }", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `return` statement in a function?",
      answers: [
        { A: "To print a value to the console", correct: false },
        { B: "To stop the execution of the function", correct: false },
        { C: "To indicate the end of a function", correct: false },
        { D: "To specify the value to be returned from the function", correct: true }
      ]
    },
    {
      question: "How do you call a function in JavaScript?",
      answers: [
        { A: "call myFunction()", correct: false },
        { B: "invoke myFunction()", correct: false },
        { C: "run myFunction()", correct: false },
        { D: "myFunction()", correct: true }
      ]
    },
    {
      question: "What is a parameter in a function?",
      answers: [
        { A: "The result of the function", correct: false },
        { B: "A variable used in the body of the function", correct: false },
        { C: "A value passed to the function when it is called", correct: true },
        { D: "The name of the function", correct: false }
      ]
    },
    {
      question: "What is the difference between function declarations and function expressions in JavaScript?",
      answers: [
        { A: "They are interchangeable terms", correct: false },
        { B: "Function declarations are hoisted, while function expressions are not", correct: true },
        { C: "Function expressions are hoisted, while function declarations are not", correct: false },
        { D: "There is no difference", correct: false }
      ]
    },
    {
      question: "What is a callback function in JavaScript?",
      answers: [
        { A: "A function that calls another function", correct: false },
        { B: "A function passed as an argument to another function", correct: true },
        { C: "A function that has a callback keyword", correct: false },
        { D: "A function that is executed only in the background", correct: false }
      ]
    },
    {
      question: "How do you create an anonymous function in JavaScript?",
      answers: [
        { A: "function myFunction() { }", correct: false },
        { B: "var myFunction = function() { }", correct: true },
        { C: "anonymous function() { }", correct: false },
        { D: "var myFunction = anonymous() { }", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `arguments` object in JavaScript functions?",
      answers: [
        { A: "To store the return value of a function", correct: false },
        { B: "To represent the parameters passed to a function", correct: true },
        { C: "To store local variables within a function", correct: false },
        { D: "To store the function name", correct: false }
      ]
    },
    {
      question: "How do you use the `apply` and `call` methods to invoke a function with a specific context?",
      answers: [
        { A: "apply(myContext, myFunction)", correct: false },
        { B: "call(myContext, myFunction)", correct: false },
        { C: "myFunction.apply(myContext)", correct: true },
        { D: "Both b and c", correct: false }
      ]
    }
  ];
  
  export default FunctionsQuestions;