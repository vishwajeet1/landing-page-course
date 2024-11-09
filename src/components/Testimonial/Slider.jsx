import React from "react";
import Slider from "react-slick";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function NextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
      }}
      className="top-[50%] transform translate-y-[-50%] p-2 bg-white absolute rounded-[100%] left-[calc(100%-60px)] md:left-[100%] text-[#0E1B2C] cursor-pointer shadow-[0px_8px_30px_0px_#0A02171F]"
      onClick={onClick}
    >
      <KeyboardArrowRightIcon />
    </div>
  );
}

function PrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
      }}
      className="top-[50%] transform translate-y-[-50%] p-2 bg-white absolute rounded-[100%] left-[70px] md:left-0 text-[#0E1B2C] ml-[-60px] cursor-pointer z-20  shadow-[0px_8px_30px_0px_#0A02171F]"
      onClick={onClick}
    >
      <KeyboardArrowLeftIcon />
    </div>
  );
}

function CenterMode({ children }) {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          centerMode: false,
          className: "null",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
    arrows: true,
    dots: true,
    dotsClass: "button__bar",
    className: "custom__slider",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return <Slider {...settings}>{children}</Slider>;
}

export default CenterMode;
