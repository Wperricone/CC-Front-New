import React from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import colors from "../constants/colors";

const ErrorPage = () => {
  return (
    <ErrorPageContainer className="error-page">
      <ErrorMessage className="error-message">
        Oh no, something went wrong! Please try again....
      </ErrorMessage>
      <Lottie
        className="error-animation"
        style={{ height: "700px" }}
        animationData={require("../assets/animations/painting-girl.json")}
        loop={true}
      />
    </ErrorPageContainer>
  );
};

export default ErrorPage;

const ErrorPageContainer = styled.section`
  background-color: #f4cebd;
  height: 100vh;
  width: 100vw;
`;

const ErrorMessage = styled.h2`
  color: ${colors.craftPurple};
  font-size: 40px;
  padding-top: 60px;
`;
