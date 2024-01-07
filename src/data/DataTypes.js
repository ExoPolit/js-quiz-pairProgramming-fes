const DataTypesQuestions = [
    {
      question: "What is the primary purpose of data types in JavaScript?",
      answers: [
        { A: "To define the appearance of data", correct: false },
        { B: "To specify the size of variables", correct: false },
        { C: "To represent different kinds of values", correct: true },
        { D: "To organize data in memory", correct: false }
      ]
    },
    {
      question: "Which keyword is used to declare variables in JavaScript?",
      answers: [
        { A: "var", correct: true },
        { B: "let", correct: true },
        { C: "const", correct: true },
        { D: "All of the above", correct: false }
      ]
    },
    {
      question: "What is the result of `typeof 'Hello'` in JavaScript?",
      answers: [
        { A: '"string"', correct: true },
        { B: '"number"', correct: false },
        { C: '"boolean"', correct: false },
        { D: '"banana"', correct: false }
      ]
    },
    {
      question: "How do you declare a boolean variable in JavaScript?",
      answers: [
        { A: "var myBool = true;", correct: true },
        { B: 'var myBool = "true";', correct: false },
        { C: "var myBool = 1;", correct: false },
        { D: "var myBool = false;", correct: true }
      ]
    },
    {
      question: "What does the `null` value represent in JavaScript?",
      answers: [
        { A: "An empty string", correct: false },
        { B: "A non-existent value or no value at all", correct: true },
        { C: "The absence of a variable", correct: false },
        { D: "A placeholder for undefined variables", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `undefined` value in JavaScript?",
      answers: [
        { A: "It represents an empty array", correct: false },
        { B: "It is a placeholder for uninitialized variables", correct: true },
        { C: "It is equivalent to the `null` value", correct: false },
        { D: "It is used to terminate loops", correct: false }
      ]
    },
    {
      question: "What is the difference between `null` and `undefined` in JavaScript?",
      answers: [
        { A: "They are interchangeable", correct: false },
        { B: "`null` represents a non-existent value, while `undefined` represents an uninitialized value", correct: true },
        { C: "`undefined` represents a non-existent value, while `null` represents an uninitialized value", correct: false },
        { D: "They both represent the absence of a banana", correct: false }
      ]
    },
    {
      question: "How do you check the data type of a variable in JavaScript?",
      answers: [
        { A: "Using the `typeOf` operator", correct: false },
        { B: "Using the `dataType` property", correct: false },
        { C: "Using the `typeof` operator", correct: true },
        { D: "Using the `variableType` method", correct: false }
      ]
    },
    {
      question: "What is the result of `typeof [1, 2, 3]` in JavaScript?",
      answers: [
        { A: '"array"', correct: false },
        { B: '"object"', correct: true },
        { C: '"number"', correct: false },
        { D: '"undefined"', correct: false }
      ]
    },
    {
      question: "How do you convert a string to a number in JavaScript?",
      answers: [
        { A: "parseInt()", correct: true },
        { B: "parseFloat()", correct: true },
        { C: "Number()", correct: true },
        { D: "All of the above", correct: true }
      ]
    }
  ];
  
  export default DataTypesQuestions;