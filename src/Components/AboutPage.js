import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import Button from "./Button";

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
      <Gap></Gap>
      <JoinCTAContainer>
        <CtaImage src={require("../assets/bannerImages/ctaImage1.png")} alt="brightly-colored woven rounds"/>
        <CtaContainer>
          <CtaP>Whether you're looking to share supplies or need to source something for your next creative projecct, Craft Cirle is the virtal marketplace for you. Click below to join our community of Crafters today and get crafting!</CtaP>
          <Button name="Get started" link="" action="" />
        </CtaContainer>
      </JoinCTAContainer>
      </BackgroundImgContainer>
      <Footer>
        <FooterImg src={require("../assets/bannerImages/bannerImage4.png")} alt="water color palette" />
        <FooterLogo src={require("../assets/CraftCircleLogo-06.png")} alt="craft circle logo"/>
        <FooterH3>crafting community one stitch at a time</FooterH3>
      </Footer>
    </Contents>
  );
};

export default AboutPage;

const Gap = styled.div`
  height: 20vh;
`

const AboutH2 = styled.h2`
  color: ${colors.craftGrey};
  font-size: 60px;
  margin-bottom: 15px;
  font-weight: 700;
`;
const AboutP = styled.p`
  color: ${colors.craftGrey};
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 60px;
  width: 100%
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  height: 50vh;
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
const JoinCTAContainer = styled.div`
  margin-top: 50px;
  height: 50vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: space-between;
`

const CtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 20px;
`

const CtaImage = styled.img`
height: 300px;
width: auto;
margin-right: 50px;
`
const CtaP = styled.p`
  color: ${colors.craftGrey};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
`

const BackgroundImgContainer = styled.div`
  width: 100vw;
  height: 200vh;
  background-image: url("../assets/bannerImages/backgroundImage1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center
`
const Footer = styled.div`
  width: 100vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FooterLogo = styled.img`
  height: 250px;
  width: 250px;
  margin-top: 60px;
  margin-bottom: 30px;
`

const FooterImg = styled.img`
  width: 100%;
  height: auto;
`

const FooterH3 = styled.h3`
  color: ${colors.craftGrey};
  padding-bottom: 30px;
  font-weight: 500px;
  font-size: 20px;
`