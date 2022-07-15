import React from "react";
import styled from 'styled-components';

const Form = () => {
    return (
        <form className="add-item">
            <p>Thank you for contributing to the crafting community! Please fill out the following form:</p>
            <input type="text" placeholder="item name"></input>
            <input type="text" placeholder="amount"></input>
            <input type="text" placeholder="description"></input>
            <div className="dropdown">
             <select id="myDropdown" className="dropdown-content">
               <option value="#">Sewing/Knitting</option>
               <option value="#">Paper</option>
               <option value="#">Baking</option>
               <option value="#">Jewelry</option>
               <option value="#">Scrapbook/Floral</option>
               <option value="#">Painting</option>
               <option value="#">Drawing</option>
               <option value="#">Wood Working</option>
               <option value="#">Pottery</option>
               <option value="#">Other</option>
             </select>
            </div>            
            <button>Add Item</button>
        </form>
    )
}

export default Form

// potentially add a type to the form? would be useful if we choose to filter 
//need to , available will default to True, and user ID will be current use, id will be assigned, potentially a picture upload (post-mvp) 