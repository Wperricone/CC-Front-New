import React from "react";
import styled from "styled-components";
import ItemContainer from "./ItemContainer";
import Carousel from "./Carousel";
import CraftCategories from "./CraftCategories";
import Search from "./Search";

const LandingPage = ({ itemData }) => {

  return (
    <LandingPageSection className="landing-page">
      <Carousel />
      <CraftCategories />
      <Search />
      <ItemContainer itemData={itemData} />
    </LandingPageSection>
  );
};

export default LandingPage;

const LandingPageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
