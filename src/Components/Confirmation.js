import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import Button from "./Button";

const Confirmation = () => {
  return (
    <ConfirmationSection>
      <ConfirmationImg src={require("../assets/confirmation-image.jpg")} />
      <InfoBox>
        <SuccessH1>SUCCESS!</SuccessH1>
        <SuccessH2>Thanks for sharing with the crafting community!</SuccessH2>
        <Button name="Home" link="/" />
      </InfoBox>
    </ConfirmationSection>
  );
};

export default Confirmation;

const ConfirmationSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 50%;
`;

const ConfirmationImg = styled.img`
  width: 100vw;
  position: absolute;
  top: 0;
`;

const SuccessH1 = styled.h1`
  font-size: 45pt;
  margin: 5px;
  color: ${colors.craftBlack};
`;
const SuccessH2 = styled.h2`
  font-size: 20pt;
  margin-top: 5px;
  margin-bottom: 40px;
  color: ${colors.craftBlack};
`;
