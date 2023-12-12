import { useEffect, useRef } from "react";

const ScrollingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = textRef.current;
      if (textElement) {
        const scrollY = window.scrollY;
        const maxScrollY = document.body.scrollHeight - window.innerHeight;
        const percentageScrolled = (scrollY / maxScrollY) * 100;
        const maxTranslate = 80; // Change this value to adjust the scrolling speed

        // Move the text horizontally based on the percentage scrolled
        const translateX = (percentageScrolled * maxTranslate) / 100;
        textElement.style.transform = `translateX(-${translateX}%)`;
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" top-0 left-0   w-full h-20 pointer-events-none">
      <div
        ref={textRef}
        className="md:text-[400px] text-[500px]  whitespace-nowrap   text-center  font-bold text-teal-500 opacity-20  p-4 rounded"
      >
        <h1>Skillzen</h1>
      </div>
    </div>
  );
};

export default ScrollingText;
