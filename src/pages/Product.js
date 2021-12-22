import { useMediaQuery } from "react-responsive";
import { useState } from "react";
// import YouTube from "react-youtube";
// var getYouTubeID = require("get-youtube-id");
import PageWrapper from "../components/PageWrapper";
import Slider3 from "../components/Slider/news-slider";
import News from "../components/Card/news";
import { Portal } from "@chakra-ui/portal";
const medee = [<News />, <News />, <News />, <News />, <News />, <News />];

const Example = () => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 767 });
    return isDesktop ? children : null;
  };
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return isTablet ? children : null;
  };
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 });
    return isNotMobile ? children : null;
  };
  const Portrait = ({ children }) => {
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
    return isPortrait ? children : null;
  };

  const detail = [
    {
      title: "Tooluurin zagvar",
      value: "LXLC",
    },
    {
      title: "Hemjih hamgiin baga zaalt",
      value: "0.00000002M",
    },
    {
      title: "Temperaturin angi",
      value: "50C",
    },
    {
      title: "Tooluurin zagvar",
      value: "LXLC",
    },
    {
      title: "Tooluurin zagvar",
      value: "LXLC",
    },
    {
      title: "Tooluurin zagvar",
      value: "LXLC",
    },
    {
      title: "Tooluurin zagvar",
      value: "LXLC",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1546455643-312811da2332?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=636&q=80",
    "https://images.unsplash.com/photo-1521985068534-cec90327c93b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    "https://images.unsplash.com/photo-1513323813850-c7318e3efc71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    "https://images.unsplash.com/photo-1612171709946-7fc1298a5a53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=626&q=80",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);
  return (
    <div>
      <Desktop>
        {" "}
        <>
          <div id="topMargin" className="mx-auto h-96 mb-40">
            <h1 className="text-sm text-blue-500 text-normal ml-2 mb-4">
              BUTEEGDEHUUN-USNII TOOLUUR-ENGIIIN TOOLUUR
            </h1>
            <div id="mainDiv" className=" gap-8 grid grid-cols-2">
              <div className="">
                <img className="w-full mb-2" id="mainImg" src={currentImage} alt="abc" />
                <div id="imgGrid" className="grid lg:grid-cols-4 md:grid-cols-3 gap-1">
                  {images.map((data) => {
                    return (
                      <img
                        className="lg:h-32 md:h-24"
                        onClick={() => setCurrentImage(data)}
                        id="smallImg"
                        src={data}
                        alt="abc"
                      />
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="w-5/6 mx-auto">
                  <h1 className="text-2xl mb-3">DN 50 huiten usnii tooluur</h1>
                  {detail.map((data) => {
                    return (
                      <p className="font-bold text-black text-base">
                        {data.title}:<span className="font-light">{"  " + data.value}</span>
                      </p>
                    );
                  })}
                </div>
                <iframe
                  className="w-full h-80"
                  src="https://www.youtube.com/embed/gWX88YvGDaM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="container ">
            <h1 className="product-title">БУСАД БҮТЭЭГДЭХҮҮН</h1>
            {/* <Flex> */}

            <Slider3 comps={medee} length={5} />
            {/* </Flex> */}
          </div>
          {/* CSS */}
          <style jsx>{`
            .zurag {
              max-width: 100%;
              -moz-transition: all 0.9s;
              -webkit-transition: all 0.9s;
              transition: all 0.9s;
            }
            .zurag:hover {
              -moz-transform: scale(1.3);
              -webkit-transform: scale(1.3);
              transform: scale(1.3);
            }
            .product-title {
              color: #4a77fa;
              font-size: 18px;
              margin-left: 40px;
              text-align: center;
            }
            #topMargin {
              margin-top: 115px;
              height: fit-content;
              width: 79%;
            }
            #mainDiv {
              grid-template-columns: 1fr 1fr;
            }
            #mainImg {
              height: 470px;
              object-fit: cover;
            }
            #smallImg {
              object-fit: cover;
            }
            #slider {
              margin-bottom: 5rem;
            }
          `}</style>
        </>
      </Desktop>
      <Portrait>
        <>
          <div className="flex flex-col w-full mt-20 border pt-2">
            <h1 className="text-sm text-blue-500 text-normal ml-2 mb-3">
              BUTEEGDEHUUN-USNII TOOLUUR-ENGIIIN TOOLUUR
            </h1>
            <img className="mb-1 border-4 border-gray-500" src={currentImage} alt="abc" />
            <div className="grid grid-cols-4 gap-1">
              {images.map((data) => {
                return (
                  <img
                    src={data}
                    alt="abc"
                    className="h-24"
                    onClick={() => setCurrentImage(data)}
                  />
                );
              })}
            </div>
          </div>
          <div className="mx-auto my-4 w-11/12">
            {detail.map((data) => {
              return (
                <p className="font-bold text-black text-base">
                  {data.title}:<span className="font-light">{"  " + data.value}</span>
                </p>
              );
            })}
          </div>
          <iframe
            className="w-full h-60 mb-10"
            src="https://www.youtube.com/embed/gWX88YvGDaM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </>
      </Portrait>
    </div>
  );
};

export default Example;
