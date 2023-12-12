import React from "react";

export const CheckBox = ({ CheckBoxTittle }) => {
  return (
    <>
      <div className="  px-2 flex items-center gap-2  ">
        <input type="checkbox" className="cursor-pointer" />
        <span className="text-sm text-gray-500">{CheckBoxTittle}</span>
      </div>
    </>
  );
};
