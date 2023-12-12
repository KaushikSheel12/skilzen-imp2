import React from 'react';
import Image from 'next/image';

const Universities = () => {
    const columns = 4; // Number of columns in your grid

    return (
        <>
            <div className='w-[90%] mx-auto h-40 text-center px-2 py-2 bg-blue-500 text-white mt-20'>
                <h1 className='md:text-[35px] font-semibold'>LEADING UNIVERSITIES <br /> RECOGNIZE CLEVER HARVEY CERTIFICATIONS</h1>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 md:w-[70%] mx-auto">
                {[...new Array(10)].map((wl, index) => {
                    const isLastItem = (index + 1) % columns === 0;
                    const isLastRow = Math.floor(index / columns) === Math.floor((10 - 1) / columns); // Check if this is the last row

                    return (
                        <div
                            className={` ${isLastItem ? "border-r-0" : "border-r-2"} ${isLastRow ? "border-b-0" : "border-b-2"} w-full h-fit px-2 py-2 text-center mx-auto`}
                        >
                            <Image
                                src="https://dev.collegementor.com/assets/collegementorLogo.svg?width=750&quality=75&format=webp"
                                width={220}
                                height={220}
                                alt="logo"
                                className='mx-auto md:mt-0 mt-[-15px]'
                            />
                            <h1 className="text-[20px] font-semibold mt-[-20px]">Collegementor</h1>
                            <p className="text-md text-gray-600">UGC Recognized</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Universities;
