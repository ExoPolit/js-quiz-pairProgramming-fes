import React from "react";
import QuizModule from "../pages/QuizModule";
import SelectedQuestionsDisplay from "./SelectedQuestionsDisplay";


const ClassicPage = ({selectedQuestions}) => {
  return (
    <>
    <SelectedQuestionsDisplay selectedQuestions={selectedQuestions} />
    <QuizModule questions={selectedQuestions}/>
    </>
  );
};
export default ClassicPage;