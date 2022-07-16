import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemContainer from "./ItemContainer";
import Carousel from "./Carousel";
import CraftCategories from "./CraftCategories";
import Search from "./Search";

const LandingPage = ({ itemData }) => {

  const [category, setCategory] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    setFilteredItems(itemData);
  },[]);

  useEffect(() => {
    category ? setFilteredItems(itemData.filter(item => item.category === category && compareName(item))) : setFilteredItems(itemData.filter(item => compareName(item)));
  },[category, searchFilter]);
  
  const compareName = (item) => {
    return item.name.toUpperCase().includes(searchFilter.toUpperCase());
  }

  const changeCategory = (newCategory) => {
    newCategory === category ? setCategory("") : setCategory(newCategory);
  }

  const search = (input) => {
    setSearchFilter(input);
  }

  return (
    <LandingPageSection className="landing-page">
      <Carousel />
      <CraftCategories changeCategory={changeCategory} />
      <p>{category}</p>
      <Search search={search} />
      <ItemContainer itemData={filteredItems} />
    </LandingPageSection>
  );
};

export default LandingPage;

const LandingPageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40vh;
`;
