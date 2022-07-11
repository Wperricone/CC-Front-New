import React from "react";
import styled from 'styled-components';

const Form = () => {
    return (
        <form className="add-item">
            <p>Thank you for contributing to the crafting community! Please fill out the following form:</p>
            <input type="text" placeholder="item name"></input>
            <input type="text" placeholder="amount"></input>
            <input type="text" placeholder="description"></input>
            <button>add item</button>
        </form>
    )
}

export default Form

// potentially add a type to the form? would be useful if we choose to filter 