import React from "react";
import styled from "styled-components";
import colors from "../constants/colors";

const CraftCategories = ({ category, changeCategory }) => {
  return (
    <>
      <SectionTitle>Categories:</SectionTitle>
      <CategorySection className="category-section">
        <CategoryBox
          className={category === "Sewing/Knitting" ? "selected" : ""}
          style={{ background: colors.craftOrange }}
          onClick={() => changeCategory("Sewing/Knitting")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-08.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>sewing/knitting</CategoryName>
        </CategoryBox>
        <CategoryBox
          className={category === "Paper" ? "selected" : ""}
          style={{ background: colors.craftPurple }}
          onClick={() => changeCategory("Paper")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-09.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>paper</CategoryName>
        </CategoryBox>
        <CategoryBox
          className={category === "Baking" ? "selected" : ""}
          style={{ background: colors.craftBlue }}
          onClick={() => changeCategory("Baking")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-10.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>baking</CategoryName>
        </CategoryBox>
        <CategoryBox
          className={category === "Jewelry" ? "selected" : ""}
          style={{ background: colors.craftGreen }}
          onClick={() => changeCategory("Jewelry")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-11.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>jewelry</CategoryName>
        </CategoryBox>
        <CategoryBox
          className={category === "Scrapbook/Floral" ? "selected" : ""}
          style={{ background: colors.craftPink }}
          onClick={() => changeCategory("Scrapbook/Floral")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-12.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>scrapbook/floral</CategoryName>
        </CategoryBox>
        <CategoryBox
          className={category === "Painting" ? "selected" : ""}
          style={{ background: colors.craftGreen }}
          onClick={() => changeCategory("Painting")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-13.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>painting</CategoryName>
        </CategoryBox>
        <CategoryBox
          className={category === "Drawing" ? "selected" : ""}
          style={{ background: colors.craftBlue }}
          onClick={() => changeCategory("Drawing")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-14.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>drawing</CategoryName>
        </CategoryBox>
        <CategoryBox
          className={category === "Wood Working" ? "selected" : ""}
          style={{ background: colors.craftPink }}
          onClick={() => changeCategory("Wood Working")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-15.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>wood working</CategoryName>
        </CategoryBox>
        <CategoryBox
          className={category === "Pottery" ? "selected" : ""}
          style={{ background: colors.craftOrange }}
          onClick={() => changeCategory("Pottery")}
        >
          <CategoryIcon
            src={require(`../assets/categoryIcons/CraftCircleIcon-16.png`)}
            alt="crafts-in-action"
          />
          <CategoryName>pottery</CategoryName>
        </CategoryBox>
        <CategoryBox
          className={category === "Other" ? "selected" : ""}
          style={{ background: colors.craftPurple }}
          onClick={() => changeCategory("Other")}
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
  }
  &.selected {
    margin-right: 10%;
    margin-bottom: 10%;
    margin-top: 0;
    margin-left: 0;
    box-shadow: 12px 12px 0px ${colors.craftBlack};
  }
  &:active {
    margin: 5%; 
    box-shadow: none;
  }
`;

const CategoryIcon = styled.img`
  width: 80%;
  height: 80%;
`;

const CategoryName = styled.p`
  font-weight: 700;
  color: ${colors.craftWhite};
  margin: 0;
  .selected & {
    color: ${colors.craftBlack};
  }
`;
