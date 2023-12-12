import Image from "next/image";
import React from "react";
import ReviewBox from "./ReviewBox";

  export const Recentreviews = () => {
  return (
    <>
      <div className="w-full h-20  bg-gray-200 grid place-content-center">
        <div className="flex items-center gap-3 w-fit h-fit">
          <p className="font-semibold md:text-[20px] "> Are you a business?</p>
          <p className="bg-blue-500 text-white px-4 font-semibold py-1 rounded-full text-md cursor-pointer">
            Get Started
          </p>
        </div>
      </div>
      <div className="w-full h-[500px] px-4 py-2 border">
        <p className="text-center font-bold text-[23px]">Recent reviews</p>

        <div className="grid grid-cols-1 md:grid-cols-5  mx-auto gap-5">
          <ReviewBox
            Rating={1}
            comment=" “I have had a lot of experience with agencies and agents over the years and occasionally I am contacted by an agent who takes a real interest in my capabilities,...”"
          />

          <ReviewBox
            Rating={2}
            comment=" “1. Visa process is too slow. 2. Car parking is difficult.”"
          />

          <ReviewBox
            Rating={5}
            comment=" “I made an order at Sklum which had to be delivered with 3 parcels. On 25th of August I received 2 of them. And the 3 rd parcel is still not delivered. I cannot ...”"
          />

          <ReviewBox
            Rating={1}
            comment=" “Refunded me asap as parcel got lost in the post! Thank you Jamhec”"
          />

          <ReviewBox
            Rating={3}
            comment="   “My shorts arrived quickly but unfortunately didn't fit. I sent them back, asking for a different size, which in itself was the easiest thing I think I have ever...”"
          />

          <ReviewBox
            Rating={1}
            comment=" “Professional and timely service. No complaints.”
       "
          />

          <ReviewBox
            Rating={4}
            comment="  “Extremely helpful! It was super easy to deal with both Steph Jones and Kyle Richardson via both email and telephone. Due to work commitments I find it easier to...”"
          />

          <ReviewBox
            Rating={3}
            comment="    “game chetting the people u all will reach hell very soon”"
          />

          <ReviewBox
            Rating={2}
            comment="    “Mihai helped me out a lot when the app didn't work. Great service!”"
          />

          <ReviewBox
            Rating={1}
            comment="   “Mahesh is an awesome trainer, I got trained from him on Mutual funds. Such a nice person in guiding and very good in teaching what we require exactly. The way h...”"
          />
        </div>
      </div>
    </>
  );
};


