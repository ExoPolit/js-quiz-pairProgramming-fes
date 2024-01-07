const EventQuestions = [
    {
      question: "What is an event in JavaScript?",
      answers: [
        { A: "A function", correct: false },
        { B: "A loop construct", correct: false },
        { C: "An action or occurrence detected by the browser", correct: true },
        { D: "A data type", correct: false }
      ]
    },
    {
      question: "How do you attach an event handler to an HTML element in JavaScript?",
      answers: [
        { A: "element.attachEvent('click', myFunction);", correct: false },
        { B: "element.on('click', myFunction);", correct: false },
        { C: "element.addEventListener('click', myFunction);", correct: true },
        { D: "element.click(myFunction);", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `event.preventDefault()` method in JavaScript?",
      answers: [
        { A: "To stop the execution of the event handler", correct: false },
        { B: "To prevent the default behavior of an event, such as a form submission or a link click", correct: true },
        { C: "To trigger the default behavior of an event", correct: false },
        { D: "To attach an event listener", correct: false }
      ]
    },
    {
      question: "Which event is triggered when a user clicks on an HTML element?",
      answers: [
        { A: "mouseover", correct: false },
        { B: "click", correct: true },
        { C: "keydown", correct: false },
        { D: "submit", correct: false }
      ]
    },
    {
      question: "How do you remove an event listener in JavaScript?",
      answers: [
        { A: "element.removeListener('click', myFunction);", correct: false },
        { B: "element.removeEventListener('click', myFunction);", correct: true },
        { C: "element.removeEvent('click', myFunction);", correct: false },
        { D: "element.off('click', myFunction);", correct: false }
      ]
    },
    {
      question: "What is event propagation in JavaScript?",
      answers: [
        { A: "The process of triggering an event", correct: false },
        { B: "The flow of events through the DOM hierarchy", correct: true },
        { C: "The bubbling up of events from child to parent elements", correct: false },
        { D: "The capturing of events from parent to child elements", correct: false }
      ]
    },
    {
      question: "What is event delegation in JavaScript?",
      answers: [
        { A: "Attaching multiple event listeners to the same element", correct: false },
        { B: "Dynamically adding and removing Bananas", correct: false },
        { C: "Using a single event listener to manage multiple elements", correct: true },
        { D: "Preventing the default behavior of an event", correct: false }
      ]
    },
    {
      question: "Which event is triggered when an input field loses focus?",
      answers: [
        { A: "focus", correct: false },
        { B: "blur", correct: true },
        { C: "change", correct: false },
        { D: "input", correct: false }
      ]
    },
    {
      question: "What is the purpose of the `event.stopPropagation()` method in JavaScript?",
      answers: [
        { A: "To prevent the default behavior of an event", correct: false },
        { B: "To stop the execution of the event handler", correct: false },
        { C: "To stop the propagation of the event to parent or child elements", correct: true },
        { D: "To trigger the default behavior of an event", correct: false }
      ]
    },
    {
      question: "How do you handle asynchronous events in JavaScript?",
      answers: [
        { A: "Using the `setInterval` method", correct: false },
        { B: "Using the `async/await` keyword", correct: false },
        { C: "Using callback functions or promises", correct: true },
        { D: "Both b and c", correct: false }
      ]
    }
  ];
  
  export default EventQuestions;