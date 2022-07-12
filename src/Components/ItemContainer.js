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
         />
      )
   })

   return (
      <ItemContainerSection className="item-container">
         {items}
      </ItemContainerSection>
   )
}

export default ItemContainer

const ItemContainerSection = styled.section`
display: grid;
grid-template-columns: repeat(2, 1fr);
background: #F4ECDD;
gap: 20px;
`