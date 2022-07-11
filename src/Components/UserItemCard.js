import React from "react";
import styled from 'styled-components';

const UserItemCard = () => {
    return (
        <section className="item-card">
           <img className="stock-img" src="" alt="craft-item" />
           <button>x</button>
           <p>Craft Name</p>
           <p>name</p>
           <p>amount</p>
        </section>
    )
}

export default UserItemCard

// might include different
// these are the item cards that the user can delete to remove from their inventory 