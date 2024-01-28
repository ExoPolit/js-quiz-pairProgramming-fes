import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import QuizModule from "./QuizModule";
import categories from "../data/CategoryData";

const ClassicPage = () => {
  const [classicQuestions, setClassicQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    setClassicQuestions(getRandomQuestions(40));
    setCurrentQuestionIndex(0);
  }, []);

  useEffect(() => {
    console.log("classicQuestions", classicQuestions);
    console.log("classicQuestions", classicQuestions[currentQuestionIndex]);

  }, [classicQuestions, currentQuestionIndex, selectedAnswer])

  function getRandomQuestions(count) {
    const allQuestions = categories.flatMap(category => Object.values(category)[0]);
    const shuffledQuestions = shuffleArray(allQuestions);
    return shuffledQuestions.slice(0, count).map(question => {
      // Prüfe, ob der Schlüssel 'answers' vorhanden ist, und füge ihn andernfalls hinzu
      if (!question.hasOwnProperty('answers')) {
        question.answers = {};
      }
      return question;
    });
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
    } else {
      alert("Please select an answer");
    }
  };

  return (
    <div>
      <QuizModule selectedQuestions={classicQuestions} />
      </div>
  );
};

export default ClassicPage;
