import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
import { ColorChart } from "./ColorChart";
import { CalcuHero } from "./CalcuHero";
import { TbCoinRupee } from "react-icons/tb";
import { AmountDetailsCard } from "./AmountDetailsCard";
import { FiPercent } from "react-icons/Fi";
function calculateInterest(principal, rate, time) {
  rate = rate / 100;
  let interest = principal * rate * time;
  let totalAmount = principal + interest;

  return {
    interest: interest,
    totalAmount: totalAmount,
  };
}

export const InputLine = () => {
  const [sliderValue, setAmountValue] = useState(0);
  const [intrestvalue, setIntrestValue] = useState(0);
  const [duration, setDuration] = useState(0);
  const [courseduration, setCourseduration] = useState(0);
  const [grasvalue, setGrasValue] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const { interest, totalAmount } = calculateInterest(
      sliderValue,
      intrestvalue,
      duration
    );
    setResult({ interest, totalAmount });
  };

  useEffect(() => {
    handleCalculate();
  }, [sliderValue, intrestvalue, duration]);

  let rangeValue = calculateInterest(sliderValue, intrestvalue, duration);

  console.log("Carr", result);

  return (
    <>
      <CalcuHero />
      <div className="md:w-[90%] w-full h-full py-2 md:flex md:justify-around gap-10 mx-auto relative">
        <div className="md:w-[430px] w-[90%] mx-auto rounded-lg h-fit  mt-[-80px]  px-5 py-10  z-10 bg-white shadow-card-shadow">
          <InputBox
            heading="Loan Amount"
            sliderValue={sliderValue}
            mark="&#x20B9;"
            lastValue={10000}
            setSliderValue={setAmountValue}
            handleSliderChange={(e) => setAmountValue(e.target.value)}
          />

          <InputBox
            heading="Interest (p.a)"
            mark="&#x25;"
            sliderValue={intrestvalue}
            lastValue={17}
            setSliderValue={setIntrestValue}
            handleSliderChange={(e) => setIntrestValue(e.target.value)}
          />

          <InputBox
            heading="Loan Duration"
            mark="Years"
            sliderValue={duration}
            lastValue={15}
            setSliderValue={setDuration}
            handleSliderChange={(e) => setDuration(e.target.value)}
          />

          <InputBox
            heading="Course Duration"
            mark="Months"
            sliderValue={courseduration}
            lastValue={48}
            setSliderValue={setCourseduration}
            handleSliderChange={(e) => setCourseduration(e.target.value)}
          />

          <InputBox
            heading="Grace Period"
            mark="Months"
            sliderValue={grasvalue}
            lastValue={12}
            setSliderValue={setGrasValue}
            handleSliderChange={(e) => setGrasValue(e.target.value)}
          />
        </div>

        <div className="md:w-fit  w-[90%] mx-auto  flex items-center md:h-[420px] h-fit md:py-0 py-10  md:gap-10    rounded-lg ">
          <div className="w-fit h-fit md:gap-7 gap-7 mx-auto  grid grid-cols-2">
            <AmountDetailsCard
              amountType="Monthly EMI"
              money={sliderValue}
              logo={<TbCoinRupee size={35} color="green" />}
              border
            />
            <AmountDetailsCard
              amountType="Pricipal Amount"
              money={Math.round(rangeValue.interest)}
              logo={<TbCoinRupee size={35} color="green" />}
            />
            <AmountDetailsCard
              amountType="Total Interest"
              money={Math.round(result?.interest)}
              border
              logo={<FiPercent size={35} color="green" />}
            />
            <AmountDetailsCard
              amountType="Total Amount"
              money={Math.round(result?.totalAmount)}
              logo={<TbCoinRupee size={35} color="green" />}
            />

            <button className="md:w-[170px] w-[145px] py-2 font-semibold bg-black text-white rounded-lg  ">
              Apply Now
            </button>
            <button className="md:w-[170px] w-[145px]  py-2 shadow-card-shadow  rounded-lg  font-semibold ">
              Check Eligibiliy
            </button>
          </div>

          <div className=" py-2 px-2 md:block hidden shadow-lg">
            <ColorChart rangeValue={rangeValue.interest} />

            <div className="flex mt-3 justify-around  items-center gap-2 w-[80%] mx-auto  ">
              <div className="w-5 h-2 bg-[#3EB489]"></div>
              <p className="text-[10px] ">Interest &#x20B9;</p>

              <div className="w-5 h-2 bg-[#A0D6B4]"></div>
              <p className="text-[10px] ">Loan Amount &#x20B9;</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
