import Image from "next/image";
import React from "react";

const CompanyBox = () => {
  return (
    <>
      <div className="w-fit h-fit mx-auto  border  rounded-2xl  py-1 px-1  ">
        <div className="md:w-[130px] w-[150px] h-[140px] rounded-t-2xl md:h-[115px] relative  r">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXC3p0GgEhhOUzPaOnkDZB4Hm-VjdJBqfM2Q&usqp=CAU"
            alt="img"
            fill
            className="object-cover   rounded-t-[22px]  "
          />
        </div>

        <div className=" h-[30px] md:w-[130px] w-[150px] relative    ">
          <Image
            src="https://logodix.com/logo/996474.jpg"
            fill
            alt="companay-logo"
            className="object-cover rounded-b-[22px] "
          />
        </div>
      </div>
    </>
  );
};

export default CompanyBox;
