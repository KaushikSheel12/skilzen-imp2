import React from "react";
import { ProfileLable } from "./ProfileLable ";
import { TbWorldBolt } from "react-icons/tb";
import { MdOutlineColorLens, MdSlowMotionVideo } from "react-icons/Md";
import { AiOutlineAlibaba } from "react-icons/ai";
import useToggleStore from "@/zustand";

export const SidebarHome = () => {
  const { isToggel, setIsToggel } = useToggleStore();

  const sidebarlink = [
    {
      icon: <TbWorldBolt />,
      title: "Graphic Design",
      href: "/graphic-design",
      links: ["Color", "Font", "Mockup"],
    },
    {
      icon: <MdOutlineColorLens />,
      title: "Web Design",
      href: "/web-design",
      links: ["UI-Kit", "Icon", "No-Code"],
    },
    {
      icon: <AiOutlineAlibaba />,
      title: "Motion Design",
      href: "/motion-design",
      links: ["Script-Plugin", "Sound-Design"],
    },
    {
      icon: <MdSlowMotionVideo />,
      title: "Video Editing",
      href: "/video-editing",
      links: ["Footage", "Music-Sound"],
    },
  ];

  return (
    <>
      <h1 className="font-bold border-b-[1px] border-[#727272] md:px-2 w-[100px] md:w-[180px] text-[20px] md:text-[28px]">
        Resource
      </h1>
      {sidebarlink.map(({ title, href, links, icon }) => (
        <div onClick={() => setIsToggel(false)} className="">
          <ProfileLable title={title} href={href} links={links} icon={icon} />
        </div>
      ))}
    </>
  );
};
