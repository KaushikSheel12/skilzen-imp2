import React, { useState } from "react";
import { BsSaveFill } from "react-icons/Bs";
import { CiSaveDown2 } from "react-icons/ci";

const QBox = ({ Ques, date }) => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSaved = () => {
    setIsSaved(!isSaved);
  };


  return (
    <>
      <div
        onClick={toggleSaved}
        className={`md:w-[340px] w-full h-[85px] border mx-auto px-2 py-1  rounded-md  mb-7 shadow-sm  cursor-pointer ${
          isSaved ? "bg-gray-800 text-white"   : ""
        }`}
      >
        <h3 className="md:leading-5 text-md md:text-lg">{Ques}</h3>
        <div className="flex w-full justify-between items-center">
          <p className={`text-gray-500 text-sm md:py-2 py-0 font-semibold ${
          isSaved ? "bg-gray-800 text-gray-200"   : ""
        } `}>{date}</p>
          <div
            className="flex items-center gap-2 py- text-gray-600 cursor-pointer"
      
            
          >
            {isSaved ? (
              <>
                <BsSaveFill color="green" size={16} />  <p className="text-white"> Saved</p>
              </>
            ) : (
              <>
                <CiSaveDown2 size={20} /> Save
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QBox;
