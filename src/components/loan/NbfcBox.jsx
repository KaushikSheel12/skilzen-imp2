import React from "react";

export const NbfcBox = () => {
  return (
    <div className="md:w-[600px] h-[300px] flex  py-4  ">
      <div className=" w-full text-center">
        <p className="border py-3">Maximum Amount</p>
        <p className="border py-3">Tenure of the Loan</p>
        <p className="border py-3">Margin Requirement</p>
        <p className="border py-9">Rate of Interest</p>
        <p className="border py-6">Processing Fee Charged</p>
      </div>
      <div className="w-full text-center">
        <p className="border py-3">Need-based Starting from Rs 1lakh</p>
        <p className="border py-3">No margin required</p>
        <p className="border py-3">10 years including course tenure</p>
        <p className="border py-3">
          Avanse Base Rate + Spread Depends on your credit profile and the
          course is undertaken
        </p>
        <p className="border py-3">
          1-2% of the loan amount decided on a case to case basis
        </p>
      </div>
    </div>
  );
};
