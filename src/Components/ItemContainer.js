import styled from 'styled-components';
import React from "react";
import ItemCard from './ItemCard';

import response from "../data/allItems.json"

const ItemContainer = () => {

   const itemData = response.data.getItems;
   const items = itemData.map(item => {
      return (
         <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
         />
      );
   });

   return (
      <ItemContainerSection className="item-container">
         {items}
      </ItemContainerSection>
   );
}

export default ItemContainer;

const ItemContainerSection = styled.section`
padding: 60px;
display: grid;
grid-template-columns: repeat(2, 1fr);
background: #F4ECDD;
gap: 60px;
justify-items: center;
align-items: center;
`;