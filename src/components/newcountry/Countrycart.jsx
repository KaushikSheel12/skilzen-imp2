import Image from 'next/image'
import React from 'react'

const Countrycart = ({imgSrc , text ,heading ,contryno}) => {
  return (
  <>

<div>
            <div className="flex items-center w-full  h-fit px-4   justify-around mx-auto md:mt-4 ">
              <div className="md:w-[200px] w-[170px] h-[75px]  md:h-[130px] relative">
                <Image
                  src={imgSrc}
                  fill
                  alt="mapimg"
                  className='object-contain'
                />
              </div>

              <div className="font-bold md:text-[32px] text-[20px] text-center  w-[50%] leading-7 md:leading-9">
             
                <h1> {contryno}<br />{heading}</h1>
              </div>
            </div>

            <p className="md:px-8  px-4 md:text-lg text-sm text-gray-700 leading-5 md:py-0 py-2  md:leading-10">
             {text}
            </p>
  
            </div>
  </>
  )
}

export default Countrycart