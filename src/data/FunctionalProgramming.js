const questions = [
    {
        question: "What is the primary concept in Functional Programming?",
        answers:[
            {A: "Objects and classes", correct: false},
            {B: "Loops and iterations", correct: false},
            {C: "Functions as first-class citizens", correct: true}, //true
            {D: "Inheritance and polymorphism", correct: false}
    
        ]
},
{
    question: "What is immutability in Functional Programming?",
    answers:[
        {A: "The ability to change the value of variables", correct: false},
        {B: "The idea that once a variable is assigned, its value cannot be changed", correct: true}, //true
        {C: "The use of loops to iterate over data", correct: false},
        {D: "The creation of new instances of objects", correct: false}

    ]
},
{
    question: "What is a pure function in Functional Programming?",
    answers:[
        {A: "A function with side effects", correct: false},
        {B: "A function that modifies global variables", correct: false},
        {C: "A function that always returns the same output for the same input and has no side effects", correct: true}, //true
        {D: "A function that uses loops and conditional statements", correct: false}

    ]
},
{
    question: "What is a higher-order function in JavaScript?",
    answers:[
        {A: "A function that operates on arrays", correct: false},
        {B: "A function that takes another function as an argument or returns a function", correct: true},//true
        {C: "A function that creates new instances of objects", correct: false},
        {D: "A function that only works with primitive data types", correct: false}

    ]
},
{
    question: "What is the purpose of the `map` function in Functional Programming?",
    answers:[
        {A: "To create a new array with the same elements as the original array", correct: true},
        {B: "To modify the original array in place", correct: false},
        {C: "To iterate over an array using a loop", correct: false},
        {D: "To filter elements in an array based on a condition", correct: false}

    ]
},
]