import React, { useEffect, useState } from "react";
import { QuestionPalette } from "./QuestionPalette";
import { Header } from "./Header";
import { Actions } from "./Actions";
import { Responses } from "./Responses";
import { QuestionTabs } from "./QuestionTabs";
import { Accordian } from "../Accordian";

const QSidebar = ({ onQuestionClick }) => {
  const [answers, setAnswers] = useState([]);

  const isClicked = (item) => {
    return answers?.find((a) => a.questionId === item);
  };

  useEffect(() => {
    const answers = JSON.parse(sessionStorage.getItem("selectedAnswers"));
    setAnswers(answers);
  }, [onQuestionClick]);

  return (
    <div className=" border-l-[2px] ml- p-2 fixed  py-0 h-full   left-auto top-[74px]  mt-0">
      <Header />
      <QuestionPalette />
      <Accordian title="testing">
        <Responses />
        <QuestionTabs onQuestionClick={onQuestionClick} isClicked={isClicked} />
      </Accordian>
      <Actions />
    </div>
  );
};

export default QSidebar;
