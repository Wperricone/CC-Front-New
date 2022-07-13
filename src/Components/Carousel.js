import React from "react";
import styled from "styled-components";

const Carousel = () => {
  return (
    <div>
      <LandingImage
        className="landing-page-img"
        src={require("../assets/bannerImage.png")}
        alt="crafts-in-action"
      />
    </div>
  );
};

export default Carousel;

const LandingImage = styled.img`
  width: 80vw;
  border-radius: 25px;
  box-shadow: 40px 40px rgba(239, 203, 199, 1);
  margin: 10px;
`;
