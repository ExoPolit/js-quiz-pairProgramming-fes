import "../../src/styles/QuizModule.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import categories from "../data/CategoryData";

import { Button } from "react-bootstrap";

import Nav from "../components/nav";
import Footer from "../components/footer";

const QuizModule = ({ selectedQuestions }) => {
	const { cat } = useParams();
	const [questions, setQuestions] = useState([]);
	const [current, setCurrent] = useState(0);
	const [score, setScore] = useState(0);
	const [answerSelected, setAnswerSelected] = useState(false);
	const [classicQuestions, setClassicQuestions] = useState([]);

	useEffect(() => {
		setClassicQuestions(selectedQuestions);
		const savedAnswerIndex = localStorage.getItem(`currentAnswerIndex-${cat}`);
		if (savedAnswerIndex) {
			setCurrent(parseInt(savedAnswerIndex, 10));
		}
	}, [selectedQuestions]);

	useEffect(() => {
		const selectedCategory = categories.find(
			(category) => Object.keys(category)[0] === cat,
		);

		if (selectedCategory) {
			setQuestions(selectedCategory[cat]);
		}

		const savedAnswerIndex = localStorage.getItem(`currentAnswerIndex-${cat}`);
		if (savedAnswerIndex) {
			setCurrent(parseInt(savedAnswerIndex, 10));
		}
	}, [cat]);

	const handleNext = () => {
		localStorage.setItem(`currentAnswerIndex-${cat}`, current + 1);
		setCurrent(current + 1);
		setAnswerSelected(false);
	};

	const selectAnswer = (answer, isCorrect) => {
		setScore((prevScore) => (isCorrect ? prevScore + 1 : prevScore));

		setQuestions((prevQuestions) => {
			const updatedQuestions = [...prevQuestions];
			updatedQuestions[current].answers = updatedQuestions[current].answers.map(
				(a) => {
					return {
						...a,
						selected: a === answer,
					};
				},
			);
			return updatedQuestions;
		});

		setAnswerSelected(true);
	};

	return (
		<>
			<Nav cat={cat} />
			<div id="quizModule" className="container">
				<div className="row">
					{questions.slice(current, current + 1).map((question, index) => (
						<div key={index}>
							<h2>{`Q${index + (current + 1)}: ${question.question}`}</h2>
							{question.answers.map((answer, ansIndex) => (
								<Button
									key={ansIndex}
									className={`w-100 text-start btn-answers ${
										answer.selected
											? answer.correct
												? "selected correct"
												: "selected incorrect"
											: ""
									}`}
									// style={{backgroundColor: answer.selected ? (answer.correct ? "var(--green-bg)" : "var(--red-bg)") : ""}}
									variant="outline-none"
									onClick={() => selectAnswer(answer, answer.correct)}
									disabled={answerSelected}>
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
						size="md">
						Next
					</Button>
				)}
			</div>
			<div className="fixed-bottom">
				<Footer />
			</div>
		</>
	);
};

export default QuizModule;
