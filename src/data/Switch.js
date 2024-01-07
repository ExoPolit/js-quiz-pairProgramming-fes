const SwitchQuestions = [
    {
      question: "What is the primary purpose of the `switch` statement in JavaScript?",
      answers: [
        { A: "To declare variables", correct: false },
        { B: "To perform a conditional execution of code with multiple possible outcomes", correct: true },
        { C: "To create a loop", correct: false },
        { D: "To define an object", correct: false }
      ]
    },
    {
      question: "Which of the following statements is true about the `switch` statement?",
      answers: [
        { A: "It can only be used with string values", correct: false },
        { B: "It compares values using the strict equality operator (`===`)", correct: false },
        { C: "It can be a replacement for the `if-else` statement in some scenarios", correct: true },
        { D: "It automatically includes a default case", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `break` statement within a `switch` statement?",
      answers: [
        { A: "To end the entire script", correct: false },
        { B: "To jump to the next iteration of a loop", correct: false },
        { C: "To terminate the `switch` statement and exit the block", correct: true },
        { D: "To declare a new variable", correct: false }
      ]
    },
    {
      question: "Which data type can be used as an expression in a `switch` statement?",
      answers: [
        { A: "Object", correct: false },
        { B: "Array", correct: false },
        { C: "Number", correct: false },
        { D: "All of the above", correct: true }
      ]
    },
    {
      question: "What happens if the `break` statement is omitted in a `switch` statement case?",
      answers: [
        { A: "It results in a syntax error", correct: false },
        { B: "It has no effect; the code continues to the next case regardless", correct: false },
        { C: "It causes an infinite loop", correct: false },
        { D: "It triggers an automatic fall-through to the next case", correct: true }
      ]
    }
  ];
  
  export default SwitchQuestions;
  