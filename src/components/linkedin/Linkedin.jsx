import Image from "next/image";
import React from "react";
import Linkbox from "./Linkbox";

const Linkedin = () => {
  return (
    <>
      <div className="mt-20 border md:w-[60%]  w-full mx-auto h-full px-10 py-2  bg-[#fffbef] ">
        <h3 className="font-semibol text-gray-600 md:text-[21px] px-10 py-4">
          LinkedIn is thriving everywhere
        </h3>
        <div className="flex justify-around items-center  gap-5  md:gap-40">
          <Linkbox
            imgUrl="https://cdn-icons-png.flaticon.com/512/3437/3437306.png"
            text="706 millon+"
            pTag="members"
          />

          <Linkbox
            imgUrl="https://monsterppc.com/wp-content/uploads/2015/04/NavigationIcon-01.png"
            text="200+"
            pTag="countries & territories"
          />

          <Linkbox
            imgUrl="https://png.pngtree.com/element_our/png/20181228/building-vector-icon-png_296032.jpg"
            text="55 millon+"
            pTag="companies"
          />
        </div>



        <div className=" w-full h-fit md:flex justify-between  mt-4 md:mt-11 ">

            <div className="w-[50%] h-[350px] relative mt-[-10px] md:px-12">

                <div className="md:w-[150px] w-[120px] h-[120px] md:h-[150px] relative rounded-full  py-4  left-0  bg-[#eae1c7] md:grid place-content-center">
                    <div className="flex absolute md:top-3 top-2 left-8 items-center gap-3  md:gap-5">
                    <h1 className="md:text-[90px] text-[65px]  font-sans ">3</h1>
                    <p className="whitespace-nowrap md:text-md text-sm text-gray-700">professionals sign up <br /> to join Linkedin <br /> every second  </p>
                    </div>
                </div> 



                <div className="md:w-[150px] w-[120px] h-[120px] md:h-[150px] md:right-5 rounded-full left-[175px]  md:left-60 mt-4  absolute  bg-[#eae1c7]  grid place-content-center">
                    <div className="flex absolute flex-row-reverse top-2 md:right-3 right-6 items-center gap-2 md:gap-4">
                    <h1 className="md:text-[90px] text-[65px]  font-sans ">10</h1>
                    <p className="whitespace-nowrap md:text-md text-sm text-gray-700">LinkedIn is among  <br /> the world's top 10 <br /> fastest growing <br /> brand</p>
                    </div>
                </div> 

            </div>


            <div className="md:w-[50%] w-full h-[170px]  grid place-content-center md:mt-24 mt-[-55px] md:text-left text-center ">
               <div className="">
                <h3 className="font-semibold md:text-[18px] py-2 md:py-0 text-[15px] text-gray-600">There are</h3>
                <h1 className="font-bold md:text-[45px] text-[35px] text-gray-600 mt-[-10px]">2.9 million</h1>
                <h3 className="font-semibold md:text-[20px] text-[18px]  text-gray-600 mt-[-5px] md:mt-[-12px]">groups on LinkedIn</h3>
                <p className="md:py-4  py-2 md:text-[16px] text-sm text-gray-600">including industry and  interest commuities  <br /> company and   university  alumni gruops and <br /> professional associations</p>
               </div>
            </div>
        </div>


<div className=" w-full h-full  mt-[-5px] md:mt-10 relative">



    <div className=" mx-auto h-[200px] md:w-[800px] w-full  items-center ">

                <div className="md:flex items-center  w-fit h-fit gap-[40px] mx-auto ">
        <h1 className="font-semibold md:text-[75px] text-[50px] mt-10 ml-14 relative z-10  ">89%</h1>

        <div className="">
        <p className="md:text-md text-[15px] z-10  md:mt-7 relative text-gray-600">LinkedIn Live streams have <br /> jumped 89% since March 2020</p>
        
     <div className="md:w-[350px] w-full z-10 relative md:mt-4 mt-5 md:h-5 h-2 bg-orange-500"></div>
        </div>
        </div>
    
    </div>

    <div className=" md:w-[250px] w-full top-0 h-[150px] md:h-[135px] left-[0px] md:left-[220px] overflow-hidden bg-orange-200  rounded-t-full absolute"></div>
</div>

        
      </div>
    </>
  );
};

export default Linkedin;
