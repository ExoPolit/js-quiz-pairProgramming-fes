const Classes = [
  // Beginner
  {
    question: "How do you define a class in JavaScript using the ES6 class syntax?",
    answers: [
      { a: "class MyClass = {}", correct: false },
      { b: "function MyClass() {}", correct: false },
      { c: "create class MyClass {}", correct: false },
      { d: "class MyClass {}", correct: true }
    ]
  },
  {
    question: "What is the purpose of the `constructor` method in a class?",
    answers: [
      { a: "It defines static properties", correct: false },
      { b: "It initializes the class instance with default values", correct: true },
      { c: "It creates new class methods", correct: false },
      { d: "It is not required in a class", correct: false }
    ]
  },
  {
    question: "How do you create an instance of a class in JavaScript?",
    answers: [
      { a: "new instance MyClass();", correct: false },
      { b: "create MyClass();", correct: false },
      { c: "MyClass.getInstance();", correct: false },
      { d: "new MyClass();", correct: true }
    ]
  },
  {
    question: "What is the purpose of the `super` keyword in a subclass constructor?",
    answers: [
      { a: "It refers to the superclass instance", correct: true },
      { b: "It creates a new instance of the superclass", correct: false },
      { c: "It initializes the subclass with default values", correct: false },
      { d: "It is not used in subclasses", correct: false }
    ]
  },
  // Intermediate
  {
    question: "Explain the concept of inheritance in classes in JavaScript.",
    answers: [
      { a: "The ability of a class to reuse properties and methods of another class", correct: true },
      { b: "The process of creating new instances of objects", correct: false },
      { c: "The bundling of data and methods into a single unit", correct: false },
      { d: "The ability of an object to inherit properties from multiple classes", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `static` keyword in a class method?",
    answers: [
      { a: "It makes the method asynchronous", correct: false },
      { b: "It allows the method to be called on the class itself, not on an instance", correct: true },
      { c: "It prevents the method from being overridden in subclasses", correct: false },
      { d: "It creates a new instance of the class", correct: false }
    ]
  },
  {
    question: "How do you implement encapsulation in JavaScript classes?",
    answers: [
      { a: "By using the `private` keyword for properties", correct: false },
      { b: "By wrapping the class in an IIFE (Immediately Invoked Function Expression)", correct: false },
      { c: "By bundling data and methods into a single unit", correct: true },
      { d: "By using the `encapsulate` keyword in the class definition", correct: false }
    ]
  },
  {
    question: "What is the purpose of the `extends` keyword in class inheritance?",
    answers: [
      { a: "It creates a new instance of the superclass", correct: false },
      { b: "It indicates that a class is a subclass of another class", correct: true },
      { c: "It allows a class to inherit from multiple classes", correct: false },
      { d: "It is not a valid keyword in class definitions", correct: false }
    ]
  },
  {
    question: "Explain the difference between instance methods and static methods in a class.",
    answers: [
      { a: "Instance methods are called on the class itself, while static methods are called on class instances", correct: false },
      { b: "Instance methods can be overridden in subclasses, while static methods cannot", correct: false },
      { c: "Instance methods operate on class instances, while static methods operate on the class itself", correct: true },
      { d: "There is no difference between instance and static methods", correct: false }
    ]
  },
  {
    question: "How do you implement a getter and setter in a class?",
    answers: [
      { a: "Using the `get` and `set` keywords followed by method names", correct: true },
      { b: "Declaring them as regular methods in the class", correct: false },
      { c: "By using the `getter` and `setter` keywords", correct: false },
      { d: "It is not possible to create getters and setters in a class", correct: false }
    ]
  }
];

export default Classes;
