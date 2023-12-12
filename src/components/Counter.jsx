import React, { useState, useEffect } from "react";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";


const Counter = () => {
  const [time, setTime] = useState(150);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (play && time > 0) {
        setTime((prevTime) => prevTime - 1);
      }
    }, 1000);

    if (time === 0) {
      
      
      clearInterval(timer);
    }


    return () => {
      clearInterval(timer);
    };
  }, [play, time]);

  return (
    <div className="flex  h-auto w-auto   md:gap-0 gap-1  ">
      <div className="md:py-0 md:px-2 md:mt-[2px] ">
        {play ? (
          <AiOutlinePauseCircle
            onClick={() => setPlay(false)}
            color="teal"
            size={24}
            cursor="pointer"
          className="w-14 md:w-auto"
          />
        ) : (
          <AiOutlinePlayCircle
            onClick={() => setPlay(true)}
            color="teal"
            size={24}
            cursor="pointer"
            className="w-14 md:w-auto"
          />
        )}
      </div>
      <h1 className="font-bold md:mt-0 mt-1  md:font-normal md:text-[15px]  text-[12px] ">Time: 00:{time >= 0 ? time : 0}</h1>
    </div>
  );
};

export default Counter;
