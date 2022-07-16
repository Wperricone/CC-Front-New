import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemContainer from "./ItemContainer";
import Carousel from "./Carousel";
import CraftCategories from "./CraftCategories";
import Search from "./Search";

const LandingPage = ({ itemData }) => {

  const [category, setCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    setFilteredItems(itemData);
  },[]);

  useEffect(() => {
    category ? setFilteredItems(itemData.filter(item => item.category === category)) : setFilteredItems(itemData);
  },[category]);
  
  const changeCategory = (newCategory) => {
    newCategory === category ? setCategory("") : setCategory(newCategory);
  };

  return (
    <LandingPageSection className="landing-page">
      <Carousel />
      <CraftCategories changeCategory={changeCategory} />
      <p>{category}</p>
      <Search />
      <ItemContainer itemData={filteredItems} />
    </LandingPageSection>
  );
};

export default LandingPage;

const LandingPageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
