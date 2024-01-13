import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import categories from "../data/CategoryData";

const QuizModule = () => {
	const { cat } = useParams();
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		const selectedCategory = categories.find(
			(category) => Object.keys(category)[0] === cat,
		);

		if (selectedCategory) {
			setQuestions(selectedCategory[cat]);
		}

		console.log(questions);
	}, [cat]);

	return (
		<>
			<h1>Category: {cat}</h1>
			{questions.map((question, index) => (
				<div key={index}>
					<h2>{`Q${index + 1}: ${question.question}`}</h2>
					{question.answers.map((answer, ansIndex) => (
						<p key={ansIndex}>
							{Object.keys(answer)[0]}. {answer[Object.keys(answer)[0]]}
						</p>
					))}
				</div>
			))}
		</>
	);
};
export default QuizModule;
