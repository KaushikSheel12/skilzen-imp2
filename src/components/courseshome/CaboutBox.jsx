import Image from 'next/image'
import React from 'react'

const CaboutBox = ({imgUrl , title , para}) => {
  return (
 <>
       <div className="md:w-[400px] w-full  h-[265px] border mx-auto relative px-4 mb-2 text-left gap-5  border-black flex items-center justify-between  z-[-10px]  py-4   ">
          
          <div className='relative w-[150px] h-[150px] ml-5 '>
        <Image src={imgUrl} alt="img" fill className='object-contain'/>
          </div>
          <div>
           <h1 className='font-semibold leading-7 md:py-4 text-[25px]'>{title}</h1>
           <p className='text-[16px] text-gray-700 leading-[18px]'>{para}</p>
          </div>
     
     
             </div> 
 </>
  )
}

export default CaboutBox