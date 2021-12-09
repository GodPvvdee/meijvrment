import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgL from "../../assets/image/png/portrait-1.png";
import imgHeader from "../../assets/image/webp/Web Cover.png";
import imgHeader2 from "../../assets/image/png/Cover 1-1.jpg"
import Chero from "../../components/Card/hero";
import Slider from "../../components/Slider";
const chero = [<Chero />, <Chero />, <Chero />]
const ImgRight = styled.img`
  max-width: 100%;
`;
const Hero = () => {
  return (
    <>
      <div className="" style={{ position: 'relative', }}>
        <ImgRight src={imgHeader2} alt="" />
      </div>
      {/* <!-- Hero Area --> */}

    </>
  );
};

export default Hero;
