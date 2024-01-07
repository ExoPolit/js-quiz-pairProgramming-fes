const Syntax = [
  // Beginner
  {
    question: "What is the purpose of the semicolon (`;`) in JavaScript?",
    answers: [
      { a: "To end a block of code", correct: false },
      { b: "To declare a variable", correct: false },
      { c: "To separate statements", correct: true },
      { d: "It is optional and can be omitted", correct: false }
    ]
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: [
      { a: "let", correct: false },
      { b: "var", correct: false },
      { c: "const", correct: false },
      { d: "All of the above", correct: true }
    ]
  },
  {
    question: "How do you write a single-line comment in JavaScript?",
    answers: [
      { a: "// comment", correct: true },
      { b: "/* comment */", correct: false },
      { c: "' comment", correct: false },
      { d: "# comment", correct: false }
    ]
  },
  {
    question: "What is the correct way to declare a function in JavaScript?",
    answers: [
      { a: "function: myFunction() {}", correct: false },
      { b: "const myFunction = function() {}", correct: false },
      { c: "myFunction = function() {}", correct: false },
      { d: "function myFunction() {}", correct: true }
    ]
  },
  // Intermediate
  {
    question: "How do you include an external JavaScript file in an HTML document?",
    answers: [
      { a: '<script src="script.js"></script>', correct: true },
      { b: '<link rel="stylesheet" href="script.js">', correct: false },
      { c: '<include src="script.js">', correct: false },
      { d: '<script include="script.js"></script>', correct: false }
    ]
  },
  {
    question: "What is the purpose of the `return` keyword in a JavaScript function?",
    answers: [
      { a: "To exit the function and return a value", correct: true },
      { b: "To declare a variable", correct: false },
      { c: "To include external files", correct: false },
      { d: "To create a loop", correct: false }
    ]
  },
  {
    question: "How do you declare a conditional statement in JavaScript?",
    answers: [
      { a: "if (condition) { }", correct: true },
      { b: "for (condition) { }", correct: false },
      { c: "switch (condition) { }", correct: false },
      { d: "else (condition) { }", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `document.getElementById()` method in JavaScript?",
    answers: [
      { a: "To include external files", correct: false },
      { b: "To retrieve an HTML element by its ID", correct: true },
      { c: "To declare a variable", correct: false },
      { d: "To create a function", correct: false }
    ]
  },
  {
    question: "How do you create an object literal in JavaScript?",
    answers: [
      { a: "new Object()", correct: false },
      { b: "{ key: value }", correct: true },
      { c: "Object.create()", correct: false },
      { d: "[ key: value ]", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `typeof` operator in JavaScript?",
    answers: [
      { a: "To check if a variable is defined", correct: false },
      { b: "To perform mathematical operations", correct: false },
      { c: "To determine the data type of a variable", correct: true },
      { d: "To declare a variable", correct: false }
    ]
  }
]

export default Syntax;
