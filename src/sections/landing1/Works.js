import React, { useState, useEffect } from "react";
import { Button,Flex,SimpleGrid,useColorModeValue } from "@chakra-ui/react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";
import { Section, Box, ListNav } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { designWorks1 } from "../../data";
import Card from "../../components/Card";
import Hudaldaa from "../../components/Card/hudaldaa";
import Companies from "../../components/Card/companies";
import News from "../../components/Card/news";
import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider/company-slider";
import imgHeader from "../../assets/image/webp/head.svg";
import innerImg from "../../assets/image/png/huree2.png";
import LogoImg from "../../assets/image/jpg/logo.jpg";
import { Center } from "@chakra-ui/layout";
import Partner from "../../components/PartnersSlider/Partner";
import { justifyItems, left } from "styled-system";
import { alignItems } from "styled-system";
import { ceil } from "lodash";
const company = [<Companies/>,<Companies/>,<Companies/>,<Companies/>,<Companies/>,<Companies/>,]
const cards = [
  <Card />,
  <Card />,
  <Card />,
  <Card />,
  <Card />,
  <Card />,
  <Card />,
  <Card />,
];
// const logos = [LogoImg, LogoImg, LogoImg, LogoImg, LogoImg, LogoImg];
const Works = ({data}) => {
  console.log("Data ", data)
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  useEffect(() => {
    setItems(designWorks1);
  }, []);

  const filterBy = (cat) => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(designWorks1);
    } else {
      const filteredItems = designWorks1.filter((item) => {
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <div style={{ backgroundColor: "#e6e6e6" }}>
      {/* <!-- Works Area --> */}
      <div
        style={{
          maxWidth: "1920px",
          justifyContent: "evenly",

        }}
      >
        <div className="container ">
          <h1 className="product-title">Бүтээгдэхүүн</h1>
         {/* <Flex> */}
         
          <Slider  comps={data} length={5} />
          {/* </Flex> */}
                 </div>
      </div>
      <div className="sda flex flex-col items-center justify-center">
        <img className="innerImg"  src={innerImg} />
        <div className="our-background">
          <h2 className="our-h2">БИДНИЙ ТУХАЙ</h2>
          <p className="our-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
       <Center>
        <Button className="our-about-button"
          style={{
            borderRadius: ".70rem",
            alignContent: "center",
            alignItems: "center",
            transition: "200ms",
          }}
          w={"full"}
          mt={10}
          px="36"
          mx="4"
          bg={useColorModeValue("#376bc4", "gray.900")}
          color={"white"}
          _hover={{
            transform: "translateY(-2px)",
           
          }}
        >
          дэлгэрэнгүй
        </Button>
        </Center>
        </div>
      </div>
      <h1 className="news-title">Мэдээ мэдээлэл</h1>
      <Center>
        <div className="medee-container container ">
          <News />
          <News />
          <News />
        </div>
      </Center>
       
      {/*end*/}
      <h1 className="news-title">Худалдаа үйлчилгээ</h1>
      <div className="container ">
        <div className="row  flex">
          <div className="col-sm-12 col-md-10">
              <Center>
        <div className="hudaldaa flex">
          <div className="col-sm-12 col-md-3">
          <Hudaldaa />
          </div>
          <div className="col-sm-12 col-md-3">
          <Hudaldaa />
          </div>
          <div className="col-sm-12 col-md-3">
          <Hudaldaa />
          </div>
          <div className="col-sm-12 col-md-3">
          <Hudaldaa />
          </div>
        </div>
      </Center>
            </div>
            <div className="col-sm-12 col-md-2">
            <iframe
            width="450"
            height="300"
            src="https://www.youtube.com/embed/gWX88YvGDaM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
            </div>
          </div>
        </div>
        <h1 className="news-title">Хамтын ажиллагаа</h1>
        <div className="container">
          <Slider2 comps={company} length={5} />
        </div>
    </div>
  );
};
export default Works;
