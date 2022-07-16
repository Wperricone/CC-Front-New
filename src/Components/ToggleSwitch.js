import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

const ToggleSwitch = ({ textOne, textTwo, color, action, currentlyActive }) => {
  const makeOneActive = () => {
    action(textOne);
  };

  const makeTwoActive = () => {
    action(textTwo);
  };

  return (
    <ToggleBackground>
      <Option
        onClick={() => makeOneActive()}
        style={{
          background: `${
            currentlyActive === textOne ? colors[color] : "transparent"
          }`,
        }}
      >
        <Text
          style={{
            color: `${
              currentlyActive === textOne ? colors.craftWhite : colors[color]
            }`,
          }}
        >
          {textOne}
        </Text>
      </Option>
      <Option
        onClick={() => makeTwoActive()}
        style={{
          background: `${
            currentlyActive === textTwo ? colors[color] : "transparent"
          }`,
        }}
      >
        <Text
          style={{
            color: `${
              currentlyActive === textTwo ? colors.craftWhite : colors[color]
            }`,
          }}
        >
          {textTwo}
        </Text>
      </Option>
    </ToggleBackground>
  );
};

export default ToggleSwitch;

const ToggleBackground = styled.div`
  height: 50px;
  width: 140px;
  border-radius: 10px;
  display: flex;
  background: ${colors.craftWhite};
  margin-bottom: 15px;
`;

const Option = styled.div`
  height: 50px;
  width: 70px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 700;
`;
