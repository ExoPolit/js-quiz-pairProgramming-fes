const BOM = [
  {
    question: "What does BOM stand for in JavaScript?",
    answers: [
      { A: "Browser Object Model", correct: true },
      { B: "Basic Object Method", correct: false },
      { C: "Binary Object Model", correct: false },
      { D: "Browser Operating Mechanism", correct: false }
    ]
  },
  {
    question: "Which global object in the BOM represents the browser window?",
    answers: [
      { A: "document", correct: false },
      { B: "window", correct: true },
      { C: "navigator", correct: false },
      { D: "location", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `document` object in the BOM?",
    answers: [
      { A: "To represent the browser window", correct: false },
      { B: "To navigate to different URLs", correct: false },
      { C: "To manipulate the content of the current HTML document", correct: true },
      { D: "To store information about the user's browser", correct: false }
    ]
  },
  {
    question: "Which BOM object provides information about the user's browser?",
    answers: [
      { A: "document", correct: false },
      { B: "window", correct: false },
      { C: "navigator", correct: true },
      { D: "location", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `location` object in the BOM?",
    answers: [
      { A: "To represent the browser window", correct: false },
      { B: "To navigate to different URLs", correct: true },
      { C: "To manipulate the content of the current HTML document", correct: false },
      { D: "To store information about the user's browser", correct: false }
    ]
  },
  {
    question: "Which method is used to open a new browser window in JavaScript?",
    answers: [
      { A: "window.open()", correct: true },
      { B: "window.create()", correct: false },
      { C: "document.open()", correct: false },
      { D: "navigator.open()", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `screen` object in the BOM?",
    answers: [
      { A: "To represent the browser window", correct: false },
      { B: "To navigate to different URLs", correct: false },
      { C: "To manipulate the content of the current HTML document", correct: false },
      { D: "To provide information about the user's screen", correct: true }
    ]
  },
  {
    question: "Which BOM object is used to store and manage browser history?",
    answers: [
      { A: "history", correct: true },
      { B: "navigator", correct: false },
      { C: "location", correct: false },
      { D: "window", correct: false }
    ]
  },
  {
    question: "What does the `resizeTo()` method do in the `window` object of the BOM?",
    answers: [
      { A: "Resizes the browser window to a specified width and height", correct: true },
      { B: "Resizes an image within the document", correct: false },
      { C: "Resizes the font size of the document", correct: false },
      { D: "Resizes the entire HTML document", correct: false }
    ]
  },
  {
    question: "Which BOM object is commonly used for interacting with cookies?",
    answers: [
      { A: "document", correct: false },
      { B: "window", correct: false },
      { C: "navigator", correct: false },
      { D: "document.cookie", correct: true }
    ]
  },
]

export default BOM;
