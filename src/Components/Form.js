import React, { useState } from "react";
import styled from 'styled-components';

const Form = () => {
  const [itemName, setItemName] = useState("")
	const [amount, setItemAmount] = useState(0)
	const [description, setItemDescription] = useState("")
	const [category, setItemCategory] = useState("")
    return (
        <form className="add-item">
            <p>Thank you for contributing to the crafting community! Please fill out the following form:</p>
            <input type="text" placeholder="item name" value={itemName} onChange={e => {
							setItemName(e.target.value)
							console.log("Hello World")
							}}></input>
            <input type="text" placeholder="amount" value={amount} onChange={e => setItemAmount(e.target.value)}></input>
            <input type="text" placeholder="description" value={description} onChange={e => setItemDescription(e.target.value)}></input>
            <div className="categoryDropdown">
             <select className="dropdown-content" onChange={e => setItemCategory(e.target.value)}>
							<option value="Category">Category</option>
               <option value="Sewing/Knitting"  >Sewing/Knitting</option>
               <option value="Paper">Paper</option>
               <option value="Baking">Baking</option>
               <option value="Jewelry">Jewelry</option>
               <option value="Scrapbook/Floral">Scrapbook/Floral</option>
               <option value="Painting">Painting</option>
               <option value="Drawing">Drawing</option>
               <option value="Wood Working">Wood Working</option>
               <option value="Pottery">Pottery</option>
               <option value="Other">Other</option>
             </select>
            </div>            
            <button>Add Item</button>
        </form>
    )
}

export default Form

// potentially add a type to the form? would be useful if we choose to filter 
//need to , available will default to True, and user ID will be current use, id will be assigned, potentially a picture upload (post-mvp) 