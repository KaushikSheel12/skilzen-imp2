import React from "react";
import { CheckBox } from "./CheckBox";
import { FilerHeading } from "./FilerHeading";

export const Filter = () => {
  let Category = [
    " General",
    " OBC (Other Backward Classes)",
    " SC (Scheduled Castes)",
    " ST (Scheduled Tribes)",
    " EWS (Economically Weaker Sections)]",
  ];
  const topIndianColleges = [
    "Indian Institute of Technology Bombay",
    "Indian Institute of Technology Delhi",
    "Indian Institute of Technology Madras",
    "Indian Institute of Technology Kanpur",
    "Indian Institute of Technology Kharagpur",
    "All India Institute of Medical Sciences, New Delhi",
    "Indian Statistical Institute Kolkata",
    "National Law School of India University, Bangalore",
    "Jawaharlal Nehru University, New Delhi",
    "Delhi University - St. Stephen's College",
    "Indian Institute of Management Bangalore",
    "Indian Institute of Management Ahmedabad",
    "Indian Institute of Management Calcutta",
    "Xavier Labour Relations Institute (XLRI), Jamshedpur",
    "National Institute of Fashion Technology (NIFT), New Delhi",
    "Christ University, Bangalore",
    "St. Xavier's College, Mumbai",
    "Hindu College, Delhi University",
    "Loyola College, Chennai",
    "Presidency College, Chennai",
  ];
  const courseList = [
    "Computer Science and Engineering",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biotechnology",
    "Medicine",
    "Law",
    "Business Administration",
    "Economics",
    "Physics",
    "Chemistry",
    "Mathematics",
    "Environmental Science",
    "History",
    "Political Science",
    "Psychology",
    "Sociology",
    "English Literature",
    "Architecture",
    "Fashion Design",
    "Journalism and Mass Communication",
    "Hotel Management",
    "Animation and Multimedia",
    "Fine Arts",
    "Music",
    "Dance",
    "Foreign Languages",
    "Photography",
    "Interior Design",
    "Nutrition and Dietetics",
    "Physical Education and Sports Sciences",
    "Tourism and Travel Management",
    "Event Management",
    "Graphic Design",
    "Digital Marketing",
    "Data Science",
    "Artificial Intelligence and Machine Learning",
    "Blockchain Technology",
    "Cybersecurity",
    "Robotics and Automation",
    "Game Development",
    "Virtual Reality and Augmented Reality",
  ];

  return (
    <>
      <div className="w-full  h-fit ">
        <div className="w-full h-fit px-2 text-sm text-gray-600 bg-slate-200 py-1">
          Select Filters
        </div>
        <FilerHeading Heading="College" InputPlaceholder="Find college" />

        <div
          className={` ${
            topIndianColleges?.length > 12 ? "h-[245px]" : "h-fit"
          }  w-full mt-1 overflow-scroll py-2`}
        >
          {topIndianColleges?.map((el, index) => {
            return (
              <CheckBox
                key={index}
                CheckBoxTittle={`${el.slice(0, 50)} ${el.length > 50 && "..."}`}
              />
            );
          })}
        </div>

        <FilerHeading Heading="SubStream" InputPlaceholder="Find substream" />

        <div
          className={` ${
            courseList?.length > 12 ? "h-[245px]" : "h-fit"
          }  w-full mt-1 overflow-scroll py-2`}
        >
          {courseList?.map((el, index) => {
            return (
              <CheckBox
                key={index}
                CheckBoxTittle={`${el.slice(0, 50)} ${el.length > 50 && "..."}`}
              />
            );
          })}
        </div>

        <FilerHeading Heading="Category" InputPlaceholder="Find category" />

        <div
          className={` ${
            Category?.length > 12 ? "h-[245px]" : "h-fit"
          }  w-full mt-1 overflow-scroll py-2`}
        >
          {Category?.map((el, index) => {
            return (
              <CheckBox
                key={index}
                CheckBoxTittle={`${el.slice(0, 50)} ${el.length > 50 && "..."}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
