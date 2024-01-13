import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import categories from "../data/CategoryData";

const QuizModule = () => {
	const { cat } = useParams();
	const [category, setCategory] = useState([]);


	useEffect(() => {
		setCategory(categories);
		console.log(category);
		console.log(categories);
		console.log(categories.cat);
	}, []);

	return (
		<>
			<h1>Category: {cat}</h1>
			<h2>Q1: {}</h2>
			<p>A. {}</p>
			<p>B. {}</p>
			<p>C. {}</p>
			<p>D. {}</p>
		</>
	);
};
export default QuizModule;
