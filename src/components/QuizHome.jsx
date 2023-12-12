import React, { useState, useEffect } from "react";
import questions from "../data/questions";
import QSidebar from "./QSidebar/index";
import Quiz from "./Quiz";
import QInstruction from "./QInstruction";
import QSections from "./QSections";
import { Actions } from "./QSidebar/Actions";
import { useZustand } from "@/zustand";

const QuizHome = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);
  const showInstructions = useZustand((state) => state.showInstructions);
  const showAllQuestions = useZustand((state) => state.showAllQuestions);
  const showQuiz = useZustand((state) => state.showQuiz);
  const addQuestion = useZustand((state) => state.addQuestion);
  const questionIds = useZustand((state) => state.questionIds);
  const addData = useZustand((state) => state.addData);
  const data = useZustand((state) => state.data);
  const currentQuestion = useZustand((state) => state.currentQuestion);
  const setQuestions = useZustand((state) => state.setQuestions);
  const questions = useZustand((state) => state.questions);

  function handleAnswerSelect(questionId, optionIndex) {
    const updatedAnswers = selectedAnswers.filter(
      (selectedAnswer) => selectedAnswer.questionId !== questionId
    );

    const answer = { questionId, optionIndex };
    const newAnswers = [...updatedAnswers, answer];

    setSelectedAnswers(newAnswers);
    addData(newAnswers);
 //   console.log("zustend data", data);
    sessionStorage.setItem("selectedAnswers", JSON.stringify(newAnswers));
  }

  const MarkForReview = () => {
    addQuestion(currentPage);
    handleRestart();

    if (currentPage < questions.length) {

      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    let timer = null;

    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [running]);

  const handleRestart = () => {
    setTime(0);
    setRunning(true);
  };

  const handleQuestionClick = (questionId) => {
    handleRestart();
    const questionIndex = questions.findIndex(

      (question) => question.id === questionId
    );
    setCurrentPage(questionIndex + 1);
  };

  useEffect(() => {
    const storedAnswers = sessionStorage.getItem("selectedAnswers");
    if (storedAnswers) {
      setSelectedAnswers(JSON.parse(storedAnswers) || []);
    }
  }, []);

  const handleNextPage = () => {
    handleRestart();
    if (currentPage < questions.length) {

      setCurrentPage(currentPage + 1);
    }
    const viewQuestion = questions.map((item) =>
      item.id === currentQuestion.id ? { ...item, attempted: true } : item
    );
    setQuestions(viewQuestion);
  };

  const handleClearResponse = () => {
    const currentIndex = selectedAnswers.findIndex(
      (selectedAnswer) => selectedAnswer.questionId === question.id
    );
    if (currentIndex !== -1) {
      const updatedAnswers = [...selectedAnswers];

      updatedAnswers.splice(currentIndex, 1);
      setSelectedAnswers(updatedAnswers);
      addData(updatedAnswers);
      sessionStorage.setItem("selectedAnswers", JSON.stringify(updatedAnswers));
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {

      setCurrentPage(currentPage - 1);
    }
  };

  const question = questions[currentPage - 1];

  return (
    <>
      <div className="w-screen grid h-28 grid-cols-1 md:grid-cols-4 gap-x-3 py-6 px-4 mt-12">
        <div className="col-span-3 p-2">
          {showInstructions && <QInstruction />}
          {showQuiz && (
            <Quiz
              question={question}
              time={time}
              currentPage={currentPage}
              handleAnswerSelect={handleAnswerSelect}
              selectedAnswers={selectedAnswers}
              handlePrevPage={handlePrevPage}
              onQuestionClick={handleQuestionClick}

              handleClearResponse={handleClearResponse}
              handleNextPage={handleNextPage}

              MarkForReview={MarkForReview}
            />
          )}
          {showAllQuestions && <QSections />}
        </div>

        <div className="w-full sticky top-10 hidden md:block h-fit">
          
          <QSidebar onQuestionClick={handleQuestionClick} />
        </div>
      </div>
    </>
  );
};

export default QuizHome;
