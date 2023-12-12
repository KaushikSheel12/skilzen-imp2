import React, { useState } from "react";
import Engineering from "./Navcomp/Engineering";
import Hospitality from "./Navcomp/Hospitality";
import ITcomp from "./Navcomp/ITcomp";
import Law from "./Navcomp/Law";
import Management from "./Navcomp/Management";
import Pharmacy from "./Navcomp/Pharmacy";
import Medicine from "./Navcomp/Medicine";
import Designcomp from "./Navcomp/Designcomp";

const Navigation = () => {
  const [activeTag, setActiveTag] = useState(null);
  const [activeComponent, setActiveComponent] = useState(<Engineering />);
  const [selectedOption, setSelectedOption] = useState("Engineering");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case "Engineering":
        return <Engineering />;
      case "Medicine":
        return <Medicine />;
      case "Management":
        return <Management />;
      case "Law":
        return <Law />;
      case "Pharmacy":
        return <Pharmacy />;
      case "Design":
        return <Designcomp />;
      case "IT":
        return <ITcomp />;
      case "Hospitality":
        return <Hospitality />;
      default:
        return null;
    }
  };

  const handleTagClick = (index) => {
    setActiveTag(index);

    switch (index) {
      case 0:
        setActiveComponent(<Engineering />);
        break;
      case 1:
        setActiveComponent(<Medicine />);
        break;
      case 2:
        setActiveComponent(<Management />);
        break;
      case 3:
        setActiveComponent(<Law />);
        break;
      case 4:
        setActiveComponent(<Pharmacy />);
        break;
      case 5:
        setActiveComponent(<Designcomp />);
        break;
      case 6:
        setActiveComponent(<ITcomp />);
        break;
      case 7:
        setActiveComponent(<Hospitality />);
        break;
      default:
        setActiveComponent(null);
    }
  };

  return (
    <>
      <div className="md:mt-20 border-gray-400 md:w-[70%]  mx-auto w-full md:border-b-2">
        <h2 className="text-center text-[27px] hidden md:block md:py-4">
          Select the stream for which you want to use College Predictor
        </h2>

        <div className="w-full md:hidden mt-2 px-2 py-1">
          <p className="text-md  font-semibold text-gray-400 ">
            Please Select Your Stream
          </p>
          <select
            className="w-full text-center text-md mt-4 px-2"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            {[
              "Engineering",
              "Medicine",
              "Management",
              "Law",
              "Pharmacy",
              "Design",
              "IT",
              "Hospitality",
            ].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="container mx-auto hidden  md:flex items-center justify-between md:p-1">
          <div className="md:w-3/5 md:mx-auto">
            <ul className="md:flex items-center justify-around px-2 md:space-x-4">
              {[
                "Engineering",
                "Medicine",
                "Management",
                "Law",
                "Pharmacy",
                "Design",
                "IT",
                "Hospitality",
              ].map((tag, index) => (
                <li key={index} className="cursor-pointer">
                  <p
                    className={`   pb-3  ${
                      index === activeTag ? " border-b-2 border-blue-500 border-t-0 border-l-0  border-r-0  " : ""
                    }`}
                    onClick={() => handleTagClick(index)}
                  >
                    {tag}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-gray-400 text-sm py-2 md:px-0 px-2 md:text-lg font-semibold">
          National Level Exams
        </p>
      </div>
      <div className="box  mt-2 md:hidden   md:w-[70%] w-full h-full  px-2 py-2 gap-3 mx-auto grid-cols-1 grid md:grid-cols-3">
        {renderSelectedComponent()}
      </div>

      <div className="box  mt-2 hidden w-full mx-auto  md:w-[70%]  h-full  px-2 py-2 gap-3 grid-cols-1 md:grid md:grid-cols-3">
        {activeComponent}
      </div>
    </>
  );
};

export default Navigation;
