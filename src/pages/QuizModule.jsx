import "../../src/styles/QuizModule.css";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import categories from "../data/CategoryData";

import { Button } from "react-bootstrap";

const QuizModule = () => {
	const { cat } = useParams();
	const [questions, setQuestions] = useState([]);
	const [current, setCurrent] = useState(0);

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
	};
	const handleBack = () => {
		localStorage.setItem(`currentAnswerIndex-${cat}`, current - 1);

		setCurrent(current - 1);
	};

	const btnSize = "md";

	return (
		<>
			<h1>Category: {cat}</h1>
			{questions.slice(current, current + 1).map((question, index) => (
				<div key={index}>
					<h2>{`Q${index + (current + 1)}: ${question.question}`}</h2>
					{question.answers.map((answer, ansIndex) => (
						<button
							key={ansIndex}
							className="d-block w-100 text-start btn-answers"
							variant="outline-none">
							{Object.keys(answer)[0]}. {answer[Object.keys(answer)[0]]}
						</button>
					))}
				</div>
			))}
			{current === 0 ? (
				<Button
					className="col-12 back-next"
					variant="outline-none"
					onClick={handleNext}
					size={btnSize}>
					Next
				</Button>
			) : current > 0 && current < questions.length - 1 ? (
				<>
					<Button
						className="col-6 back-next"
						variant="outline-none"
						onClick={handleBack}
						size={btnSize}>
						Back
					</Button>
					<Button
						className="col-6 back-next"
						variant="outline-none"
						onClick={handleNext}
						size={btnSize}>
						Next
					</Button>
				</>
			) : (
				<Button
					className="col-12 back-next"
					variant="outline-none"
					onClick={handleBack}
					size={btnSize}>
					Back
				</Button>
			)}
		</>
	);
};

export default QuizModule;
