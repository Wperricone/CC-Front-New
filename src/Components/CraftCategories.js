import React from "react";
import styled from "styled-components";

const CraftCategories = () => {
  return (
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
  );
};

export default CraftCategories;

const CategorySection = styled.section``;

const CategoryBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align items: column;
`;

const CategoryIcon = styled.img`
  width: 180px;
  height: 180px;
`;

const CategoryName = styled.p`
  font-weight: 700;
  color: white;
`;
