import React, { useState } from "react";
import questions from "../data/questions";
import { useEffect } from "react";

function Qfilter() {
  const [selectedOption, setSelectedOption] = useState("maths");

  const handleFilterChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //just for testing
  const filteredQuestions = questions.filter((question) => {
    if (selectedOption === "maths") {
      return question.type === "maths";
    } else if (selectedOption === "english") {
      return question.type === "english";
    } else if (selectedOption === "upsc") {
      return question.type === "upsc";
    } else if (selectedOption === "iit") {
      return question.type === "iit";
    }
    return true; // If no filter selected, show all questions
  });

  useEffect(() => {
 //   console.log(">>>>", filteredQuestions);
  }, [selectedOption]);


  
  return (
    <>
      <div className="w-full h-auto px-2 py-1 mt-1">
        <select
          className=" custom-select  md:w-[60%] md:h-8   border-none text-center bg-[#2FD5C8] rounded-md hover:bg-black hover:text-white"
          value={selectedOption}
          onChange={handleFilterChange}
        >
          <option value="maths">Sections</option>
          <option value="english">English</option>
          <option value="upsc">UPSC</option>
          <option value="iit">IIT</option>
        </select>
      </div>
      {/* Render filtered questions here */}
      <div></div>
    </>
  );
}

export default Qfilter;
