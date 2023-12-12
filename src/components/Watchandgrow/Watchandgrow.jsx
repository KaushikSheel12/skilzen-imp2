import Image from "next/image";
import React, { useEffect } from "react";

const Watchandgrow = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards[0].classList.add("expand-card");
    cards[0].classList.remove("card");
   
  

    cards.forEach((card, index) => {
      card.addEventListener("mouseenter", () => {
        cards.forEach((c, i) => {
          if (i !== index) {
            c.classList.remove("expand-card");
            c.classList.add("card");
          } else {
            card.classList.add("expand-card");
            card.classList.remove("card");
          }
        });
      });
      card.addEventListener("mouseleave", () => {
        cards.forEach((c, i) => {
          c.classList.remove("expand-card");
          c.classList.add("card");

        });

        cards[0].classList.add("expand-card");
        cards[0].classList.remove("card");
      });
    });

    ()=>{
      cards.forEach((card,index)=>{
        card.removeEventListener("mouseenter",()=>{})
        card.removeEventListener("mouseleave",()=>{})

      })
    }
  },[]);

  return (
    <>
      <div className="w-full">

        <div className="w-[80%] h-[300px]  mx-auto  px-8 ">
          <div className="flex justify-between items-center py-8">
            
            <div className="w-[30%] ">
              <h1 className="md:text-[74px] leading-[80px]">
                Watch. <br />
                Learn. <br />
                Grow.
              </h1>{" "}
              <br />
              <div className="w-[400px] flex h-[90px] border  shadow-lg ">
                <input type="text" className="w-[80%] text-[22px] h-full " />
                <div className="relative bg-green-600  w-[20%] grid place-content-center overflow-hidden  cursor-pointer go-btn ">
                  <p className="reltive z-10 text-[20px]">Go</p>
                </div>
              </div>
            </div>
            <div className=" h-[590px] flex space-x-10">
              {[...Array(3)].map((_, index) => (
                
                <div
                  
                  key={index}
                  className={` ${
                    index === 0 && "expand-card"
                  } card cursor-pointer rounded-[20px] overflow-hidden  transition-all ease-in-out group duration-300  h-full relative`}
                >
                  <Image
                    className="object-cover"
                    alt="img"
                    src="https://img.freepik.com/free-photo/portrait-smiling-casual-girl-student-with-backpack-writing-notepad-while-standing-with-books-isolated-white-wall_231208-1182.jpg"
                    fill
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Watchandgrow;
