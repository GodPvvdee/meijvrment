import React from "react";

import image from "../../assets/image/webp/head.svg";
import TestCarousel from "../../components/Slider/TestSlider";
import { useMeasure } from "@reactivers/use-measure";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);

  const measure = useMeasure({
    ref,
    updateOnWindowResize: true,
  });
  return (
    <>
      <div className="w-full auto relative mb-40">
        <div id="bg" className="grid grid-cols-2">
          <div className="h-full relative">
            <div
              style={{
                width: "65%",
                maxWidth: "339px",
              }}
              className="h-40 absolute left-20 right-0 top-0 bottom-0 m-auto z-20"
            >
              <p
                style={{ lineHeight: "1.5", fontWeight: "500" }}
                className="lg:text-lg md:text-base sm:text-xs text-white"
              >
                RILAND БРЭНДИЙН ГАГНУУРЫН АППАРАТЫН МОНГОЛ ДАХЬ ЦОР ГАНЦ АЛБАН ЁСНЫ ДИСТЕРБЬЮТЕР
              </p>
            </div>
          </div>
          <TestCarousel height={`${Math.floor(JSON.stringify(measure.height))}px`} />
        </div>
        <img ref={ref} src={image} className="absolute left-0 top-0 z-10" />
      </div>
      <style jsx>{`
        #bg {
          grid-template-columns: 1fr 2.5fr;
        }

        .swiper {
          width: 100%;
          height: 100%;
        }

        .swiper-slide {
          background-position: center;
          background-size: contain;
        }

        .swiper-slide img {
          display: block;
          width: 200px;
        }

        .grid2 {
          max-width: 1000px;
        }

        #imgSlider {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
};

export default Hero;
