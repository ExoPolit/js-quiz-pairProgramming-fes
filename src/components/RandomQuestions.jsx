import React, { useState } from "react";
import { Button } from "react-bootstrap";
import categories from "../data/CategoryData";

const RandomQuestions = ({ selectQuestions }) => {
  const selectRandomQuestions = () => {
    const allQuestions = categories.reduce(
      (accumulator, category) => accumulator.concat(Object.values(category)),
      []
    );

    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5);

    const selected = shuffledQuestions.slice(0, 10);

    selectQuestions(selected);
  };

 
    return (
        <div>
          <h2>Selected Questions:</h2>
          <ul>
            {selectQuestions.map((question, index) => (
              <li key={index}>{question.question}</li>
            ))}
          </ul>
        </div>
  );
};

export default RandomQuestions;
