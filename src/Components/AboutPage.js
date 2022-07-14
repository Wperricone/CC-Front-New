import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

const AboutPage = () => {
  return (
    <Contents className="search-and-about-container">
      <About>
        <AboutH2>About</AboutH2>
        <AboutP>
          Craft Circle is an online community where crafters can borrow and
          donate supplies in an effort to make creative outlets more accessible.
          Currently, this platform is meant for community members who reside in
          the Denver Metro area.
        </AboutP>
      </About>
    </Contents>
  );
};

export default AboutPage;

const AboutH2 = styled.h2`
  color: ${colors.craftPurple};
  font-size: 30px;
`;
const AboutP = styled.p`
  color: ${colors.craftPurple};
  font-sizr: 15px;
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  width: 80vw;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
