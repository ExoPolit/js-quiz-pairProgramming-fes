
const RecursionQuestions = [
  {
    question: "What is recursion in programming?",
    answers: [
      { A: "A programming language feature", correct: false },
      { B: "A loop structure", correct: false },
      { C: "A function that calls itself", correct: true },
      { D: "A type of conditional statement", correct: false }
    ]
  },
  {
    question: "What is the base case in a recursive function?",
    answers: [
      { A: "The initial state of the function", correct: false },
      { B: "The case where the function calls itself", correct: false },
      { C: "The case that stops the recursive calls", correct: true },
      { D: "The final state of the function", correct: false }
    ]
  },
  {
    question: "How does a recursive function avoid infinite recursion?",
    answers: [
      { A: "By using an infinite loop", correct: false },
      { B: "By having a base case that stops the recursion", correct: true },
      { C: "By declaring variables with the `recursion` keyword", correct: false },
      { D: "By using asynchronous operations", correct: false }
    ]
  },
  {
    question: "Which of the following problems is well-suited for a recursive solution?",
    answers: [
      { A: "Simple mathematical calculations", correct: false },
      { B: "Iterating over an array", correct: false },
      { C: "Calculating the factorial of a number", correct: true },
      { D: "Basic conditional statements", correct: false }
    ]
  },
  {
    question: "Explain the concept of a recursive stack in the context of recursive function calls.",
    answers: [
      { A: "It is a data structure that stores variables in a last-in, first-out (LIFO) order", correct: true },
      { B: "It is a memory area for storing base cases", correct: false },
      { C: "It is a mechanism for handling asynchronous tasks", correct: false },
      { D: "It is not related to recursion", correct: false }
    ]
  },
  {
    question: "How does recursion contribute to solving problems with a divide-and-conquer approach?",
    answers: [
      { A: "Recursion divides a problem into smaller sub-problems that are easier to solve", correct: true },
      { B: "Recursion increases the complexity of a problem", correct: false },
      { C: "Recursion avoids solving problems altogether", correct: false },
      { D: "Divide-and-conquer is not related to recursion", correct: false }
    ]
  },
  {
    question: "What is the significance of the call stack in recursive function calls?",
    answers: [
      { A: "It stores base cases", correct: false },
      { B: "It ensures that recursion is avoided", correct: false },
      { C: "It manages the order of function calls and their respective local variables", correct: true },
      { D: "It is not involved in recursive functions", correct: false }
    ]
  },
  {
    question: "How does recursion simplify the implementation of certain algorithms?",
    answers: [
      { A: "Recursion makes algorithms more complex", correct: false },
      { B: "Recursion is not used in algorithms", correct: false },
      { C: "Recursion provides a concise and elegant solution to certain problems", correct: true },
      { D: "Recursion is limited to simple calculations", correct: false }
    ]
  },
  {
    question: "What is tail recursion, and how does it differ from regular recursion?",
    answers: [
      { A: "Tail recursion involves loops, while regular recursion does not", correct: false },
      { B: "Tail recursion is more memory-efficient, as the recursive call is the last operation in the function", correct: true },
      { C: "Tail recursion is slower than regular recursion", correct: false },
      { D: "There is no difference between tail recursion and regular recursion", correct: false }
    ]
  },
  {
    question: "Can all recursive problems be solved iteratively (using loops), and vice versa?",
    answers: [
      { A: "Yes, all recursive problems can be solved iteratively", correct: false },
      { B: "No, some problems are better suited for recursion, while others are better suited for iteration", correct: true },
      { C: "Iterative solutions are always more efficient than recursive solutions", correct: false },
      { D: "There is no difference between iterative and recursive solutions", correct: false }
    ]
  }
];

export default RecursionQuestions;
