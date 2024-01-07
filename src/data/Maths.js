const Maths = [
  // Beginner
  {
    question: "Which of the following is not a method of the Math object in JavaScript?",
    answers: [
      { a: "`random()`", correct: false },
      { b: "`floor()`", correct: false },
      { c: "`sqrt()`", correct: false },
      { d: "`round()`", correct: true }
    ]
  },
  {
    question: "How do you generate a random number between 0 and 1 in JavaScript?",
    answers: [
      { a: "`random()`", correct: true },
      { b: "`random(0, 1)`", correct: false },
      { c: "`rand()`", correct: false },
      { d: "`generateRandom()`", correct: false }
    ]
  },
  {
    question: "What does the `Math.floor()` method do?",
    answers: [
      { a: "Rounds a number to the nearest integer", correct: false },
      { b: "Returns the smallest integer greater than or equal to a number", correct: false },
      { c: "Returns the largest integer less than or equal to a number", correct: true },
      { d: "Finds the square root of a number", correct: false }
    ]
  },
  {
    question: "How do you find the absolute value of a number in JavaScript?",
    answers: [
      { a: "`abs()`", correct: false },
      { b: "`absolute()`", correct: false },
      { c: "`Math.abs()`", correct: true },
      { d: "`Math.absolute()`", correct: false }
    ]
  },
  {
    question: "What is the result of `Math.PI` in JavaScript?",
    answers: [
      { a: "3.142", correct: false },
      { b: "3.1416", correct: false },
      { c: "3.14", correct: false },
      { d: "The mathematical constant representing the ratio of a circle's circumference to its diameter", correct: true }
    ]
  },
  // Intermediate
  {
    question: "What does the `Math.pow()` method do in JavaScript?",
    answers: [
      { a: "Returns the square root of a number", correct: false },
      { b: "Raises a number to the power of another number", correct: true },
      { c: "Rounds a number to the nearest integer", correct: false },
      { d: "Returns the smallest integer greater than or equal to a number", correct: false }
    ]
  },
  {
    question: "How do you round a number to a specified number of decimal places using JavaScript?",
    answers: [
      { a: "`roundToDecimal()`", correct: false },
      { b: "`Math.roundDecimal()`", correct: false },
      { c: "`toFixed()`", correct: true },
      { d: "`Math.roundTo()`", correct: false }
    ]
  },
  {
    question: "What does the `Math.max()` method return?",
    answers: [
      { a: "The smallest number in a list", correct: false },
      { b: "The largest number in a list", correct: true },
      { c: "The average of a list of numbers", correct: false },
      { d: "The sum of a list of numbers", correct: false }
    ]
  },
  {
    question: "How do you find the square root of a number in JavaScript?",
    answers: [
      { a: "`Math.sqrt()`", correct: true },
      { b: "`Math.squareRoot()`", correct: false },
      { c: "`sqrt()`", correct: false },
      { d: "`squareRoot()`", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `Math.sin()` method in JavaScript?",
    answers: [
      { a: "Finds the sine of a number", correct: true },
      { b: "Returns a random number between -1 and 1", correct: false },
      { c: "Calculates the sum of two numbers", correct: false },
      { d: "Rounds a number to the nearest integer", correct: false }
    ]
  },
];

export default Maths;
