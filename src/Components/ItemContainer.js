import styled from "styled-components";
import React from "react";
import ItemCard from "./ItemCard";

const ItemContainer = ({ itemData }) => {
  const items = itemData.map((item) => {
    return (
      <ItemCard
        key={item.id}
        id={item.id}
        name={item.name}
        amount={item.amount}
        category={item.category}
        user={item.user.name}
      />
    );
  });

  return (
    <>
      {items.length ? (
        <ItemContainerSection className="item-container">
          {items}
        </ItemContainerSection>
      ) : (
        <h2>Nothing Found!</h2>
      )}
    </>
  );
};

export default ItemContainer;

const ItemContainerSection = styled.section`
  width: 90vw;
  padding: 5vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-items: center;
  align-items: center;
  margin-bottom: 10vh;
`;
