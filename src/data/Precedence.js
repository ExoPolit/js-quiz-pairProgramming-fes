const Precedence = [
  // Beginner
  {
    question: "What is operator precedence in JavaScript?",
    answers: [
      { a: "The order in which operators are evaluated in an expression", correct: true },
      { b: "The priority given to JavaScript keywords", correct: false },
      { c: "The order in which variables are declared", correct: false },
      { d: "The hierarchy of function calls in a script", correct: false }
    ]
  },
  {
    question: "Which operator has the highest precedence in JavaScript?",
    answers: [
      { a: "`+` (Addition)", correct: false },
      { b: "`=` (Assignment)", correct: false },
      { c: "`*` (Multiplication)", correct: false },
      { d: "`()` (Parentheses)", correct: true }
    ]
  },
  {
    question: "What is the purpose of parentheses in an expression with multiple operators?",
    answers: [
      { a: "They have no effect on the expression", correct: false },
      { b: "They are used to declare variables", correct: false },
      { c: "They override the default operator precedence and control the order of evaluation", correct: true },
      { d: "They indicate the end of a statement", correct: false }
    ]
  },
  {
    question: "In the expression `a + b * c`, what is the result of the multiplication operation?",
    answers: [
      { a: "`a`", correct: false },
      { b: "`b`", correct: true },
      { c: "`c`", correct: false },
      { d: "The result depends on the values of `a`, `b`, and `c`", correct: false }
    ]
  },
  // Intermediate
  {
    question: "What is the result of the expression `3 + 4 * 2 / (1 - 5) ** 2`?",
    answers: [
      { a: "1", correct: false },
      { b: "-5", correct: false },
      { c: "25", correct: true },
      { d: "7", correct: false }
    ]
  },
  {
    question: "How does the assignment operator (`=`) associate in terms of precedence?",
    answers: [
      { a: "Right to left", correct: false },
      { b: "Left to right", correct: true },
      { c: "It depends on the context", correct: false },
      { d: "Assignment operator does not have associativity", correct: false }
    ]
  },
  {
    question: "What is the purpose of the logical AND operator (`&&`) in JavaScript?",
    answers: [
      { a: "It performs bitwise AND operation", correct: false },
      { b: "It concatenates strings", correct: false },
      { c: "It checks if both operands are true", correct: true },
      { d: "It is used for exponentiation", correct: false }
    ]
  },
  {
    question: "Which operator has higher precedence, the equality operator (`==`) or the logical AND operator (`&&`)?",
    answers: [
      { a: "`==` (Equality)", correct: true },
      { b: "`&&` (Logical AND)", correct: false },
      { c: "They have the same precedence", correct: false },
      { d: "Precedence does not apply to these operators", correct: false }
    ]
  },
  {
    question: "How can you change the default order of evaluation in an expression without using parentheses?",
    answers: [
      { a: "By using the `await` keyword", correct: false },
      { b: "By using the `yield` keyword", correct: false },
      { c: "By changing the operator associativity", correct: false },
      { d: "It is not possible without parentheses", correct: true }
    ]
  },
  {
    question: "What is the result of the expression `1 + '2'` in JavaScript?",
    answers: [
      { a: "`3`", correct: false },
      { b: "`'12'`", correct: true },
      { c: "`3` (number)", correct: false },
      { d: "`'32'`", correct: false }
    ]
  }
];

export default Precedence;
