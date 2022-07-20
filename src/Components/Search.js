import React, { useState } from "react";
import styled from "styled-components";
import colors from "../constants/colors";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    search(e.target.value);
  };

  return (
    <SectionInfo>
      <SectionTitle>Crafts:</SectionTitle>
      <SearchDiv>
        <SectionTitle>Search:</SectionTitle>
        <SearchInput
          type="text"
          value={searchInput}
          onChange={(e) => handleChange(e)}
        />
      </SearchDiv>
    </SectionInfo>
  );
};

export default Search;

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
  text-indent: 10px;
`;
