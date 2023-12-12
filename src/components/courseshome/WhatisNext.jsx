import React from "react";
import What12th from "./What12th";

const WhatisNext = () => {
  return (
    <>
      <div className="md:w-[70%] mx-auto mt-10 flex justify-between   h-fit  px-2 ">
        <What12th  subject="Maths"/>
        <What12th  subject="Biology "/>
        <What12th  subject="Arts "/>
      
      </div>
    </>
  );
};

export default WhatisNext;
