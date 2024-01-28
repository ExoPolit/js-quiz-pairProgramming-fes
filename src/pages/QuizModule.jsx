import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import categories from "../data/CategoryData";
import Nav from "../components/nav";
import TimedModeModule from "../components/TimedModeModule";
import Footer from "../components/footer";
import "../../src/styles/QuizModule.css";

const QuizModule = ({ selectedQuestions }) => {
  const { cat } = useParams();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [classicQuestions, setClassicQuestions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
const [localTimeRemaining, setLocalTimeRemaining] = useState(60);

  const navigate = useNavigate();

  
  const startTimer = () => {
    const timer = setInterval(() => {
      setLocalTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      
	  
    }, 1000);

    return () => clearInterval(timer);
  }

  useEffect(() => {
	startTimer();
  },[]);

  useEffect(() => {
    setClassicQuestions(selectedQuestions);
    const savedAnswerIndex = localStorage.getItem(`currentAnswerIndex-${cat}`);
    if (savedAnswerIndex) {
      setCurrent(parseInt(savedAnswerIndex, 10));
    }
  }, [selectedQuestions]);

  useEffect(() => {
    const selectedCategory = categories.find(
      (category) => Object.keys(category)[0] === cat
    );

    if (selectedCategory) {
      setQuestions(selectedCategory[cat]);
    }

    const savedAnswerIndex = localStorage.getItem(`currentAnswerIndex-${cat}`);
    if (savedAnswerIndex) {
      setCurrent(parseInt(savedAnswerIndex, 10));
    }
  }, [cat]);

  useEffect(() => {
    if (selectedQuestions) {
      setQuestions(selectedQuestions);
    }
  }, [selectedQuestions]);

  const handleNext = () => {
    localStorage.setItem(`currentAnswerIndex-${cat}`, current + 1);
    setCurrent(current + 1);
    setAnswerSelected(false);
    setSelectAnswerIndex(null);
    if (current === questions.length - 1) {
      localStorage.setItem(`currentAnswerIndex-${cat}`, 0);
      navigate("/");
    }
  };

  const selectAnswer = (answerIndex, correct) => {
    console.log(answerIndex, correct);
    setScore((prevScore) => (correct ? prevScore + 1 : prevScore));

    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[current].answers = updatedQuestions[current].answers.map(
        (a, index) => {
          return {
            ...a,
            selected: index === answerIndex,
          };
        }
      );

      return updatedQuestions;
    });
    setSelectAnswerIndex(answerIndex);
    setAnswerSelected(true);
  };

 


  return (
    <>
      <Nav cat={cat} />
      <div id="quizModule" className="container">
        <div className="row">
          {questions &&
            questions.slice(current, current + 1).map((question, index) => (
              <div key={index}>
                <h2>{`Q${index + (current + 1)}: ${question.question}`}</h2>
                {question.answers.map((answer, ansIndex) => (
                  <Button
                    key={ansIndex}
                    className={`w-100 text-start btn-answers ${
                      answer.selected
                        ? isCorrect
                          ? "selected correct"
                          : "selected incorrect"
                        : ""
                    }`}
                    style={{
                      backgroundColor: answer.selected
                        ? answer.correct
                          ? "var(--green-bg)"
                          : "var(--red-bg)"
                        : "",
                    }}
                    variant="outline-none"
                    onClick={() => selectAnswer(ansIndex, answer.correct)}
                    disabled={selectAnswerIndex !== null}
                  >
                    <p className="option-left">{Object.keys(answer)[0]}.</p>{" "}
                    <p className="option-right">
                      {answer[Object.keys(answer)[0]]}
                    </p>
                  </Button>
                ))}
              </div>
            ))}
        </div>
      </div>
      <div className="btn-wrapper">
        {answerSelected && (
          <Button
            className="col-12 next"
            variant="outline-none"
            onClick={handleNext}
            size="md"
          >
            Next
          </Button>
        )}
      </div>
      <div className="fixed-bottom">
        <Footer />
      </div>
		<TimedModeModule timeRemaining={localTimeRemaining} />

    </>
  );
};

export default QuizModule;
