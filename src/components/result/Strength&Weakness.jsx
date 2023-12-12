import questions from "@/data/questions";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

function StrengthWeaknes() {
  useEffect(() => {
    console.log("....", questions);
  }, []);

  let progress = 65;

  return (
    <>
      <div className="md:w-full md:h-auto  px-2 py-2 md:mt-4">
        <h2 className="font-semibold md:text-[19px]">Strength & Weakness</h2>

        <div className="w-80 pr-4  h-full border border-gray-300 rounded-xl  py-2 px-2 mt-3">
          <h3 className="font-semibold text-[18px]">Democratic Politics-2</h3>

          <div className="flex justify-between text-[gray]">
            <p>Correct</p>
            <p>{progress}%</p>
          </div>

          <div className="mt-1">
            <ProgressBar progress={progress} />
          </div>

          <div className="grid grid-cols-5    gap-5 py-2    mt-2 ">
            {questions.map((el, index) => {
              return (
                <div key={index} className="py-0 relative  ">
                  <div
                    className={` w-12 h-8   grid place-content-center rounded-xl p-4 border `}
                  >
                    {el.id}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default StrengthWeaknes;
