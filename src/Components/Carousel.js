import React, { useState } from "react";
import styled from "styled-components";

const Carousel = () => {
  const [currentImage, setImage] = useState("bannerImage.png");

  return (
    <div>
      <LandingImage
        className="landing-page-img"
        src={require(`../assets/${currentImage}`)}
        alt="crafts-in-action"
      />
      <IndicatorBar>
        <Indicator onClick={() => setImage("bannerImage.png")}></Indicator>
        <Indicator onClick={() => setImage("bannerImage.png")}></Indicator>
        <Indicator onClick={() => setImage("bannerImage.png")}></Indicator>
      </IndicatorBar>
    </div>
  );
};

export default Carousel;

const LandingImage = styled.img`
  width: 85vw;
  border-radius: 25px;
  box-shadow: 30px 30px rgba(239, 203, 199, 1);
  margin: 10px;
`;

const IndicatorBar = styled.div`
  margin-top: 3%;
  display: flex;
  justify-content: center;
`;

const Indicator = styled.div`
  width: 15px;
  height: 15px;
  margin: 2%;
  border-radius: 25px;
  background: #b7c1dc;
`;

// .active & {
//   background: #a7c891;
// }
