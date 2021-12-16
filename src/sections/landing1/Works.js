import React, { useState, useEffect } from "react";
import { Button, Flex, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";
import { Section, Box, ListNav } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { useMeasure } from "react-use";
import { designWorks1 } from "../../data";
import Card from "../../components/Card";
import Hudaldaa from "../../components/Card/hudaldaa";
import Companies from "../../components/Card/companies";
import News from "../../components/Card/news";
import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider/company-slider";
import Slider3 from "../../components/Slider/news-slider";
import SocialButton from "../../components/SocialButton/SocialButton";
import imgHeader from "../../assets/image/webp/head.svg";
import innerImg from "../../assets/image/png/huree2.png";
import LogoImg from "../../assets/image/jpg/logo.jpg";
import { Center } from "@chakra-ui/layout";
import Partner from "../../components/PartnersSlider/Partner";
import { backgroundSize, justifyItems, left } from "styled-system";
import { alignItems } from "styled-system";
import { ceil } from "lodash";
const company = [
  <Companies />,
  <Companies />,
  <Companies />,
  <Companies />,
  <Companies />,
  <Companies />,
];
const medee = [<News />, <News />, <News />];
const cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
const Works = ({ data }) => {
  console.log("Data ", data);
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
          <h1 className="product-title">БҮТЭЭГДЭХҮҮН</h1>
          {/* <Flex> */}

          <Slider comps={data} length={5} />
          {/* </Flex> */}
        </div>
      </div>
      <div className="sda flex flex-col  items-center justify-center">
        <img className="innerImg" src={innerImg} />
        <div className="our-background">
          <h2 className="our-h2">БИДНИЙ ТУХАЙ</h2>
          <p className="our-p">
            Манай компани нь Монгол Улс, БНХАУ-ын Шинжлэх ухаан, технологийн их, дээд сургуулиудыг
            дулаан, цахилгаан, электроникийн инженер, физикч мэргэжлээр төгссөн, хэмжил зүйн салбарт
            10-15 жил ажилласан, хэмжил зүйн чиглэлээр мэргэшсэн, чадварлаг багийг бүрдүүлэн ажиллаж
            байгаа бөгөөд хэмжих хэрэгслийн ашиглалт, суурилуулалт, засвартай холбоотой сургалт,
            зөвлөгөө өгөн ажиллаж байна.
          </p>

          <Center>
            <Button
              className="our-about-button"
              style={{
                borderRadius: ".70rem",
                alignContent: "center",
                alignItems: "center",
                top: "50px",
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
      <style jsx>{`
        .our-p {
          color: white;
        }
        .our-h2 {
          color: white;
          font-size: 20px;
        }
        .sda {
          position: relative;
        }
        .product-title {
          color: #4a77fa;
          font-size: 18px;
          margin-left: 40px;
        }
        .news-title {
          color: #4a77fa;
          font-size: 18px;
          margin-left: 40px;
          text-align: center;
        }
        .medee-container {
          display: flex;
          align-items: center;

          justify-content: center;
        }
        .our-background {
          position: absolute;
          background-color: #0d6af2;
          opacity: 0.7;
          text-align: center;
          height: 180px;
          border-radius: 50px;
          width: 80%;
        }
      `}</style>
      <h1 className="news-title">МЭДЭЭ МЭДЭЭЛЭЛ</h1>
      <Center>
        <div className="medee-container container ">
          {/* <News />
          <News />
          <News /> */}
          <Slider3 comps={medee} length={3} />
        </div>
      </Center>

      {/*end*/}
      <h1 className="news-title">ХУДАЛДАА ҮЙЛЧИЛГЭЭ</h1>
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
      <h1 className="news-title">ХАМТЫН АЖИЛЛАГАА </h1>
      <div className="container">
        <Slider2 comps={company} length={5} />
      </div>
      <SocialButton />
    </div>
  );
};
export default Works;
