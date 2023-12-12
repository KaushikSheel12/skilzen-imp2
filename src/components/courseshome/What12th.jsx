import React from 'react'

const What12th = ({subject}) => {
  return (
   <>
      
      <div className="w-[240px] h-[100px]  relative  items-center ">
 

 <div className="flex gap-3 mt-[-24px]   items-center">
 <h1> <span className='text-[35px] font-semibold'>What</span>  <span className='text-[35px] text-blue-500'>Next</span>   </h1>
<h1 className='text-[65px] mt-6'>?</h1>
 </div>
 <h1 className='mt-[-43px] font-semibold'> <span className='text-[18px] '>AFTER</span>  <span className='text-[15px] ml-2'>12  <span className='text-[14px] absolute left-[85px] '>th</span >  <span className='ml-4 bg-green-500 text-white text-[20px]'>{subject}</span></span>  </h1>
</div>
   </>
  )
}

export default What12th 