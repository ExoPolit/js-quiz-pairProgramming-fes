import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import categories from "../data/CategoryData";

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
	}, [cat]);

	return (
		<>
			<h1>Category: {cat}</h1>
			{questions.slice(current, current + 1).map((question, index) => (
				<div key={index}>
					<h2>{`Q${index + (current + 1)}: ${question.question}`}</h2>
					{question.answers.map((answer, ansIndex) => (
						<p key={ansIndex}>
							{Object.keys(answer)[0]}. {answer[Object.keys(answer)[0]]}
						</p>
					))}
				</div>
			))}
			<button onClick={() => setCurrent(current + 1)}>Next</button>
		</>
	);
};
export default QuizModule;
