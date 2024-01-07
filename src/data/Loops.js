
const LoopQuestions = [
    {
      question: "What is the purpose of a `for` loop in JavaScript?",
      answers: [
        { A: "To declare variables", correct: false },
        { B: "To perform a conditional execution of code", correct: true },
        { C: "To create a function", correct: false },
        { D: "To define an object", correct: false }
      ]
    },
    {
      question: "How do you write a basic `for` loop in JavaScript?",
      answers: [
        { A: "for (condition) { }", correct: false },
        { B: "for { } (condition)", correct: false },
        { C: "for (initialization; condition; update) { }", correct: true },
        { D: "for { } (initialization; condition; update)", correct: false }
      ]
    },
    {
      question: "Which loop executes the code block at least once, regardless of the condition?",
      answers: [
        { A: "for loop", correct: false },
        { B: "while loop", correct: false },
        { C: "do...while loop", correct: true },
        { D: "if statement", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `break` statement in a loop?",
      answers: [
        { A: "To end the entire script", correct: false },
        { B: "To jump to the next iteration of a loop", correct: false },
        { C: "To terminate the loop and exit the block", correct: true },
        { D: "To declare a new variable", correct: false }
      ]
    },
    {
      question: "Which loop is ideal when the number of iterations is unknown?",
      answers: [
        { A: "for loop", correct: false },
        { B: "while loop", correct: true },
        { C: "do...while loop", correct: false },
        { D: "if statement", correct: false }
      ]
    },
  
    {
      question: "What is the purpose of the `continue` statement in a loop?",
      answers: [
        { A: "To end the entire script", correct: false },
        { B: "To skip the rest of the code block and move to the next iteration of the loop", correct: true },
        { C: "To terminate the loop and exit the block", correct: false },
        { D: "To declare a new variable", correct: false }
      ]
    },
    {
      question: "How do you iterate over the elements of an array using a `for...of` loop?",
      answers: [
        { A: "for (var i in array) { }", correct: false },
        { B: "for (var i of array) { }", correct: true },
        { C: "for (var i = 0; i < array.length; i++) { }", correct: false },
        { D: "for (var i = array.length - 1; i >= 0; i--) { }", correct: false }
      ]
    },
    {
      question: "Which statement is used to label a loop in JavaScript?",
      answers: [
        { A: "label", correct: false },
        { B: "loopLabel", correct: false },
        { C: "loop:", correct: true },
        { D: ":loop", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `forEach` method when iterating over an array?",
      answers: [
        { A: "It is used for conditional statements", correct: false },
        { B: "It is a loop for asynchronous operations", correct: false },
        { C: "It is a method for creating new arrays", correct: false },
        { D: "It executes a provided function once for each array element", correct: true }
      ] 
    },
    {
      question: "How do you create an infinite loop in JavaScript intentionally?",
      answers: [
        { A: "for (var i = 0; i < Infinity; i++) { }", correct: false },
        { B: "while (true) { }", correct: false },
        { C: "do { } while (1);", correct: false },
        { D: "for (;;) { }", correct: true }
      ]
    }
];
  
  export default LoopQuestions;
  