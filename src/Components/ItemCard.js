import React from "react";
import styled from 'styled-components';

const ItemCard = () => {
    return (
        <ItemCardSection className="item-card">
           <ItemCardImg className="stock-img" src={require("../assets/myrlene-numa-SnITZTTeJVE-unsplash.jpg")} alt="craft-item" />
           <p>Craft Name</p>
           <p>name</p>
           <p>amount</p>
        </ItemCardSection>
    )
}

export default ItemCard


const ItemCardImg = styled.img`
    max-width: 5vw;
`;

const ItemCardSection = styled.section`
    border: solid black 2px;
    border-radius: 20px;
    width: 400px;
    background: white;
    padding: 20px;
`;

//DATA 
// id, userid, name, type, description, available, quantity, exchange_status

// user => id, name, email 