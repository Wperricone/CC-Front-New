import React from "react";
import styled from "styled-components";

const CraftCategories = () => {
  return (
    <section>
      <CategoryBox style={{ background: "blue" }}></CategoryBox>
    </section>
  );
};

export default CraftCategories;

const CategoryBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 25px;
`;
