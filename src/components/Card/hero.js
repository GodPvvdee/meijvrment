import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Button, Section, Box, Text } from "../../components/Core";

import { device } from "../../utils";
import imgL from "../../assets/image/png/portrait-1.png";
import imgHeader from "../../assets/image/png/cover 1.jpg";


const ImgRight = styled.img`
  max-width: 100%;
`;
const Hero = () => {
    return (
        <>
            <div className="position-relative" style={{ marginLeft: '100px', marginRight: '100px' }}>
                <ImgRight src={imgHeader} alt="abc" />
            </div>
            {/* <!-- Hero Area --> */}
        </>
    );
};

export default Hero;
