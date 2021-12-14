import React from "react";
import Link from "next/link";
import Image from 'next/image'
import { Title } from "../Core";
import imgLogo from "../../assets/image/png/p02.png";
import styled from "styled-components";
const ImgRight = styled.img`
  max-width: 15%;
  margin-right: 100px;  
`;
const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link href="/">
      <a className={`${className}`} {...rest} style={{ marginLeft: '200px' }}>
        <Image src={imgLogo} alt={"logo"} layout={"fixed"} width={100} height={80} />
      </a>
    </Link>
    
  );
};
export default Logo;
