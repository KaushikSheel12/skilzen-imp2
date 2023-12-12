import React, { useContext } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export const Accordian = ({ children, title }) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div>
      <div className="flex items-center    justify-between border-b-2  mt-2">
        <p className="mb-1 ml-2 font-normal">{title}</p>

        {/* <div className="mr-30 ">
          {isActive ? (
            <IoIosArrowUp
              cursor="pointer"
              size={20}
              onClick={() => setIsActive((prev) => isActive)}
            />
          ) : (
            <IoIosArrowDown
              cursor="pointer"
              size={20}
              onClick={() => setIsActive((prev) => isActive)}
            />
          )}
        </div> */}
      </div>

      {isActive && <div className="">{children}</div>}
    </div>
  );
};
