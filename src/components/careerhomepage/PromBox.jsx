import Image from 'next/image'
import React from 'react'

const PromBox = ({imgUrl , imgTxt ,  heading  ,para }) => {
  return (
  <>
      <div className='imgbox w-[300px]  relative h-[400px] md:mb-0 mb-2 px-2 py-2 group'>
            <Image  src={imgUrl} alt="student-img" fill className='object-cover'/>

           
            <h2 className=' text-[20px] md:text-[25px] absolute inset-0 text-white  h-full w-full  grid place-content-center px-[20px]  bg-black    border bg-opacity-30   leading-7 '>{imgTxt}</h2>
         <div className="w-[85%] h-[3px] bg-red-500 mx-auto top-[230px]  md:top-[240px]  absolute inset-0"></div>
         
     
       <div   className='whitebox w-[300px] h-[400px]  group-hover:block  hidden hover:flex  px-4 py-2 bg-white absolute inset-0'>
        <h3 className='  text-[20px] md:text-[25px] leading-[30px] md:leading-8'>{heading}</h3>
        <div className="w-full h-[3px] bg-red-500 mx-auto mt-4"></div>
        <p className='text-[14px] leading-[18px] mt-6'>{para}</p>

        <div className='w-full h-10 border mt-6 bg-red-600 text-white grid place-content-center cursor-pointer'> See What's Trending</div>
       </div>
    
        </div>
  </>
  )
}

export default PromBox