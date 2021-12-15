import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgL from "../../assets/image/png/portrait-1.png";
import imgHeader from "../../assets/image/webp/Web Cover.png";
import imgHeader2 from "../../assets/image/png/Cover 1-1.jpg";
import imgHeader3 from "../../assets/image/png/Cover 2-1.jpg";
import image from "../../assets/image/webp/head.svg";
import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider/sliderHeader";

<style jsx>{`
  .sliderImage {
    width: 100%;
    height: 500px;
  }
`}</style>;

const com = (
  <>
    <img className="sliderImage" src={imgHeader2} />
  </>
);
const com2 = (
  <>
    <img className="sliderImage" src={imgHeader3} />
  </>
);
const headerSlider = [com, com2];
const Hero = () => {
  return (
    <>
      <div className="w-11/12 mx-auto">
        <div style={{ position: "relative" }} id="bg" className="grid grid-cols-2">
          <div className="bg-transparent"></div>
          <Slider2 />
          <img
            src={image}
            style={{ height: "30rem", position: "absolute", left: "0", top: "0" }}
            className="w-full z-10"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
