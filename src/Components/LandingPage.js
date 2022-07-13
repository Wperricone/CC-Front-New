import React from "react";
import styled from "styled-components";
import ItemContainer from "./ItemContainer";
import Carousel from "./Carousel";

const LandingPage = () => {
  return (
    <LandingPageSection className="landing-page">
      <Carousel />
      <ItemContainer />
    </LandingPageSection>
  );
};

export default LandingPage;

const LandingPageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// I noticed the search bar has moved locations in the wireframe. Will add styling once it's location has been confirmed.
