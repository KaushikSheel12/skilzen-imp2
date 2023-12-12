import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import styles from "../styles/Quiz.module.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdOutlineTimer } from "react-icons/Md";
import { QuizHeader } from "./QuizHeader";
import { QuestionBox } from "./QuestionBox";
import { QuestionActions } from "./QuestionActions";
import QSidebar from "./QSidebar/index";

const Quiz = ({
  question,
  selectedAnswers,
  currentPage,
  time,
  handleAnswerSelect,
  handlePrevPage,
  onQuestionClick,
  handleNextPage,
  handleClearResponse,
  showInstructions,
  setShowInstructions,
  MarkForReview,

}) => {
  const [star, showStar] = useState(true);

  const starClick = (el) => {

    showStar(!star);
  };

  const totalPages = questions.length;

  return (
    <>
      <div className="w-full md:mt-10 h-auto   py-2 px-2">
        <div className=" col-span-3 p-2">
          <div className="flex justify-between">
            <QuizHeader
              currentPage={currentPage}
              star={star}
              time={time}

              starClick={starClick}
            />
          </div>

          {question && (
            <QuestionBox
              question={question}
              handleAnswerSelect={handleAnswerSelect}

              selectedAnswers={selectedAnswers}
            />
          )}

          <QuestionActions
            handleClearResponse={handleClearResponse}
            currentPage={currentPage}
            handlePrevPage={handlePrevPage}
            totalPages={totalPages}

            handleNextPage={handleNextPage}
            
            MarkForReview={MarkForReview}
          />
        </div>
      </div>
    </>
  );
};

export default Quiz;
