import React from "react";
import styled from "styled-components";

const Button = ({ name }) => {
  return <StyledButton>{name}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  font-size: 18px;
  font-weight: 700;
  padding-left: 10px;
  padding-right: 10px;
  border: 0px;
  border-radius: 25px;
  height: 40px;
  margin: 2%;
  background: white;
  color: #a7c891;
  box-shadow: 5px 5px 0px #a7c891;
  &: hover {
    cursor: pointer;
    background: #a7c891;
    color: white;
    box-shadow: 5px 5px 0px white;
  }
  &: click {
    box-shadow: 0px;
  }
`;
