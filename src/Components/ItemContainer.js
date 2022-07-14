import styled from "styled-components";
import React from "react";
import ItemCard from "./ItemCard";
import colors from "../constants/colors";

const ItemContainer = ({ itemData }) => {
  const randomizeColor = () => {
    return Object.keys(colors)[Math.floor(Math.random() * 5)];
  };

  const items = itemData.map((item) => {
    return (
      <ItemCard
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        color={randomizeColor()}
      />
    );
  });

  return (
    <>
      <SectionInfo>
        <SectionTitle>Crafts:</SectionTitle>
        <SearchDiv>
          <SectionTitle>Search:</SectionTitle>
          <SearchInput></SearchInput>
        </SearchDiv>
      </SectionInfo>
      <ItemContainerSection className="item-container">
        {items}
      </ItemContainerSection>
    </>
  );
};

export default ItemContainer;

const ItemContainerSection = styled.section`
  width: 90vw;
  padding: 5vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
  justify-items: center;
  align-items: center;
  margin-bottom: 10vh;
`;

const SectionInfo = styled.div`
  width: 85vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
`;

const SectionTitle = styled.h1`
  color: ${colors.craftPurple};
  font-size: 35px;
  font-weight: 900;
  margin-bottom: 0;
  margin-top: 5vh;
  margin-right: 10%;
`;

const SearchInput = styled.input`
  height: 35px;
  width: 15vw;
  margin-top: 5vh;
  border-radius: 25px;
  border: 0;
`;
