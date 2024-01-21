import React from "react";
import QuizModule from "../pages/QuizModule";
import SelectedQuestionsDisplay from "./SelectedQuestionsDisplay";


const ClassicPage = ({selectedQuestions}) => {
  return (
    <>
    <QuizModule questions={selectedQuestions}/>
    <SelectedQuestionsDisplay selectedQuestions={selectedQuestions} />
    </>
  );
};
export default ClassicPage;