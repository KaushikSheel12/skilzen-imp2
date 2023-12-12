import Image from 'next/image'
import React from 'react'
import Countrycart from './Countrycart'

const Country = () => {
  return (
   <>
   <div className="md:w-[80%] w-full h-full border mx-auto px-2 py-2 ">

    <h1 className='font-semibolt text-xl '>Welcome to Study Abroad journey! Where are you headed</h1>
   <div className="grid md:grid-cols-4 grid-cols-2 justify-center">
    
    {[...new Array(4)].map((el,index)=>

    <div key={index}><Countrycart/></div>
    )}
</div>


   </div>
   </>
  )
}

export default Country