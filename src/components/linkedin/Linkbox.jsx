import Image from 'next/image'
import React from 'react'

const Linkbox = ({imgUrl , text , pTag}) => {
  return (
    <>
      <div className=" px-2 py-2 text-center md:text-left  md:w-[300px] w-[200px] h-[170px] md:h-[250px] grid place-content-center ">
            <div className="md:w-[100px] w-[70px] h-[70px] md:h-[100px] relative  rounded-full  ">
              <Image
                src={imgUrl}
                alt="people"
                fill
                className="object-cover  rounded-full"
              />

            </div>
            <h1 className="md:text-[30px] text-[15px] font-semibold whitespace-nowrap text-gray-600 ">
             {text}
             
            </h1>
            <p className="text-gray-500   md:text-lg text-[12px] md:mt-[-8px] ">{pTag}</p>
          </div>

    </>
  )
}

export default Linkbox