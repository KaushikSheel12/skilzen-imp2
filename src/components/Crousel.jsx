import Image from "next/image";
import React, { useState, useEffect } from "react";

const images = [
  "https://wallpapers.com/images/featured/mahadev-hd-pictures-0knnrunxwudvxmoe.jpg",
  "https://lh3.googleusercontent.com/5lHmN2EhmzKiSlwXuH0YxexUiSS1GBtGlK4uZ10IZk_7HSWJnj0mIUj8ILJjD-3Epz_EyD5DuG5qucyCxfhEINL0=w640-h400-e365-rj-sc0x00ffffff",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/862e120a-a838-4e27-ad5c-712573a028a6/dey1l6d-c491819a-5e2c-4016-bf1f-707370604746.jpg/v1/fill/w_1280,h_1403,q_75,strp/mahadev_digital_art__lord_shiva_digital_painting_by_121nikhilmishra_dey1l6d-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQwMyIsInBhdGgiOiJcL2ZcLzg2MmUxMjBhLWE4MzgtNGUyNy1hZDVjLTcxMjU3M2EwMjhhNlwvZGV5MWw2ZC1jNDkxODE5YS01ZTJjLTQwMTYtYmYxZi03MDczNzA2MDQ3NDYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.lxw6qcBQp7sVGSmpVnl3bIeTw4rKEoHR4sZT6Lb_2Po",
  // Add more image URLs here
];


const headerTexts = [
  "College Engeenring",
  "IIT Colleges",
  "Skilzen Technology",
  // Add more header texts here
]
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textSize, setTextSize] = useState(true); // Renamed state variable for clarity
  const originalTextSize = 20; // Set the original text size (in pixels) here
  const enlargedTextSize = 35; // Set the enlarged text size (in pixels) here

  useEffect(() => {
    // Automatically change the image every 3 seconds (adjust the timing as needed)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    // Reset the text size back to the original value after the transition
    const timeout = setTimeout(() => {
      setTextSize(true);
    }, 500); // Adjust the time to match the duration of the transition

    return () => clearTimeout(timeout);
  }, [textSize]);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
    setTextSize(false); // Reduce the text size when the new image is rendered
  };

  return (
    <>
      <div className="w-[60%] mt-10  mx-auto h-[550px] bg-black py-10 px-4">
        <div className="grid grid-cols-2 bg-white  mx-auto rounded-lg  gap-5 px-4  w-[90%]   border h-[450px] items-center justify-center">
          <div className="text-center ">
            {headerTexts.map((text, index) => (
              <h1
                key={index}
                className={`${
                  index === currentImageIndex
                    ? `text-[${enlargedTextSize}px]`
                    : `text-[${originalTextSize}px]`
                } font-bold mb-4 ${
                  index === currentImageIndex ? "text-black " : "text-gray-400"
                }  font-semibold  `}
              >
                {text}
              </h1>
            ))}
          </div>

          <div className="w-64 h-64 p-6  mb-4 relative">
            <div className="">
              <Image
                layout="fill"
                objectFit="cover"
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="anim"
                style={{
                  transform: `scale(${currentImageIndex === 0 ? 1.2 : 1})`,
                }}
                loading="eager" // Set the loading attribute to "lazy" for slow image loading animation
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
