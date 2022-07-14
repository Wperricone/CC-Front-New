import styled from 'styled-components';
import React from "react";
import ItemCard from './ItemCard';
import colors from '../constants/colors';

const ItemContainer = ({ itemData }) => {

   const randomizeColor = () => {
      return Object.values(colors)[Math.floor(Math.random() * 5)]
   }
  
   const items = itemData.map(item => {
      return (
         <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            amount={item.amount}
            color={randomizeColor()}
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
gap: 60px;
justify-items: center;
align-items: center;
`;