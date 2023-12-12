import React from 'react'
import { IoMdNuclear } from 'react-icons/io'
import { Position } from './amberdata'

const Amber = () => {
  return (
   <>
   <div className='md:w-[70%] w-full h-full md:h-[600px] border px-2 py-2 mx-auto mt-20 text-center'>
    <h1 className='font-semibold md:text-[30px] text-lg px-4'> <span className='text-orange-500'>Highest Paying</span> Enginering Jobs </h1>




<div className="grid md:grid-cols-5 grid-cols-1 mt-5">


    {Position.map((el,index)=>{
        return (
            <div key={index}>
                    <div className='md:w-[220px] w-full h-fit md:h-[135px] mb-6 mx-auto  text-left py-2 px-6 bg-gray-100 rounded-lg'>
        <div>
            <div className="flex justify-between items-center">

       {el.logo}
        <h2 className='text-gray-300 text-[30px] font-bold'>{index+1}</h2>
            </div>
        <h4 className='md:text-[20px] text-[17px] leading-[26px] py-3'>{el.position}</h4>
        </div>
    </div>
            </div>
        )
    })}
</div>


   </div>
   </>
  )
}

export default Amber