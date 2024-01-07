const EventLoopQuestions = [
    {
      question: "What is the Call Stack in JavaScript?",
      answers: [
        { A: "A data structure that stores function calls", correct: true },
        { B: "A built-in function for making API calls", correct: false },
        { C: "A way to declare variables", correct: false },
        { D: "A type of loop structure", correct: false }
      ]
    },
    {
      question: "What is the purpose of the Event Loop in JavaScript?",
      answers: [
        { A: "To handle asynchronous operations and callbacks", correct: true },
        { B: "To create animations in the browser", correct: false },
        { C: "To define event listeners", correct: false },
        { D: "To manage the order of statements in a function", correct: false }
      ]
    },
    {
      question: "How does the Call Stack work in JavaScript?",
      answers: [
        { A: "It executes functions in a first-in, first-out (FIFO) order", correct: false },
        { B: "It executes functions in a last-in, first-out (LIFO) order", correct: true },
        { C: "It executes functions randomly", correct: false },
        { D: "It is not involved in the execution of JavaScript code", correct: false }
      ]
    },
    {
      question: "What happens when a function is invoked in JavaScript?",
      answers: [
        { A: "It is added to the Call Stack for execution", correct: true },
        { B: "It is immediately executed without being added to the Call Stack", correct: false },
        { C: "It is skipped in the execution order", correct: false },
        { D: "It triggers an error", correct: false }
      ]
    },
    {
      question: "Explain the concept of the Event Loop in relation to asynchronous operations.",
      answers: [
        { A: "It executes asynchronous operations in parallel with synchronous operations", correct: false },
        { B: "It ensures that asynchronous operations are always executed first", correct: false },
        { C: "It manages the execution of asynchronous operations by placing them in the Callback Queue", correct: true },
        { D: "It prevents the execution of asynchronous operations in JavaScript", correct: false }
      ]
    },
    {
      question: "What is the purpose of the Callback Queue in the Event Loop?",
      answers: [
        { A: "To store callbacks and events waiting to be executed", correct: true },
        { B: "To manage the order of statements in a function", correct: false },
        { C: "To handle animations in the browser", correct: false },
        { D: "To declare variables", correct: false }
      ]
    },
    {
      question: "How does JavaScript handle blocking and non-blocking code execution?",
      answers: [
        { A: "JavaScript always executes code in a blocking manner", correct: false },
        { B: "Blocking code execution can lead to the freezing of the user interface", correct: true },
        { C: "Non-blocking code allows other operations to continue while waiting for an asynchronous task to complete", correct: true },
        { D: "Both b and c", correct: true }
      ]
    },
    {
      question: "What is the role of the Event Loop in preventing the browser from becoming unresponsive?",
      answers: [
        { A: "It stops the execution of JavaScript code when a blocking operation occurs", correct: false },
        { B: "It offloads heavy computations to a separate thread", correct: false },
        { C: "It ensures that the main thread remains responsive by handling asynchronous tasks in the background", correct: true },
        { D: "It has no impact on browser responsiveness", correct: false }
      ]
    },
    {
      question: "How does the Event Loop handle Promises in JavaScript?",
      answers: [
        { A: "It doesn't handle Promises; Promises are handled by the Callback Queue", correct: false },
        { B: "It executes Promises immediately when they are created", correct: false },
        { C: "It places resolved or rejected Promises in the Callback Queue for execution", correct: true },
        { D: "It ignores Promises and does not affect their execution", correct: false }
      ]
    },
    {
      question: "What is the relationship between the Call Stack, Callback Queue, and Event Loop in JavaScript?",
      answers: [
        { A: "The Call Stack executes functions, the Callback Queue stores callbacks, and the Event Loop manages the flow of execution between them", correct: true },
        { B: "The Callback Queue executes functions, the Call Stack stores callbacks, and the Event Loop manages the flow of execution between them", correct: false },
        { C: "The Event Loop executes functions, the Call Stack stores callbacks, and the Callback Queue manages the flow of execution between them", correct: false },
        { D: "There is no relationship between these concepts", correct: false }
      ]
    }
  ];
  
  export default EventLoopQuestions;
  