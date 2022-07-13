import React from "react";
import styled from 'styled-components';

const ItemCard = ({ name, amount, id }) => {
    return (
        <ItemCardSection className="item-card">
           <ItemCardImg className="stock-img" src={require("../assets/myrlene-numa-SnITZTTeJVE-unsplash.jpg")} alt="craft-item" />
           <ItemBoxDiv>
                <ItemH4>{name}</ItemH4>
                <ItemP>Amount: {amount}</ItemP>
                <ItemP>Crafty Joe</ItemP>
           </ItemBoxDiv>
        </ItemCardSection>
    );
}

export default ItemCard;


const ItemCardImg = styled.img`
    width: 200px;
    max-height: 200px;
    border-radius: 25px;
`;

const ItemH4 = styled.h4`
    font-size: 20pt;
    margin: 0;
`;
const ItemP = styled.p`
    font-size: 16pt;
    margin-top: 10px;
    margin-bottom: 20px;
`;

const ItemBoxDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 30px;
`;

const ItemCardSection = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 25px;
    width: 470px;
    height: 220px;
    background: white;
    padding: 30px;
    color: #AD92C0;
    box-shadow: 20px 20px 0px #AD92C0;
`;

//DATA 
// id, userid, name, type, description, available, quantity, exchange_status

// user => id, name, email 