import categories from "../data/CategoryData"

const QuestionSelector = ({ onSelectQuestions }) => {
    const selectQuestions = () => {
        const arrayQuestions = categories
        .filter((category) => Object.keys(category)[0] === "Arrays")
        .map((category) => category.Arrays)
        .flat()

        onSelectQuestions(arrayQuestions);
    };

    return (
        <div>
            <button onClick={selectQuestions}>Select Arrays Questions</button>
        </div>
    )

}

export default QuestionSelector;