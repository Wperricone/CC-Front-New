import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import colors from "../constants/colors";
import Button from "./Button";

const AboutPage = () => {
  return (
    <Contents className="about-container">
      <AboutContainer>
        <ParallaxImage src={require("../assets/bannerImages/backgroundImage1.png")} alt="assortment of handmade pottery"/>
        <About>
          <AboutContents>
          <AboutH2 className="about-heading">
            we are <H2Highlight>Crafters</H2Highlight>
          </AboutH2>
          <AboutP className="about-paragraph">
            Craft Circle is an online community where crafters can borrow and
            donate supplies in an effort to make creative outlets more
            accessible. Currently, this platform is meant for community members
            who reside in the Denver Metro area.
          </AboutP>
          </AboutContents>
        </About>
        <JoinCTAContainer className="join-cta-container">
        
          <Lottie className="cta-animation" style={{height: "300px", margin: "40px"}} animationData={require("../assets/animations/clay-crafting.json")} loop={true}/>
          <CtaContainer>
            <CtaP className="cta-paragraph">
              Whether you're looking to share supplies or need to source
              something for your next creative project, Craft Cirle is the
              virtal marketplace for you. Click below to join our community of
              Crafters today and get crafting!
            </CtaP>
            <Button name="Get Started" link="/profile" />
          </CtaContainer>
        </JoinCTAContainer>
      </AboutContainer>
      <Footer className="footer">
        <FooterImg
          className="footer-image"
          src={require("../assets/bannerImages/bannerImage4.png")}
          alt="water color palette"
        />
        <FooterLogo
          className="footer-logo"
          src={require("../assets/CraftCircleLogo-06.png")}
          alt="craft circle logo"
        />
        <FooterH3 className="footer-tagline">crafting community one stitch at a time</FooterH3>
      </Footer>
    </Contents>
  );
};

export default AboutPage;

const About = styled.div`
  background: ${colors.craftWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 40%;
  transform-style: preserve-3d;
  z-index: 1;
  position: relative;
  margin-bottom: 33vh;
`;

const AboutContents = styled.div`
width: 40%
`

const AboutH2 = styled.h2`
  color: ${colors.craftGrey};
  font-size: 60px;
  margin-bottom: 15px;
  font-weight: 700;
`;

const H2Highlight = styled.span`
  color: ${colors.craftPurple};
  margin-left: 20px;
`;

const AboutP = styled.p`
  color: ${colors.craftGrey};
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 60px;
  width: 100%;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;

const JoinCTAContainer = styled.div`
  background: ${colors.craftWhite};
  position: relative;
  height: 50%;
  transform-style: preserve-3d;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const CtaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  margin: 20px;
`;

const CtaP = styled.p`
  color: ${colors.craftGrey};
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
`;

const AboutContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  perspective: 10px;
  margin-bottom: 20px;
`;

const ParallaxImage = styled.img`
  transform: translateZ(-10px) scale(2);
  height: 100%;
  position: absolute;
  width: 100%;
  object-fit: cover;
  z-index: -1;
`

const Footer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  margin-top: 10vh;
`;

const FooterLogo = styled.img`
  height: 250px;
  width: 250px;
  margin-top: 60px;
  margin-bottom: 30px;
`;

const FooterImg = styled.img`
  width: 100%;
  height: auto;
`;

const FooterH3 = styled.h3`
  color: ${colors.craftGrey};
  padding-bottom: 30px;
  font-weight: 500px;
  font-size: 20px;
`;
