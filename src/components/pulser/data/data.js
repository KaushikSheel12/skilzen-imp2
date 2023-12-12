import { FaHandshake, FaServicestack } from "react-icons/Fa";
import { RiMoneyDollarBoxLine } from "react-icons/Ri";

export const aboutBoxData = [
  {
    text: "About Us",
    paragraph: "Skillzen template boasts a visually striking and modern design",
    icon: (
      <FaHandshake
        size={70}
        color="teal"
        className="border rounded-full bg-[#99c299] mx-auto py-1 px-2 "
      />
    ),
  },

  {
    text: "Our Services",
    paragraph: "Fully responsive, adapting to different screen sizes",
    icon: (
      <FaServicestack
        size={70}
        color="teal"
        className="border rounded-full bg-[#99c299] mx-auto py-1 px-2 "
      />
    ),
  },

  {
    text: "Contact Us",
    paragraph: "Skillzen offers a wide array of thoughtfully designed sections",
    icon: (
      <RiMoneyDollarBoxLine
        size={70}
        color="teal"
        className="border rounded-full bg-[#99c299] mx-auto py-1 px-2 "
      />
    ),
  },
];
