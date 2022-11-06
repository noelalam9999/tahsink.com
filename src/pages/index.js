import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/Home/Hero";
import Brands from "../sections/Home/Brands";
import Categories from "../sections/landing2/Categories";
import Content1 from "../sections/landing2/Content1";
import FeaturedJobs from "../sections/landing1/FeaturedJobs";
import Content2 from "../sections/landing2/Content2";

import 'firebase/firestore';
const IndexPage = () => {
  return (
    <>
      <PageWrapper
        headerConfig={{
          bgClass: "dynamic-sticky-bg",
        }}
      >
        
        <Categories />
      
      </PageWrapper>
    </>
  );
};
export default IndexPage;
