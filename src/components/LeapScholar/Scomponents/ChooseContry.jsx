import React, { useState } from "react";
import { ContFlag } from "./ContFlag";

export const ChooseContry = () => {
  const ImgSrcData = [
    {
      img: "https://leapscholar.com/assets/images/counsellor/canada-flag.svg",
      name: "Canada",
    },
    {
      img: "https://leapscholar.com/assets/images/counsellor/uk-flag.svg",
      name: "UK",
    },
    {
      img: "https://leapscholar.com/assets/images/counsellor/usa-flag.svg",
      name: "USA",
    },
    {
      img: "https://leapscholar.com/assets/images/counsellor/ireland-flag.svg",
      name: "Ireland",
    },
    {
      img: "https://leapscholar.com/assets/images/counsellor/australia-flag.svg",
      name: "Australia",
    },
  ];

  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryClick = (name) => {
    console.log("name ", name);
    setSelectedCountry(name);
  };

  return (
    <>
      <div className="text-center">
        <h2 className="text-green-500 leading-6 md:leading-9 font-semibold text-[20px] md:text-[24px] md:mt-0 mt-[-30px]">
          We would love to know more about you to chart your study abroad path
        </h2>
        <p className="md:mt-7 py-4 md:py-0 text-gray-600 font-semibold text-[20px] md:text-[24px]">
          Choose your dream country
        </p>
        <div className="grid grid-cols-3 py-2 md:gap-7 gap-3 md:mt-6">
          {ImgSrcData?.map((el, index) => {
            return (
              <ContFlag
                key={index}
                ImgSrc={el.img}
                name={el.name}
                bgColor={selectedCountry === el.name ? "blue-200" : ""}
                borderColor={selectedCountry === el.name ? "blue-500" : ""}
                onClick={() => handleCountryClick(el.name)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
