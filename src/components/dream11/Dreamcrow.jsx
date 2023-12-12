import { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const DreamCarousel = ({ children, settings }) => {
  return <Slider {...settings}>{children}</Slider>;
};
