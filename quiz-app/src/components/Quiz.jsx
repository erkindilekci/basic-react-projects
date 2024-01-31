import {useCallback, useState} from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

function Quiz() {
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const activeQuestionIndex = selectedAnswers.length;
    const isQuizOver = selectedAnswers.length === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setSelectedAnswers(prevAnswers => [...prevAnswers, selectedAnswer]);
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(''), [handleSelectAnswer]);

    if (isQuizOver) return <Summary userAnswers={selectedAnswers}/>;

    return (
        <div id="quiz">
            <Question
                key={activeQuestionIndex}
                questionIndex={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}

export default Quiz;