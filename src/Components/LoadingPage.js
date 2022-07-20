import React from "react";
import Lottie from "lottie-react";
import styled from "styled-components";
import colors from "../constants/colors";

const LoadingPage = () => {
  return (
    <LoadingPageContainer className="loading-page">
      <LoadingMessage className="loading-message">
        Please wait, our application is loading ....
      </LoadingMessage>
      <Lottie
        className="loading-animation"
        style={{ height: "800px" }}
        animationData={require("../assets/animations/drawing.json")}
        loop={true}
      />
    </LoadingPageContainer>
  );
};

export default LoadingPage;

const LoadingMessage = styled.h2`
  color: ${colors.craftPurple};
  font-size: 40px;
  padding: 40px;
  padding-top: 60px;
`;

const LoadingPageContainer = styled.section`
  background-color: #f4cebd;
  height: 100vh;
  width: 100vw;
`;
