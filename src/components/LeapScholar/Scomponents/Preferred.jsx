import React, { useState } from "react";

export const Preferred = () => {
  const YearData = [
    { year: "Sept 2023" },
    { year: "Jan 2024" },
    { year: "May 2024" },
    { year: "Sept 2024" },
    { year: "Year 2025" },
    //  diplomata
    { year: "PG Diploma" },
    { year: "Master's" },
    { year: "Bachelor's" },
    { year: "MBA" },
    { year: "PhD" },
    { year: "Not decided" },
  ];

  const [selectedYear, setSelectedYear] = useState(null);
  const [selectDiploma, setDiploma] = useState(null);

  const handleYearClick = (year) => {
    console.log("name ", year);
    setSelectedYear(year);
  };

  const handleDiplomaClick = (year) => {
    console.log("name ", year);
    setDiploma(year);
  };

  return (
    <>
      <h1 className="text-center   font-semibold text-[20px] md:text-[24px] py-4 md:py-4 mt-[-35px] md:mt-0">
        What's your preferred intake?
      </h1>

      <div className="w-full flex flex-wrap justify-around gap-4  md:mt-4">
        {YearData?.slice(0, 5).map((el, index) => {
          return (
            <Year
              key={index}
              bgColor={selectedYear === el.year ? "blue-200" : ""}
              borderColor={selectedYear === el.year ? "blue-500" : "red"}
              year={el.year}
              onClick={handleYearClick}
            />
          );
        })}
      </div>

      <h1 className="text-center   font-semibold text-[20px] md:text-[24px] py-4 md:py-8">
        What do you wish to pursue?
      </h1>

      <div className="w-full flex flex-wrap justify-around gap-4  md:mt-3">
        {YearData?.slice(5, YearData.length)?.map((el, index) => {
          return (
            <Year
              key={index}
              bgColor={selectDiploma === el.year ? "blue-200" : ""}
              borderColor={selectDiploma === el.year ? "blue-500" : ""}
              year={el.year}
              onClick={handleDiplomaClick}
            />
          );
        })}
      </div>
    </>
  );
};

const Year = ({ year, onClick, borderColor, bgColor }) => {
  return (
    <div
      className={`md:w-[180px] w-[130px] h-[60px]  border-${borderColor} bg-${bgColor}   border-2 rounded-md grid place-content-center text-[16px]  cursor-pointer shadow-md`}
      onClick={() => onClick(year)}
    >
      {year}
    </div>
  );
};
