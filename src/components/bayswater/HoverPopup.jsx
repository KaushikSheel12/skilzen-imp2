import { useState } from "react";
import { SiReactquery } from "react-icons/si";

const HoverBox = () => {
  const [isBigBoxOpen, setIsBigBoxOpen] = useState(true);
  const [hoveredTopBox, setHoveredTopBox] = useState(-2);
  const [hoveredMiddleBox, setHoveredMiddleBox] = useState(-2);
  const [hoveredBottomBox, setHoveredBottomBox] = useState(-2);

  const handleBigBoxHover = () => {
    setIsBigBoxOpen(true);
  };

  const handleBigBoxLeave = () => {
    setIsBigBoxOpen(false);
  };



  


  return (
    <div
      className="nav border w-full text-lg h-20 px-2 py-2 flex justify-around items-center  relative"
      onMouseEnter={handleBigBoxHover}
      onMouseLeave={handleBigBoxLeave}
    >
      <h2>hoverme</h2>
      <h2>hoverme</h2>
      <h2>hoverme</h2>

      {isBigBoxOpen && (
        <div
          className={`bgdiv  absolute top-20 px-5 w-[90%] left-20 h-screen p-4 items-center z-10   bg-red-500    `}
        >
          <div className="flex justify-around ">
            <div className="justify-around mt-3 ">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`bottombox group  bg-[#f8b538] p-4 mb-4 rounded-md ${
                    hoveredTopBox === index
                      ? "h-[200px] border-red-500 border "
                      : "h-[100px]"
                  } w-[390px] transition-all ease-linear`}
                  onMouseEnter={() => setHoveredTopBox(index)}
                  onMouseLeave={() => setHoveredTopBox(-1)}
                >
                  <div className="flex gap-5 items-center justify-center">
                    <SiReactquery size={35} color="red" />
                    <h4 className="text-2xl font-semibold">Skilzen</h4>
                  </div>
                  <p className="hidden group-hover:block text-white ">
                    We offer a truly unique experience at each of our 10{" "}
                  </p>
                </div>
              ))}
            </div>

            <div className="justify-around mt-3 ">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`middlebox group  bg-[#2e87cfcf] p-4 mb-4 rounded-md ${
                    hoveredMiddleBox === index
                      ? "h-[200px] border-red-500 border "
                      : "h-[100px]"
                  } w-[390px] transition-all ease-linear`}
                  onMouseEnter={() => setHoveredMiddleBox(index)}
                  onMouseLeave={() => setHoveredMiddleBox(-1)}
                >
                  <div className="flex gap-5 items-center justify-center">
                    <SiReactquery size={35} color="red" />
                    <h4 className="text-2xl font-semibold">Skilzen</h4>
                  </div>
                  <p className="hidden group-hover:block text-white ">
                    We offer a truly unique experience at each of our 10{" "}
                  </p>
                </div>
              ))}
            </div>

            <div className="justify-around mt-3 ">
              {[1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`bottombox group  bg-[#e97cff] p-4 mb-4 rounded-md ${
                    hoveredBottomBox === index
                      ? "h-[200px] border-red-500 border "
                      : "h-[100px]"
                  } w-[390px] transition-all ease-linear`}
                  onMouseEnter={() => setHoveredBottomBox(index)}
                  onMouseLeave={() => setHoveredBottomBox(-1)}
                >
                  <div className="flex gap-5 items-center justify-center">
                    <SiReactquery size={35} color="red" />
                    <h4 className="text-2xl font-semibold">Skilzen</h4>
                  </div>
                  <p className="hidden group-hover:block text-white ">
                    We offer a truly unique experience at each of our 10{" "}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HoverBox;
