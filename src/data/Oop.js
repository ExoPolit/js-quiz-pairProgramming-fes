const questions = [
  {
    question: "What is Object-Oriented Programming (OOP) in JavaScript??",
    answers: [
      { A: "A specific JavaScript data type", correct: false },
      {
        B: "A programming paradigm based on objects and classes",
        correct: true,
      },
      { C: "A method for creating loops", correct: false },
      { D: "A JavaScript library for graphics", correct: false },
    ],
  },
  {
    question: "In OOP, what is an object?",
    answers: [
      { A: "A loop construct", correct: false },
      { B: "A special type of variable", correct: false },
      { C: "A function with a specific syntax", correct: false },
      { D: "A collection of data and behavior", correct: true }, // true
    ],
  },
  {
    question:
      "Which keyword is used to create a new instance of an object in JavaScript?",
    answers: [
      { A: "`object`", correct: false },
      { B: "`instance`", correct: false },
      { C: "`new`", correct: true }, // true
      { D: "`create`", correct: false },
    ],
  },
  {
    question: "What is a constructor in OOP?",
    answers: [
      { A: "A method used to destroy objects", correct: false },
      { B: "A function that creates and initializes objects", correct: true }, // true
      {
        C: "A keyword for creating new properties in an objects",
        correct: false,
      },
      { D: "A built-in JavaScript class", correct: false },
    ],
  },
  {
    question: "What is encapsulation in OOP?",
    answers: [
      { A: "The process of creating instances of objects", correct: false },
      {
        B: "The bundling of data and the methods that operate on that data into a single unit",
        correct: true,
      }, // true
      {
        C: "The ability of an object to inherit properties from multiple classes",
        correct: false,
      },
      {
        D: "The concept of reusing code from one class in another class",
        correct: false,
      },
    ],
  },
  {
    question:
      "What is inheritance in the context of Object-Oriented Programming (OOP) in JavaScript?",
    answers: [
      {
        A: " The ability of an object to inherit properties from multiple classes",
        correct: false,
      },
      { B: "The process of creating new instances of objects", correct: false },
      {
        C: "The bundling of data and methods into a single unit",
        correct: false,
      },
      {
        D: "The ability of a class to reuse properties and methods of another class",
        correct: true,
      }, // true
    ],
    explanation: "Inheritance allows a class to inherit properties and methods from another class, fostering code reuse and creating a hierarchy of classes. The class that is being inherited from is called the superclass or parent class, and the class that inherits is called the subclass or child class. The subclass inherits the properties and methods of the superclass, and it can also have additional or overridden properties and methods. Inheritance is a fundamental concept in OOP that supports the creation of more specialized classes based on existing ones"
  },
  {
    question:
      "What is polymorphism in the context of Object-Oriented Programming (OOP) in JavaScript?",
    answers: [
      {
        A: "The ability of an object to inherit properties from multiple classes",
        correct: false,
      },
      { B: "The process of creating new instances of objects", correct: false },
      {
        C: "The bundling of data and methods into a single unit",
        correct: false,
      },
      {
        D: "The ability of an object to take on multiple forms or types",
        correct: true,
      }, // true
    ],
    explanation:
      "Polymorphism is the ability of an object to take on multiple forms or types.In JavaScript, polymorphism is achieved through method overriding, which is when a method in a child class overrides a method in a parent class.",
  },
];

export default questions;
