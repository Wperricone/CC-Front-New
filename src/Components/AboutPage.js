import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

const AboutPage = () => {
  return (
    <Contents className="search-and-about-container">
      <BackgroundImgContainer>
      <About>
        <AboutH2>we are <H2Highlight>Crafters</H2Highlight></AboutH2>
        <AboutP>
          Craft Circle is an online community where crafters can borrow and
          donate supplies in an effort to make creative outlets more accessible.
          Currently, this platform is meant for community members who reside in
          the Denver Metro area.
        </AboutP>
      </About>
      <JoinCTAContainer>

      </JoinCTAContainer>
      </BackgroundImgContainer>
      <Footer>
        <FooterImg src={require("../assets/bannerImages/bannerImage4.jpg")} alt="water color palette" />
        <FooterLogo src={require("../assets/CraftCircleLogo-06.png")} alt="craft circle logo"/>
      </Footer>
    </Contents>
  );
};

export default AboutPage;

const AboutH2 = styled.h2`
  color: ${colors.craftGrey};
  font-size: 60px;
  margin-bottom: 20px;
  font-weight: 700;
`;
const AboutP = styled.p`
  color: ${colors.craftGrey};
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 60px;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
const H2Highlight = styled.span`
  color: ${colors.craftPurple};
  margin-left: 20px;
`

const Footer = styled.div`
  width: 100vw;
  height: 30vh;
`

const FooterLogo = styled.img`
  height: 150px;
`

const FooterImg = styled.img`
  width: 100%;
  height: auto;
`

const JoinCTAContainer = styled.div`
  height: 90vh
`
const BackgroundImgContainer = styled.div`
  height: 150vh;
  border: solid 1px green;
  background-image: url("../assets/bannerImages/backgroundImage1.jpg)
`