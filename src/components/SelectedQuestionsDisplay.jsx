import React from "react";
import QuizModule from "../pages/QuizModule";


const SelectedQuestionsDisplay = ({ selectedQuestions }) => {
    return (
        <div>
        <h2>Selected Questions:{ }</h2>
        <ul>
            {selectedQuestions.map((question, index) => (
            <li key={index}>{question.question}</li>
            ))}
        </ul>
        </div>
    );
    };

export default SelectedQuestionsDisplay;