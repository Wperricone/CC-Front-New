import React from "react";
import styled from "styled-components";

const CraftCategories = () => {
  return (
    <>
      <SectionTitle>Categories:</SectionTitle>
      <CategorySection>
        <CategoryBox style={{ background: "blue" }}>
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-08.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>sewing/knitting</CategoryName>
        </CategoryBox>
        <CategoryBox style={{ background: "blue" }}>
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-09.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>paper</CategoryName>
        </CategoryBox>
        <CategoryBox style={{ background: "blue" }}>
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-10.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>baking</CategoryName>
        </CategoryBox>
        <CategoryBox style={{ background: "blue" }}>
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-11.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>jewelry</CategoryName>
        </CategoryBox>
        <CategoryBox style={{ background: "blue" }}>
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-12.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>scrapbook/floral</CategoryName>
        </CategoryBox>
        <CategoryBox style={{ background: "blue" }}>
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-13.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>painting</CategoryName>
        </CategoryBox>
        <CategoryBox style={{ background: "blue" }}>
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-14.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>drawing</CategoryName>
        </CategoryBox>
        <CategoryBox style={{ background: "blue" }}>
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-15.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>wood working</CategoryName>
        </CategoryBox>
        <CategoryBox style={{ background: "blue" }}>
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-16.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>pottery</CategoryName>
        </CategoryBox>
        <CategoryBox style={{ background: "blue" }}>
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-17.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>other</CategoryName>
        </CategoryBox>
      </CategorySection>
    </>
  );
};

export default CraftCategories;

const SectionTitle = styled.h1`
  align-self: start;
  color: purple;
  font-size: 35px;
  font-weight: 700;
  margin-left: 7.5vw;
`;

const CategorySection = styled.section`
  margin-top: 5vh;
  width: 90vw;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const CategoryBox = styled.div`
  align-self: center;
  width: 190px;
  height: 190px;
  margin: 5%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &: hover {
    cursor: pointer;
    color: #e3976e;
    box-shadow: 5px 5px 0px #e3976e;
`;

const CategoryIcon = styled.img`
  width: 80%;
  height: 80%;
`;

const CategoryName = styled.p`
  font-weight: 700;
  color: white;
  margin: 0;
`;
