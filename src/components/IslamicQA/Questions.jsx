import React from "react";
import { CiSaveDown2 } from "react-icons/ci";
import QBox from "./QBox";


const Questions = () => {
  return (
    <>
      <div className="md:w-[70%] w-full mx-auto h-full border px-4 md:px-2 py-2 ">
        <div className="text-center">
          <h1 className="font-bold text-[25px] md:text-[35px]">New Answers of Question </h1>
        </div>
    <div className="grid md:grid-cols-3 grid-cols-1 mt-5 md:mt-10">
          {[...new Array(15)].map((el, index) => {
            return (
              <div key={index}>
                <QBox
                  Ques="Q: She is asking about halaal & haraam with regard to freelancework "
                  date="18 September 2021"
                />
              </div>

            );
          })}
          
        </div>
      </div>
    </>
  );
};


export default Questions;
