import { useParams } from "react-router-dom";

const QuizModule = () => {
	const { cat } = useParams();
  
	return <div>{cat}</div>;
};
export default QuizModule;
