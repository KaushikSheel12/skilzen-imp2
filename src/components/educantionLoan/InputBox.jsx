import React, { useState } from "react";

const InputBox = ({
  heading,
  mark,
  sliderValue,
  lastValue,
  handleSliderChange,
}) => {
  return (
    <div className="mb-7">
      <div className="flex item-center  justify-between py-1 w-full h-fit">
        <p className="font-semibold text-gray-700">{heading}</p>
        <p className="font-semibold mr-[36px] flex items-center gap-1 text-gray-700 w-[50px]">
          <span>{sliderValue} </span>
          <span className="text-gray-700    border-gray-700 border-b-[1px]">
            {mark}
          </span>
        </p>
      </div>
      <input
        type="range"
        className="progress w-full border h-[6px]  text-white shadow-[rgba(0, 0, 0, 0.25) 0px 3px 8px;]"
        value={sliderValue}
        min={0}
        max={lastValue}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default InputBox;
