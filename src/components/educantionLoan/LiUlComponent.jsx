import React from "react";

export const LiUlComponent = ({ heading, items }) => {
  return (
    <>
      <h1 className="text-[16px]   mt-4 font-bold tracking-[1px] ">
        {heading}
      </h1>

      <ul>
        <li>
          {items.map((item, index) => (
            <p key={index} className="para text-[15px] ">
              {item}
            </p>
          ))}
        </li>
      </ul>
    </>
  );
};
