import React from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Box, Heading, IconButton, useBreakpointValue, VStack } from "@chakra-ui/react";
import Slider from "react-slick";
import Card from "../Card";
// import Text from "antd/es/typography/Text";

const Index = ({ comps }) => {
  const [slider, setSlider] = React.useState(null);
  console.log("COmps ", comps);
  // Settings for the slider
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  // const top = useBreakpointValue({base: '90%', md: '50%'});
  // const side = useBreakpointValue({base: '30%', md: '40px'});

  return (
    <>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className="w-full">
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {comps?.map((comp) => comp)}
        </Slider>
      </div>
    </>
  );
};
export default Index;
