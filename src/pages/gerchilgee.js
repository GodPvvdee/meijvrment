import React from "react";
import Zurag from "../assets/image/png/gerchilgee.jpg";
import PageWrapper from "../components/PageWrapper";
import Swiper from "../components/Swiper/index";
const IndexPage = () => {
  return (
    <>
      <PageWrapper >
      <img className="zurag" src={Zurag} />  
      <h1 className="news-title ">ТУСГАЙ ЗӨВШӨӨРӨЛ,ГЭРЧИЛГЭЭ</h1>
      
        <div className=""></div>
         {/* <Swiper/> */}
      </PageWrapper>
      <style jsx>{`
      hr.new5{
        border: 4px solid blue;
        border-radius: 2px;
      }
      .zurag{
          width:100%;
      }
      .news-title{
        color:black;
        font-size: 20px;
        margin-left:40px;
        text-align:center;
      }
        .news-p{
            color:#585858;
            font-family:Roboto;
            font-size:18px;
            
        }
        
        
      `}</style>
    </>
    
  );
};
export default IndexPage;
