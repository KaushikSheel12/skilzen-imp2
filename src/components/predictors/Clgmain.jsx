import Image from "next/image";
import React from "react";
import Topexambox from "./Topexambox";

const Clgmain = () => {
  return (
    <>
      <div className="md:w-[70%] w-full h-full  px-2 py-2 gap-3 mx-auto  grid-cols-1 grid md:grid-cols-3">
        <Topexambox />
        <Topexambox />
        <Topexambox />
        <Topexambox />
        <Topexambox />
        <Topexambox />
        <Topexambox />
        <Topexambox /> 
        <Topexambox />
      </div>
    </>
  );
};

export default Clgmain;
