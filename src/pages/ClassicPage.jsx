import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categories from "../data/CategoryData";

const ClassicPage = () => {
  const [classicQuestions, setClassicQuestions] = useState([]);

  useEffect(() => {
    setClassicQuestions(getRandomQuestions(40));
  }, []);

  function getRandomQuestions(count) {
    const allQuestions = categories.flatMap(category => Object.values(category)[0]);
    const shuffledQuestions = shuffleArray(allQuestions);
    return shuffledQuestions.slice(0, count);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div>
    <h2>Classic Mode</h2>
    {classicQuestions.map((question, index) => (
      <div key={index}>
        <h3>{`Q${index + 1}: ${question.question || ""}`}</h3>
        {question.answers && (
          <ul>
            {Object.entries(question.answers).map(([key, value], ansIndex) => (
              <li key={ansIndex}>{`${key}: ${value}`}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
    <Link to="/">
      <button>Home</button>
    </Link>
  </div>
);
};

export default ClassicPage;
