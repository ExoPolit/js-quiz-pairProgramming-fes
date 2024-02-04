import React, { useEffect, useState } from "react";
import QuizModule from "./QuizModule";
import categories from "../data/CategoryData";

const ClassicPage = () => {
  const [classicQuestions, setClassicQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);



  useEffect(() => {
    console.log("classicQuestions", classicQuestions);
    console.log("classicQuestions", classicQuestions[currentQuestionIndex]);

  }, [classicQuestions, currentQuestionIndex, selectedAnswer])

  function getRandomQuestions(count) {
    const allQuestions = categories.flatMap(category => Object.values(category)[0]);
    const shuffledQuestions = shuffleArray(allQuestions);
    return shuffledQuestions.slice(0, count).map(question => {
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

  useEffect(() => {
    setClassicQuestions(getRandomQuestions(40));
    setCurrentQuestionIndex(0);
  }, []);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer !== null) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedAnswer(null);
    } else {
      console.error("Please select an answer")
    }
  };

  return (
    <div>
      <QuizModule selectedQuestions={classicQuestions} />
      </div>
  );
};

export default ClassicPage;
