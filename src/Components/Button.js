import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = ({ name, link, action }) => {
  return (
    <BtnContainer>
      <Link to={link}>
        <StyledButton onClick={action}>{name}</StyledButton>
      </Link>
    </BtnContainer>
  );
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
  background: white;
  color: #a7c891;
  box-shadow: 5px 5px 0px #a7c891;
  &: hover {
    cursor: pointer;
    color: #e3976e;
    box-shadow: 5px 5px 0px #e3976e;
  }
  &: active {
    margin-top: 5px;
    margin-left: 5px;
    box-shadow: 0px 0px 0px;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8vh;
`;
