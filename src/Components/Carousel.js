import React, { useState } from "react";
import styled from "styled-components";

const Carousel = () => {
  const [currentImage, setImage] = useState("bannerImage1.png");

  return (
    <div>
      <LandingImage
        className="landing-page-img"
        src={require(`../assets/bannerImages/${currentImage}`)}
        alt="crafts-in-action"
      />
      <IndicatorBar>
        <Indicator
          active={currentImage === "bannerImage1.png"}
          onClick={() => setImage("bannerImage1.png")}
        ></Indicator>
        <Indicator
          active={currentImage === "bannerImage2.png"}
          onClick={() => setImage("bannerImage2.png")}
        ></Indicator>
        <Indicator
          active={currentImage === "bannerImage3.png"}
          onClick={() => setImage("bannerImage3.png")}
        ></Indicator>
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
  cursor: pointer;
  ${({ active }) => active && `background: #ad92c0;`}
`;
