const Variables = [
  // Beginner
  {
    question: "What is a variable in JavaScript?",
    answers: [
      { A: "A data type", correct: false },
      { B: "A container for storing data values", correct: true },
      { C: "A function", correct: false },
      { D: "A looop construct", correct: false }
    ]
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answers: [
      { A: "Using the `variable` keyword", correct: false },
      { B: "Using the `var` keyword", correct: false },
      { C: "Using the `let` keyword", correct: false },
      { D: "A & B", correct: true }
    ]
  },
  {
    question: "Which keyword is used for constant variables in JavaScript?",
    answers: [
      { A: "let", correct: false },
      { B: "var", correct: false },
      { C: "const", correct: false },
      { D: "All the above", correct: true }
    ]
  },
  {
    question: "Which keyword is used for constant variables in JavaScript?",
    answers: [
      { A: "constant", correct: false },
      { B: "let", correct: false },
      { C: "var", correct: false },
      { D: "const", correct: true }
    ]
  },
  {
    question: "What is the difference between `let` and `const`?",
    answers: [
      { A: "`let` is used for numbers, and `const` is used for strings", correct: false },
      { B: "`let` variables can be reassigned, while `const` variables cannot", correct: true },
      { C: "`const` is used for loops, and `let` is used for conditions", correct: false },
      { D: "There is no difference", correct: false }
    ]
  },
  {
    question: "What is the scope of a variable declared with `var`?",
    answers: [
      { A: "Block scope", correct: false },
      { B: "Function scope", correct: true },
      { C: "Global scope", correct: false },
      { D: "Local scope", correct: false }
    ]
  },
  // Intermediate
  {
    question: "Explain the difference between `==` and `===` when comparing variables in JavaScript.",
    answers: [
      { A: "They are the same", correct: false },
      { B: "`==` compares both value and type, while `===` compares only value", correct: false },
      { C: "`==` compares only value, while `===` compares both value and type", correct: true },
      { D: "`==` and `===` are used for assignment, not comparison", correct: false }
    ]
  },
  {
    question: "What is variable hoisting in JavaScript?",
    answers: [
      { A: "Variables being physically lifted to the top of the JavaScript file", correct: false },
      { B: "The process of allocating memory to variables", correct: false },
      { C: "Variables being moved to the bottom of the scope", correct: false },
      { D: "Variables being declared before they are used", correct: true }
    ]
  },
  {
    question: "What is a closure in JavaScript and how does it relate to variables?",
    answers: [
      { A: "A way to close the browser window", correct: false },
      { B: "A combination of a function and the lexical environment within which that function was declared", correct: true },
      { C: "A method for closing code blocks", correct: false },
      { D: "A variable declared inside a loop", correct: false }
    ]
  },
]

export default Variables;