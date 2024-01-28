import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import categories from '../data/CategoryData';

const TimedModeModule = ({ selectedQuestions, cat, navigate }) => {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
  const [answerSelected, setAnswerSelected] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);

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

  const startTimer = () => {
    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer);
          handleNext();
        }
        return prevTime - 1;
      });
    }, 1000);
  
    return timer;
  };

  useEffect(() => {
    if(timeRemaining > 0){
        const timer = startTimer();
        return () => clearInterval(timer);
    }
  },[timeRemaining])


  const handleNext = () => {
    localStorage.setItem(`currentAnswerIndex-${cat}`, current + 1);
    setCurrent(current + 1);
    setAnswerSelected(false);
    setSelectAnswerIndex(null);
    if (current === questions.length - 1) {
      localStorage.setItem(`currentAnswerIndex-${cat}`, 0);
      navigate('/');
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
                          ? 'selected correct'
                          : 'selected incorrect'
                        : ''
                    }`}
                    style={{
                      backgroundColor: answer.selected
                        ? answer.correct
                          ? 'var(--green-bg)'
                          : 'var(--red-bg)'
                        : '',
                    }}
                    variant="outline-none"
                    onClick={() => selectAnswer(ansIndex, answer.correct)}
                    disabled={selectAnswerIndex !== null}
                  >
                    <p className="option-left">{Object.keys(answer)[0]}.</p>{' '}
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
    </>
  );
};


export default TimedModeModule;
