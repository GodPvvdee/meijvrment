import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Works from "../sections/landing1/Works";
import Contact from "../sections/landing1/Contact";
import { getAllProduct } from "../../lib/api";

const IndexPage = ({data}) => {
  return (
    <>
      <PageWrapper>
        <Hero />
        <Element name="works">
          <Works data={data} />
        </Element>

        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;

export async function getStaticProps(context) {
  const data = await getAllProduct()
  return {
    props: {
      data
    }, 
  }
}