import Image from "next/image";
import React from "react";

export const CalcuHero = () => {
  return (
    <div className="w-full mx-auto h-[380px] relative ">
      <h1 className=" z-10 absolute text-white md:top-[130px] top-[120px] left-5 md:left-40 text-[20px] md:text-[48px] font-semibold tracking-[1px]">
        Repayment Calculator
      </h1>
      <p className=" z-10 absolute text-white md:top-[200px] md:left-40  top-[160px] left-5  text-[16px] md:text-[18px]  ">
        Calculate your loan EMI amount from UniCreds
      </p>
      <Image
        src="https://unicreds.com/_next/image?url=https%3A%2F%2Fdi2vt7hcm6vs0.cloudfront.net%2Fv2%2Fpages%2FEmiCalculator%2FInterestDesktop.jpg&w=3840&q=75"
        alt=""
        loading="lazy"
        fill
        className="object-cover"
      />
    </div>
  );
};
