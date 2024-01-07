const Arrays = [
  // Beginner
  {
    question: "What is an array in JavaScript?",
    answers: [
      { A: "A special type of variable", correct: true },
      { B: "A loop construct", correct: false },
      { C: "A function", correct: false },
      { D: "A keyword", correct: false }
    ]
  },
  {
    question: "How do you create an empty array in JavaScript?",
    answers: [
      { A: "array = {}", correct: false },
      { B: "array = []", correct: true },
      { C: "array = new Array()", correct: false },
      { D: "array = newEmptyArray()", correct: false }
    ]
  },
  {
    question: "How do you access the elements of an array in JavaScript?",
    answers: [
      { A: "Using the element() function", correct: false },
      { B: "Using the accessElement keyword", correct: false },
      { C: "Using square brackets and an index", correct: true },
      { D: "Arrays cannot be accessed directly", correct: false }
    ]
  },
  {
    question: "What method is used to add an element to the end of an array?",
    answers: [
      { A: "push()", correct: true },
      { B: "add()", correct: false },
      { C: "append()", correct: false },
      { D: "insert()", correct: false }
    ]
  },
  {
    question: "How do you find the length of an array in JavaScript?",
    answers: [
      { A: "size()", correct: false },
      { B: "length()", correct: false },
      { C: "count()", correct: false },
      { D: "length", correct: true }
    ]
  },
  {
    // Intermediate
    question: "What is the difference between `const` and `let` when declaring arrays in JavaScript?",
    answers: [
      { A: "There is no difference", correct: false },
      { B: "`const` allows changing array elements, while `let` does not", correct: false },
      { C: "`let` allows changing array elements, while `const` does not", correct: true },
      { D: "`const` is used for strings, and `let` is used for numbers", correct: false }
    ]
  },
  {
    question: "How do you remove the last element from an array in JavaScript?",
    answers: [
      { A: "removeLastElement()", correct: false },
      { B: "pop()", correct: true },
      { C: "deleteLast()", correct: false },
      { D: "splice()", correct: false }
    ]
  },
  {
    question: "What does the `indexOf()` method return if the element is not found in the array?",
    answers: [
      { A: "-1", correct: true },
      { B: "0", correct: false },
      { C: "undefined", correct: false },
      { D: "false", correct: false }
    ]
  },
  {
    question: "How do you concatenate two arrays in JavaScript?",
    answers: [
      { A: "concatenate()", correct: false },
      { B: "merge()", correct: false },
      { C: "combine()", correct: false },
      { D: "concat()", correct: true }
    ]
  },
  {
    question: "What is the purpose of the `forEach()` method for arrays in JavaScript?",
    answers: [
      { A: "To filter array elements", correct: false },
      { B: "To iterate over array elements and perform a function on each", correct: true },
      { C: "To reverse the order of array elements", correct: false },
      { D: "To sort array elements", correct: false }
    ]
  }
];

export default Arrays;
