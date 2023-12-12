import React, { useState } from "react";

export const Education = () => {
  const degreeData = [
    { name: "10th Standard" },
    { name: "12th Standard" },
    { name: "Bachelor's Degree" },
    { name: "Master's Degree" },
    { name: "MBBS / MD" },
    //passport
    { name: "Yes" },
    { name: "Appied" },
    { name: "No" },
  ];

  const [selectedDigre, setSelectedYear] = useState(null);
  const [selectPassport, setPassport] = useState(null);

  const handleDigreeClick = (Degree) => {
    // console.log("name ", Degree);
    setSelectedYear(Degree);
  };

  const handlePassportClick = (Degree) => {
    // console.log("name ", Degree);
    setPassport(Degree);
  };

  return (
    <>
      <h1 className="text-center  md:mt-0  mt-[-22px]  font-semibold text-[20px] md:text-[24px]">
        What's your highest level of education?
      </h1>

      <div className="w-full flex flex-wrap justify-around md:gap-5 gap-3 py-4 md:py-0  md:mt-6">
        {degreeData?.slice(0, 5).map((el, index) => {
          return (
            <Degree
              key={index}
              bgColor={selectedDigre === el.name ? "blue-200" : ""}
              borderColor={selectedDigre === el.name ? "blue-500" : ""}
              Degree={el.name}
              onClick={handleDigreeClick}
            />
          );
        })}
      </div>

      <h1 className="text-center  md:mt-6  font-semibold text-[20px] md:text-[24px] py-2">
        Expected or Gained Percentage
      </h1>

      <input
        type="number"
        placeholder="Grades"
        className="md:w-[70%] w-full px-6 md:px-2 md:ml-20 mt-2 border   rounded-md h-10 shadow-sm"
      />

      <h1 className="text-center   font-semibold text-[20px] md:text-[24px] py-4 md:py-6">
        Do you have a valid Passport?
      </h1>

      <div className="w-full flex flex-wrap justify-around md:gap-4  py- md:py-0 gap-3 md:mt-4">
        {degreeData?.slice(5, degreeData.length).map((el, index) => {
          return (
            <Degree
              key={index}
              bgColor={selectPassport === el.name ? "blue-200" : ""}
              borderColor={selectPassport === el.name ? "blue-500" : ""}
              Degree={el.name}
              onClick={handlePassportClick}
            />
          );
        })}
      </div>

      <h1 className="text-center   font-semibold text-[20px] md:text-[24px]  md:py-5 py-2">
        Year of graduation?
      </h1>

      <div className="md:w-[80%] w-full h-10  shadow-md   md:px-2 py-1 rounded-md mx-auto text-[16px] ">
        <select className="w-full h-full px-2    ">
          <option value="">Year of graduation</option>
          <option value="">2023 or later</option>
          <option value="">2022</option>
          <option value="">2021</option>
          <option value="">2020</option>
          <option value="">2019</option>
          <option value="">Before 2019</option>
        </select>
      </div>
    </>
  );
};

const Degree = ({ Degree, onClick, borderColor, bgColor }) => {
  return (
    <div
      className={`md:w-[180px] w-[130px] h-[60px]   border-${borderColor} bg-${bgColor}  rounded-md grid place-content-center text-center text-sm md:text-[16px] border cursor-pointer shadow-md`}
      onClick={() => onClick(Degree)}
    >
      {Degree}
    </div>
  );
};
