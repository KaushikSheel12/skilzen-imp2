import React from "react";

export const WebDesign = () => {
  const fontBoxImg = [
    "https://framerusercontent.com/images/1DWkcLk5VUmAbyaI0gRgD5mlCo.png?scale-down-to=512",
    "https://framerusercontent.com/images/CQx8zinMidmU16as7XKJlZ3gro.jpg?scale-down-to=512",
    "https://framerusercontent.com/images/H8ni2KmQGnbgizf56RKpKoLZQ4.png?scale-down-to=512",
    "https://framerusercontent.com/images/f0q3iKTRdYvGFZj7VswSLYscCQc.png?scale-down-to=512",
    "https://framerusercontent.com/images/I1z2dnuJU6q5QeXevDWWY1ab94.jpg?scale-down-to=512",
    "https://framerusercontent.com/images/snEhXMwBqVCb3QLp5UobpXOA1TE.jpg?scale-down-to=512",
    "https://framerusercontent.com/images/ngyHnLWyhbcFoiOYYAxS4S49h6I.jpg?scale-down-to=512",
  ];

  return (
    <div className="w-full h-screen relative flex items-center px-6 py-1 ] ">
      <div className="w-[240px] h-full  fixed  left-6 top-6 ">
        <SidebarHome />
      </div>
      <div className="w-[60%]  h-full  absolute right-[270px] px-2 ">
      <Toptitle heading="Web Design" paraGraph="Find your next favorite web design tool here" />

        <div id="Apps" className="w-full h-fit mt-7 ">
          <h2 className="text-[26px] font-semibold">Apps</h2>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Apps
              title="LLLustrator"
              img="https://framerusercontent.com/images/e4CdGqrGik2HInsyc5ADUMiasvo.png?scale-down-to=512"
            />
            <Apps
              title="Photohop"
              img="https://framerusercontent.com/images/oPasot6czxqps2QTUc8LeBuORc.png?scale-down-to=512"
            />
            <Apps
              title="Inesign"
              img="https://framerusercontent.com/images/Y2UEwNZFUYH0cOPjNPTbZwX6Li4.png?scale-down-to=512"
            />
            <Apps
              title="Affinity Designer"
              img="https://framerusercontent.com/images/TQWgmWwraX4fH0X9HlFOLRLkvQ0.png?scale-down-to=512"
            />
          </div>
        </div>

        <div id="ui-kit" className="w-full h-fit mt-7  ">
          <h2 className="text-[26px]  font-semibold">UI Kit</h2>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
            <UiCard />
          </div>
        </div>

        <div id="Font" className="w-full h-fit mt-7  ">
          <h2 className="text-[26px]  font-semibold">Icon</h2>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {fontBoxImg?.map((el, index) => (
              <FontCard key={index} img={el} />
            ))}
          </div>
        </div>

        <div id="Mockup" className="w-full h-fit mt-7  ">
          <h2 className="text-[26px]  font-semibold">No Code</h2>
          <div className="grid grid-cols-3 gap-3 mt-4">
            {fontBoxImg?.map((el, index) => {
              return <FontCard key={index} img={el} />;
            })}

            <div className="w-fit h-fit border-2 border-gray-400 hidden px-3 py-2 shadow-lg mb-3  relative rounded-lg ">
              <div className="w-full h-fit ">
                <div className="w-[320px] h-[200px] relative bg-red-600 cursor-pointer rounded-md  ">
                  <Image
                    src="https://framerusercontent.com/images/1DWkcLk5VUmAbyaI0gRgD5mlCo.png?scale-down-to=512"
                    fill
                    alt="img"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between py-1 gap-3">
                  <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[4px] rounded-md  shadow-lg ">
                    <p className="">Craftwork</p>
                  </div>
                  <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[2px] rounded-md  flex items-center gap-2 shadow-lg ">
                    <p>Free & Paid</p>
                    <BsArrowUpRight />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-fit h-fit border-2 border-gray-400 hidden px-3 py-2 shadow-lg mb-3  relative rounded-lg ">
              <div className="w-full h-fit ">
                <div className="w-[320px] h-[200px] relative bg-red-600 cursor-pointer rounded-md  ">
                  <Image
                    src="https://framerusercontent.com/images/1DWkcLk5VUmAbyaI0gRgD5mlCo.png?scale-down-to=512"
                    fill
                    alt="img"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between py-1 gap-3">
                  <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[4px] rounded-md  shadow-lg ">
                    <p className="">Craftwork</p>
                  </div>
                  <div className="w-fit border border-gray-400 h-fit px-2 cursor-pointer py-[2px] rounded-md  flex items-center gap-2 shadow-lg ">
                    <p>Free & Paid</p>
                    <BsArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[250px] border border-gray-600   shadow-lg mt-5 rounded-md  flex   items-center ">
          <div className="w-[70%] h-full px-14  grid place-content-center">
            <h3 className="text-[28px] ">Join the newsletter</h3>
            <p className="text-[16px] text-gray-500">
              Receive an email when tools are added! Discover the future nugget
              of design in advance! No spam, we promise
            </p>
            <div className="flex items-center w-[309px] border-gray-500 border rounded-lg px-3 gap-3  h-fit mt-3 ">
              <input type="email" placeholder="Enter your email" />
              <div className="px-4 bg-gray-200 rounded-lg py-1">Subscribe</div>
            </div>
          </div>
          <div className="w-[35%] h-[250px] relative">
            <Image
              src="https://framerusercontent.com/images/vF1ErqZTpfGoJaHHEr6nGNcccYM.png"
              alt="img"
              fill
              className="object-cove rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
