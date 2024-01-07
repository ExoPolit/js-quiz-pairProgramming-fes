const Operators = [
  // Beginnner
  {
    question: "What is an operator in JavaScript?",
    answers: [
      { A: "A keyword", correct: false },
      { B: "A special character that performs operations on variables and values", correct: true },
      { C: "A data type", correct: false },
      { D: "A function", correct: false }
    ]
  },
  {
    question: "Which operator is used for addition in JavaScript?",
    answers: [
      { A: "+", correct: true },
      { B: "-", correct: false },
      { C: "*", correct: false },
      { D: "/", correct: false }
    ]
  },
  {
    question: "What does the `%` operator do in JavaScript?",
    answers: [
      { A: "Finds the square root of a number", correct: false },
      { B: "Returns the remainder of a division", correct: true },
      { C: "Multiplies two numbers", correct: false },
      { D: "Performs exponentiation", correct: false }
    ]
  },
  {
    question: "Which operator is used for concatenating strings?",
    answers: [
      { A: "+", correct: true },
      { B: "-", correct: false },
      { C: "*", correct: false },
      { D: "/", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `===` operator in JavaScript?",
    answers: [
      { A: "Checks for equality of values", correct: false },
      { B: "Assigns a value to a variable", correct: false },
      { C: "Compares the type of two variables", correct: false },
      { D: "Performs a strict comparison of both value and type", correct: true }
    ]
  },
  // Intermediate
  {
    question: "Explain the difference between `==` and `===` in JavaScript",
    answers: [
      { A: "They are interchangeable", correct: false },
      { B: "`==` performs type coercion, while `===` does not", correct: true },
      { C: "`===` performs type coercion, while `==` does not", correct: false },
      { D: "`==` and `===` are used for assignment, not comparison", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `typeof` operator in JavaScript?",
    answers: [
      { A: "Checks if a variable is defined", correct: false },
      { B: "Returns the data type of a variable", correct: true },
      { C: "Performs mathematical operations", correct: false },
      { D: "Concatenates strings", correct: false }
    ]
  },
  {
    question: "Which logical operator represents logical AND in JavaScript?",
    answers: [
      { A: "&&", correct: true },
      { B: "||", correct: false },
      { C: "!", correct: false },
      { D: "&", correct: false }
    ]
  },
  {
    question: "What is the ternary operator in JavaScript, and how is it used?",
    answers: [
      { A: "It is used for arithmetic operations", correct: false },
      { B: "It is used for creating functions", correct: false },
      { C: "It is a shorthand for an if-else statement", correct: true },
      { D: "It is used for declaring variables", correct: false }
    ]
  },
  {
    question: "What is the `typeof` result for an array in JavaScript?",
    answers: [
      { A: "array", correct: false },
      { B: "object", correct: true },
      { C: "number", correct: false },
      { D: "undefined", correct: false }
    ]
  },
]

export default Operators;