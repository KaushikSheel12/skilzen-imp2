import useToggleStore from "@/zustand";
import React from "react";
import { RxCross2 } from "react-icons/Rx";
import { AiOutlineUnorderedList } from "react-icons/ai";

export const ResourceNev = () => {
  const { isToggel, setIsToggel } = useToggleStore();
  return (
    <>
      <ToggelSidebarButton setIsToggel={setIsToggel} isToggel={isToggel} />
    </>
  );
};

const ToggelSidebarButton = ({ setIsToggel, isToggel }) => {
  return (
    <div
      className="p-2 rounded-md bg-black  fixed md:hidden block z-20 top-2 right-6"
      onClick={() => setIsToggel(!isToggel)}
    >
      {isToggel ? (
        <RxCross2 size={16} color="#fff" />
      ) : (
        <AiOutlineUnorderedList size={16} color="#fff" />
      )}
    </div>
  );
};
