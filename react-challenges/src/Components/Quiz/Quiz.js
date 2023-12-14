import React, { useState } from "react";
import { addLeadingZero } from "./utils";
import { quiz } from "./react-quiz.json";

function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctedAnswers: 0,
    wrongAnswers: 0,
  });
  const { questions, topic } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            scroe: prev.score + 5,
            correctedAnswers: prev.correctedAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  return (
    <section className="quiz_container">
      {!showResult ? (
        <div>
          <div className="quiz_container_header">
            <p>TOPIC: {topic}</p>
            <div>
              <span>{addLeadingZero(activeQuestion + 1)}</span>
              <span>{addLeadingZero(questions.length)}</span>
            </div>
          </div>
          <div className="question">
            <h2>{question}</h2>
            <ul className="question_choices">
              {choices.map((answer, index) => (
                <li
                  key={answer}
                  className={`question_choices_choice ${
                    selectedAnswerIndex === index ? "selected" : ""
                  }`}
                  onClick={() => onAnswerSelected(answer, index)}
                >
                  {answer}
                </li>
              ))}
            </ul>
          </div>
          <div className="quiz_container_footer">
            <button
              onClick={onClickNext}
              disabled={selectedAnswerIndex === null}
            >
              {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <Result totalQuestions={questions.length} result={result} />
      )}
    </section>
  );
}

export default Quiz;
