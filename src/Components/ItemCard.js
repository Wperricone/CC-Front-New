import React from "react";
import styled from 'styled-components';

const ItemCard = () => {
    return (
        <section className="item-card">
           <img className="stock-img" src="" alt="craft-item" />
           <p>Craft Name</p>
           <p>name</p>
           <p>amount</p>
        </section>
    )
}

export default ItemCard


//DATA 
// id, userid, name, type, description, available, quantity, exchange_status

// user => id, name, email 