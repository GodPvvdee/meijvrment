import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgL from "../../assets/image/png/portrait-1.png";
import imgHeader from "../../assets/image/webp/Web Cover.png";
import imgHeader2 from "../../assets/image/png/Cover 1-1.jpg"
import imgHeader3 from "../../assets/image/png/Cover 2-1.jpg"
import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider/sliderHeader"
<style jsx>{`
.sliderImage{
width:100%;
height:500px
}


`}</style>

const com = 
  <>
   
    <img className="sliderImage" src={imgHeader2} />   
  </>
  const com2 = 
  <>
   
    <img className="sliderImage" src={imgHeader3} />   
  </>
const headerSlider = [com, com2];
const Hero = () => {
  return (
    <>
      <div className="" style={{ position: 'relative', }}>
      <Slider2 comps={headerSlider} length={1}  />
      </div>       
    </>
  );
};

export default Hero;
