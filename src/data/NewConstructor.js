const NewConstructorQuestions = [
    {
      question: "What is the purpose of the 'new' keyword in JavaScript?",
      answers: [
        { A: "To create a new variable", correct: false },
        { B: "To initialize a loop", correct: false },
        { C: "To instantiate an object using a constructor function", correct: true },
        { D: "To declare a function", correct: false }
      ]
    },
    {
      question: "How does the 'new' keyword relate to constructor functions in JavaScript?",
      answers: [
        { A: "It is used to define constructor functions", correct: false },
        { B: "It creates instances of objects based on a constructor function", correct: true },
        { C: "It is an alternative to the 'this' keyword", correct: false },
        { D: "It is not associated with constructor functions", correct: false }
      ]
    },
    {
      question: "What happens if you forget to use the 'new' keyword when creating an object with a constructor function?",
      answers: [
        { A: "The object is created successfully", correct: false },
        { B: "An error occurs, and the object is not created as expected", correct: true },
        { C: "The constructor function is ignored", correct: false },
        { D: "The object is created, but it lacks properties and methods", correct: false }
      ]
    },
    {
      question: "What is the role of the 'this' keyword inside a constructor function?",
      answers: [
        { A: "It refers to the global object", correct: false },
        { B: "It is a placeholder for variable names", correct: false },
        { C: "It refers to the instance of the object being created", correct: true },
        { D: "It is not used inside constructor functions", correct: false }
      ]
    },
    {
      question: "Explain the concept of prototype chaining in the context of objects created with the 'new' keyword.",
      answers: [
        { A: "It refers to the process of linking objects to the global prototype", correct: false },
        { B: "It is a method for defining private properties in objects", correct: false },
        { C: "It is the mechanism by which objects inherit properties and methods from their constructor's prototype", correct: true },
        { D: "It is not related to objects created with the 'new' keyword", correct: false }
      ]
    },
    {
      question: "How can you check if an object was created using a specific constructor function in JavaScript?",
      answers: [
        { A: "By using the 'isObjectOf' keyword", correct: false },
        { B: "By checking the object's prototype chain", correct: true },
        { C: "By comparing the object's type with the constructor function's name", correct: false },
        { D: "There is no way to determine the constructor function used", correct: false }
      ]
    },
    {
      question: "What is the relationship between the 'constructor' property and constructor functions in JavaScript?",
      answers: [
        { A: "The 'constructor' property refers to the constructor function itself", correct: false },
        { B: "The 'constructor' property is automatically added to objects and points to their constructor function", correct: true },
        { C: "The 'constructor' property is used for creating new objects", correct: false },
        { D: "The 'constructor' property is not applicable to constructor functions", correct: false }
      ]
    },
    {
      question: "How does the 'instanceof' operator work in determining the type of an object created with the 'new' keyword?",
      answers: [
        { A: "It checks if the object's prototype chain includes the prototype of a specific constructor function", correct: true },
        { B: "It verifies the object's type by directly comparing it to the constructor function's name", correct: false },
        { C: "It is not related to determining object types", correct: false },
        { D: "It checks if the object is an instance of a specific class", correct: false }
      ]
    },
    {
      question: "What is the significance of the 'prototype' property in a constructor function?",
      answers: [
        { A: "It is used for defining private properties", correct: false },
        { B: "It stores the constructor function's name", correct: false },
        { C: "It is a reference to the prototype object that will be inherited by instances of the constructor", correct: true },
        { D: "It is not applicable to constructor functions", correct: false }
      ]
    },
    {
      question: "Can you use the 'new' keyword with built-in JavaScript objects like arrays and functions?",
      answers: [
        { A: "Yes, it can be used with any type of object", correct: false },
        { B: "No, the 'new' keyword is only applicable to custom constructor functions", correct: true },
        { C: "Yes, but it has a different meaning for built-in objects", correct: false },
        { D: "The 'new' keyword is not allowed in JavaScript"},
        ]
    },
    ];

export default NewConstructorQuestions;
  