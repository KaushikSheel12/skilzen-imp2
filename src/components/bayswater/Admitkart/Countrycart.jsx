import React from 'react'
import Image from "next/image";



const Countrycart = () => {
  return (
   <>
       <div className='md:w-[300px] w-[170px] h-[140px] md:h-[240px] border relative  rounded-t-[22px] mx-auto md:block  mt-4' > 
        <Image src="https://i.insider.com/649b13386eb0a800194d589a?width=700"  alt="img" fill className='object-fill   rounded-t-[22px]  '/>
    </div>
        <div className='flex items-center h-7 md:h-16 md:w-[300px] w-[170px]   mx-auto md:flex  rounded-b-[22px] border justify-center gap-2 md:gap-5'>
            <div className="md:w-[43px] w-[22px] h-[22px] md:h-[43px] overflow-hidden relative rounded-full border">
                <Image src="https://m.media-amazon.com/images/I/718gVU8ktKL._AC_UF894,1000_QL80_.jpg" fill alt="country-flag" className='object-fill'/>
            </div>
            <h2 className='font-semibold md:text-lg text-[12px]'>United Kingdom</h2>
        </div>
   </>
  )
}

export default Countrycart