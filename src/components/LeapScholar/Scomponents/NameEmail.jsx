import React from "react";

export const NameEmail = () => {
  return (
    <>
      <div className="md:w-[80%] w-full h-fit mx-auto md:mt-0  -mt-8">
        <h1 className="text-center   font-semibold text-[20px] md:text-[24px] py-2">
          Please enter your Name and Email
        </h1>
        <input
          type="text"
          className="w-full shadow-lg rounded-md md:mt-2 mt-4 py-1 px-2"
          placeholder="Name"
        />
        <input
          type="email"
          className="w-full shadow-lg rounded-md md:mt-2 mt-4 py-1 px-2"
          placeholder="Email"
        />
      </div>
    </>
  );
};
