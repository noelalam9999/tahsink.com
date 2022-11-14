import React from "react";
import PageWrapper from "../components/PageWrapper";
import Categories from "../sections/landing2/Categories";


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
