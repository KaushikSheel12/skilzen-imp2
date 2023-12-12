import React from "react";
import { AiOutlineAlignCenter } from "react-icons/ai";

const Pheadercard = ({ bgClr, text, clg, textClr, boxbottomClr }) => {
  return (
    <>
      <div
        style={{ background: bgClr, borderColor: boxbottomClr }}
        className={`h-12  w-44   shadow-md  text-center  border-b-4   text-white rounded-md`}
      >
        <div className="flex justify-center items-center gap-2">
          <AiOutlineAlignCenter color="black" />
          <p style={{ color: textClr }} className={`text-sm `}>
            {text}
          </p>
        </div>
        <h3 style={{ color: textClr }}>{clg}</h3>
      </div>
    </>
  );
};

export default Pheadercard;
