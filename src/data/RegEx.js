const RegEx = [
  // Beginner
  {
    question: "What is a regular expression (regex) in JavaScript used for?",
    answers: [
      { A: "Declaring variables", correct: false },
      { B: "Defining functions", correct: false },
      { C: "Pattern matching in strings", correct: true },
      { D: "Mathematical calculations", correct: false }
    ]
  },
  {
    question: "Which function in JavaScript is commonly used for testing a regular expression against a string?",
    answers: [
      { A: "regex.match()", correct: false },
      { B: "regex.test()", correct: true },
      { C: "string.match()", correct: false },
      { D: "string.test()", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `^` symbol in a regular expression pattern?",
    answers: [
      { A: "It matches the end of a string", correct: false },
      { B: "It matches the start of a string", correct: true },
      { C: "It represents any character", correct: false },
      { D: "It is not a valid symbol in regex", correct: false }
    ]
  },
  {
    question: "Which regex pattern would match any digit from 0 to 9?",
    answers: [
      { A: "[0-9]", correct: true },
      { B: "/\\d/", correct: false },
      { C: "/\\w/", correct: false },
      { D: "/\\s/", correct: false }
    ]
  },
  // Intermediate
  {
    question: "What does the `+` symbol represent in a regular expression pattern?",
    answers: [
      { A: "It matches one or more occurrences of the preceding character or group", correct: true },
      { B: "It matches zero or more occurrences of the preceding character or group", correct: false },
      { C: "It represents the end of a line", correct: false },
      { D: "It is not a valid symbol in regex", correct: false }
    ]
  },
  {
    question: "How do you specify a range of characters in square brackets `[ ]` in a regex pattern?",
    answers: [
      { A: "[a-z]", correct: true },
      { B: "[^0-9]", correct: true },
      { C: "[A-Za-z]", correct: true },
      { D: "All of the above", correct: true }
    ]
  },
  {
    question: "What is the purpose of the `*` symbol in a regex pattern?",
    answers: [
      { A: "It matches the start of a line", correct: false },
      { B: "It matches zero or more occurrences of the preceding character or group", correct: true },
      { C: "It matches one or more occurrences of the preceding character or group", correct: false },
      { D: "It represents any character", correct: false }
    ]
  },
  {
    question: "How do you use the `\\d` shorthand in a regex pattern?",
    answers: [
      { A: "It matches any digit", correct: true },
      { B: "It matches any non-digit", correct: false },
      { C: "It matches the start of a line", correct: false },
      { D: "It matches the end of a line", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `()` parentheses in a regex pattern?",
    answers: [
      { A: "They define a character class", correct: false },
      { B: "They group expressions and capture matched content", correct: true },
      { C: "They represent an OR condition", correct: false },
      { D: "They denote a wildcard character", correct: false }
    ]
  },
  {
    question: "What is the difference between a greedy and a non-greedy quantifier in regex?",
    answers: [
      { A: "Greedy quantifiers match as much as possible, while non-greedy quantifiers match as little as possible", correct: true },
      { B: "Non-greedy quantifiers match as much as possible, while greedy quantifiers match as little as possible", correct: false },
      { C: "There is no difference between them", correct: false },
      { D: "Greedy quantifiers are used for characters, and non-greedy quantifiers are used for digits", correct: false }
    ]
  }
]

export default RegEx;
