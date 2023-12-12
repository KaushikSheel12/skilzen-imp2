import React from "react";
import { Dot } from "../Dot";
import { useZustand } from "@/zustand";
import { useEffect, useState } from "react";

export const Responses = () => {
  const questionIds = useZustand((state) => state.questionIds);
  const data = useZustand((state) => state.questions);
  const selectedAnswers = useZustand((state) => state.selectedAnswers);


  const [viewedQuestions, setViewedQuestions] = useState([]);
  const [unseenQuestions, setUnseenQuestions] = useState([]);

  useEffect(() => {
    const viewed = data.filter((item) => item.attempted === true);
    setViewedQuestions(viewed);

    const unseen = data.filter((item) => item.attempted === false);
    setUnseenQuestions(unseen);
  }, [data]);

  useEffect(() => {
    console.log("selectedAnswers", selectedAnswers.length);
  }, [selectedAnswers]);



  

  return (
    <div className="flex items-center space-x-6 px-3 py-1">
      <div className="flex space-x-2 items-center">
        <Dot color={"green"} />
        <span>{selectedAnswers.length}</span> {/* Display selected answer count */}
      </div>
      <div className="flex space-x-2 items-center">
        <Dot color={"black"} />
        <span>{viewedQuestions.length}</span>
      </div>
      <div className="flex space-x-2 items-center">
        <Dot color={"gray"} />
        <span>{unseenQuestions.length}</span>
      </div>
      <div className="flex space-x-2 items-center">
        <Dot color={"orange"} />
        <span>{questionIds.length}</span>
      </div>
    </div>
  );
};
