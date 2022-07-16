import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

const CraftCategories = ({ changeCategory }) => {
  return (
    <>
      <SectionTitle>Categories:</SectionTitle>
      <CategorySection>
        <CategoryBox
          style={{ background: colors.craftOrange }}
          onClick={() => changeCategory("sewing/knitting")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-08.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>sewing/knitting</CategoryName>
        </CategoryBox>
        <CategoryBox
          style={{ background: colors.craftPurple }}
          onClick={() => changeCategory("paper")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-09.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>paper</CategoryName>
        </CategoryBox>
        <CategoryBox
          style={{ background: colors.craftBlue }}
          onClick={() => changeCategory("baking")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-10.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>baking</CategoryName>
        </CategoryBox>
        <CategoryBox
          style={{ background: colors.craftGreen }}
          onClick={() => changeCategory("jewelry")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-11.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>jewelry</CategoryName>
        </CategoryBox>
        <CategoryBox
          style={{ background: colors.craftPink }}
          onClick={() => changeCategory("scrapbook/floral")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-12.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>scrapbook/floral</CategoryName>
        </CategoryBox>
        <CategoryBox
          style={{ background: colors.craftGreen }}
          onClick={() => changeCategory("painting")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-13.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>painting</CategoryName>
        </CategoryBox>
        <CategoryBox
          style={{ background: colors.craftBlue }}
          onClick={() => changeCategory("drawing")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-14.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>drawing</CategoryName>
        </CategoryBox>
        <CategoryBox
          style={{ background: colors.craftPink }}
          onClick={() => changeCategory("wood working")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-15.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>wood working</CategoryName>
        </CategoryBox>
        <CategoryBox
          style={{ background: colors.craftOrange }}
          onClick={() => changeCategory("pottery")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-16.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>pottery</CategoryName>
        </CategoryBox>
        <CategoryBox
          style={{ background: colors.craftPurple }}
          onClick={() => changeCategory("other")}
        >
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
  color: ${colors.craftPurple};
  font-size: 35px;
  font-weight: 900;
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
    margin-right: 10%;
    margin-bottom: 10%;
    margin-top: 0;
    margin-left: 0;
    box-shadow: 12px 12px 0px ${colors.craftGrey};
`;

const CategoryIcon = styled.img`
  width: 80%;
  height: 80%;
`;

const CategoryName = styled.p`
  font-weight: 700;
  color: ${colors.craftWhite};
  margin: 0;
`;
