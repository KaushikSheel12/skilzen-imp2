import React, { useEffect } from "react";
import styles from "../styles/Quiz.module.css";
import { useZustand } from "@/zustand";

export const QuestionBox = ({
  question,
  handleAnswerSelect,
  selectedAnswers,
}) => {
  const setQuestion = useZustand((state) => state.setQuestions);
  const questions = useZustand((state) => state.questions);
  const setCurrentQuestion = useZustand((state) => state.setCurrentQuestion);
  const setSelectedAnswers = useZustand((state) => state.setSelectedAnswers);

  useEffect(() => {
    setCurrentQuestion(question);
  }, [question]);



  

  const handleOptionClick = (questionId, optionIndex) => {
    handleAnswerSelect(questionId, optionIndex); // Call the parent handler
    const updatedSelectedAnswers = selectedAnswers.map((selectedAnswer) =>
      selectedAnswer.questionId === questionId
        ? { ...selectedAnswer, optionIndex }
        : selectedAnswer
    );
    setSelectedAnswers(updatedSelectedAnswers);
  };

  return (
    <div key={question.id} className="mt-4 w-full">
      <p className="font-normal text-gray-700 mb-3">{question.question}</p>
      <div className="w-full">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswers.some(
            (selectedAnswer) =>
              selectedAnswer.questionId === question.id &&
              selectedAnswer.optionIndex === index
          );

          return (
            <div key={index}>
              <div
                id="btn-style"
                key={index}
                className={`${styles.option} ${
                  isSelected ? styles.highlighted : ""
                }`}
                onClick={() => handleOptionClick(question.id, index)}
              >
                <p>{option}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
