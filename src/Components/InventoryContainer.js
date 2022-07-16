import styled from "styled-components";
import React from "react";
import InventoryCard from "./InventoryCard";

const InventoryContainer = ({ data, color }) => {
  const items = data.map((item) => {
    return (
      <InventoryCard
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        color={color}
      />
    );
  });

  return (
    <ItemContainerSection className="item-container">
      {items}
    </ItemContainerSection>
  );
};

export default InventoryContainer;

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
