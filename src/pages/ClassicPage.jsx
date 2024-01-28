import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categories from "../data/CategoryData";

const ClassicPage = () => {
  const [classicQuestions, setClassicQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setClassicQuestions(getRandomQuestions(40));
    setCurrentQuestionIndex(0);
  }, []);
  console.log(classicQuestions);

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

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer)
  }
  const handleNextQuestion = () => {   
    if( selectedAnswer !== null) {

        
        // next to next question
        console.log("curent question index before:", currentQuestionIndex)
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        console.log("curent question index after:", currentQuestionIndex)
         //reset selected answer
         setSelectedAnswer(null);

         setClassicQuestions((prevQuestions) => [...prevQuestions]);
    }
    else {
        alert("Please select an answer")
    }
    }

  return (
    <div>
    <h2>Classic Mode</h2>
    {console.log("Rendered classicQuestions:", classicQuestions)}
    {currentQuestionIndex < classicQuestions.length && (
      <div>
        <h3>{`Q${currentQuestionIndex + 1}: ${classicQuestions[currentQuestionIndex].question || ""}`}</h3>
        {classicQuestions[currentQuestionIndex].answers && (
          <ul>
            {Object.entries(classicQuestions[currentQuestionIndex].answers).map(([key, value], ansIndex) => (
              <li
                key={ansIndex}
              
                onClick={() => handleAnswerSelection(key)}
              >
                {`${key}: ${value}`}
              </li>
            ))}
          </ul>
        )}
        <button onClick={handleNextQuestion}>Next Question</button>
      </div>
    )}
    {currentQuestionIndex === classicQuestions.length && (
      <div>
        <p>Congratulations! You have completed all questions.</p>
        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    )}
  </div>
  
);
};


export default ClassicPage;
