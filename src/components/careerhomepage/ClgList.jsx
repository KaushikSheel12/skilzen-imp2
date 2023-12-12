import React, { useState } from "react";
import CareerClgbox from "./CareerClgbox";
import CollegePrice from "./CollegePrice";

const ClgList = () => {
  const[viewMoreCollge,setViewMoreCollege]=useState(false)
  return (
    <>
      <div className="max-w-[1240px]   mx-auto py-8 px-4 ">
        <div className={`grid grid-rows-none relative md:grid-cols-2 py-4 gap-2 md:gap-4  ${viewMoreCollge?"h-fit": "md:h-[620px]   "}  overflow-y-hidden`}>
      
          <CareerClgbox ImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJEg9AzpDysOk-UPqL4JuYHbbfxa2CDpWCw&usqp=CAU" />
          <CareerClgbox ImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJEg9AzpDysOk-UPqL4JuYHbbfxa2CDpWCw&usqp=CAU" />
          <CareerClgbox ImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJEg9AzpDysOk-UPqL4JuYHbbfxa2CDpWCw&usqp=CAU" />
          <CareerClgbox ImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJEg9AzpDysOk-UPqL4JuYHbbfxa2CDpWCw&usqp=CAU" />
          <CareerClgbox ImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJEg9AzpDysOk-UPqL4JuYHbbfxa2CDpWCw&usqp=CAU" />
          <CareerClgbox ImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJEg9AzpDysOk-UPqL4JuYHbbfxa2CDpWCw&usqp=CAU" />
          <CareerClgbox ImgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJEg9AzpDysOk-UPqL4JuYHbbfxa2CDpWCw&usqp=CAU" />
        </div>

        <button onClick={()=>setViewMoreCollege(!viewMoreCollge)}  className="grid mx-auto px-2 py-2 border w-44 backdrop-hue-rotate-180 rounded-md bg-[#1aaed7f4] hover:bg-black  text-white mt-4  ">{viewMoreCollge ?"Hide more college's" :"View more college's  " }</button>
       <CollegePrice/>
      </div>
    </>
  );
};

export default ClgList;
