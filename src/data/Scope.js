const Scope = [
  // Beginners
  {
    question: "What is JavaScript scope?",
    answers: [
      { a: "A tool for debugging", correct: false },
      { b: "The set of rules that dictate where a variable can be accessed", correct: true },
      { c: "A JavaScript library for animations", correct: false },
      { d: "The structure of HTML documents", correct: false }
    ]
  },
  {
    question: "What are the two types of scope in JavaScript?",
    answers: [
      { a: "Singular and Plural", correct: false },
      { b: "Local and Global", correct: true },
      { c: "Basic and Advanced", correct: false },
      { d: "Public and Private", correct: false }
    ]
  },
  {
    question: "What is the global scope in JavaScript?",
    answers: [
      { a: "The outermost layer of the Earth's atmosphere", correct: false },
      { b: "The scope that encompasses the entire JavaScript program", correct: true },
      { c: "The scope of a single function", correct: false },
      { d: "The scope of a loop", correct: false }
    ]
  },
  {
    question: "How do you declare a variable in the global scope?",
    answers: [
      { a: "Using the `var` keyword", correct: true },
      { b: "Using the `let` keyword", correct: false },
      { c: "Using the `const` keyword", correct: false },
      { d: "Both a and c", correct: false }
    ]
  },
  {
    question: "Explain the concept of local scope in JavaScript.",
    answers: [
      { a: "It refers to the scope of a variable declared inside a function or block", correct: true },
      { b: "It refers to the scope of a variable declared globally", correct: false },
      { c: "It is the same as the global scope", correct: false },
      { d: "It is related to the scope of a loop", correct: false }
    ]
  },
  {
    question: "What is block scope? Provide an example.",
    answers: [
      { a: "A type of programming language", correct: false },
      { b: "A scope that is not associated with any specific block of code", correct: false },
      { c: "A scope that is confined within curly braces {}", correct: true },
      { d: "A scope only used in object-oriented programming", correct: false }
    ]
  },
  {
    question: "How does variable hoisting relate to scope in JavaScript?",
    answers: [
      { a: "It has no relation to scope", correct: false },
      { b: "It allows variables to be accessed before they are declared", correct: true },
      { c: "It only occurs with global variables", correct: false },
      { d: "It is the same as lexical scope", correct: false }
    ]
  },
  // Intermediate
  {
    question: "Explain the difference between `var`, `let`, and `const` in terms of scope.",
    answers: [
      { a: "They all behave the same way in terms of scope", correct: false },
      { b: "`var` has function scope, `let` and `const` have block scope", correct: true },
      { c: "`let` has function scope, `var` and `const` have block scope", correct: false },
      { d: "`const` has global scope, `var` and `let` have local scope", correct: false }
    ]
  },
  {
    question: "What is closure in JavaScript, and how does it relate to scope? Provide an example.",
    answers: [
      { a: "A way to close the JavaScript program", correct: false },
      { b: "A combination of a function and the lexical environment within which that function was declared", correct: true },
      { c: "A type of loop in JavaScript", correct: false },
      { d: "A mechanism for closing HTML tags", correct: false }
    ]
  },
  {
    question: "Discuss the concept of lexical scope and how it influences variable resolution in JavaScript.",
    answers: [
      { a: "Lexical scope is the same as block scope", correct: false },
      { b: "Lexical scope is determined by the order of variable declarations", correct: false },
      { c: "Lexical scope is the scope defined by the location of the code in the source code", correct: true },
      { d: "Lexical scope only applies to global variables", correct: false }
    ]
  }
];

export default Scope;
