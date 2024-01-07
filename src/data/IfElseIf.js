const IfElseIf = [
  // Beginner
  {
    question: "What is the purpose of the `if` statement in JavaScript?",
    answers: [
      { a: "To create loops", correct: false },
      { b: "To perform a conditional execution of code", correct: true },
      { c: "To define a function", correct: false },
      { d: "To declare variables", correct: false }
    ]
  },
  {
    question: "How do you write a basic `if` statement in JavaScript?",
    answers: [
      { a: "if (condition) { }", correct: true },
      { b: "if { } (condition)", correct: false },
      { c: "if (initialization; condition; update) { }", correct: false },
      { d: "if { } (initialization; condition; update)", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `else` statement in an `if` statement?",
    answers: [
      { a: "It specifies an alternative condition to the main `if` condition", correct: true },
      { b: "It ends the entire script", correct: false },
      { c: "It declares a new variable", correct: false },
      { d: "It is not a valid statement in JavaScript", correct: false }
    ]
  },
  {
    question: "How do you write an `if-else` statement in JavaScript?",
    answers: [
      { a: "if (condition) { } else { }", correct: true },
      { b: "if { } else { } (condition)", correct: false },
      { c: "if (condition) { } elseif { }", correct: false },
      { d: "if { } (condition) else { }", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `===` operator in an `if` statement?",
    answers: [
      { a: "It checks for equality without considering data types", correct: false },
      { b: "It performs a strict equality check, including data types", correct: true },
      { c: "It is used for assignment", correct: false },
      { d: "It is not a valid operator in JavaScript", correct: false }
    ]
  },
  // Intermediate
  {
    question: "How do you write an `else if` statement in JavaScript?",
    answers: [
      { a: "else if (condition) { }", correct: true },
      { b: "elseif (condition) { }", correct: false },
      { c: "if else (condition) { }", correct: false },
      { d: "if { } else if (condition) { }", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `switch` statement compared to `if` statements?",
    answers: [
      { a: "It is used for logical operations", correct: false },
      { b: "It performs a strict equality check", correct: false },
      { c: "It is a replacement for the `if-else` statement in some scenarios", correct: true },
      { d: "It is not related to conditional statements", correct: false }
    ]
  },
  {
    question: "What is the role of the `else if` statement in handling multiple conditions?",
    answers: [
      { a: "It specifies an alternative condition to the main `if` condition", correct: false },
      { b: "It is used to check multiple conditions in sequence", correct: true },
      { c: "It is an alternative to the `switch` statement", correct: false },
      { d: "It is not a valid statement in JavaScript", correct: false }
    ]
  },
  {
    question: "How is the `switch` statement different from a series of `if-else if` statements?",
    answers: [
      { a: "`switch` is more efficient and concise for handling multiple conditions", correct: true },
      { b: "There is no difference; they can be used interchangeably", correct: false },
      { c: "`switch` cannot handle multiple conditions", correct: false },
      { d: "`if-else if` statements are preferred for all scenarios", correct: false }
    ]
  },
  {
    question: "When is it more appropriate to use a `switch` statement over `if-else if` statements?",
    answers: [
      { a: "When there are only two conditions to check", correct: false },
      { b: "When the conditions involve complex logical operations", correct: false },
      { c: "When there are multiple conditions with the same variable", correct: true },
      { d: "`switch` should always be avoided in favor of `if-else if`", correct: false }
    ]
  }
];

export default IfElseIf;
