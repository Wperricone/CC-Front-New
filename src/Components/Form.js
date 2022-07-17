import React, { useState } from "react";
import styled from 'styled-components';
import colors from '../constants/colors';
import Button from './Button';

const Form = () => {
  const [itemName, setItemName] = useState("")
	const [amount, setItemAmount] = useState(0)
	const [description, setItemDescription] = useState("")
	const [category, setItemCategory] = useState("")
    return (
			<CraftFormSection>
				<AddImage/>
        <CraftForm className="add-item">
            <p>Thank you for contributing to the crafting community! Please fill out the following form:</p>
						<FormInputContainer>
							<Label>Name</Label>
            	<Input type="text" value={itemName} onChange={e => setItemName(e.target.value)}></Input>
						</FormInputContainer>
						<CategoryAmountContainer>
						<FormInputContainer>
							<Label>Amount</Label>
            	<Input type="text" value={amount} onChange={e => setItemAmount(e.target.value)}></Input>
						</FormInputContainer>
						<FormInputContainer>
						 <Label>Category</Label>
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
						 </FormInputContainer>   
						</CategoryAmountContainer>
						<FormInputContainer>
							<Label>Description</Label>
            	<InputDescription rows="5" cols="60" type="text" value={description} onChange={e => setItemDescription(e.target.value)}></InputDescription>
						</FormInputContainer>
						 <Button name={"Add Item"} link={"/confirmation"} />
        </CraftForm>
			</CraftFormSection>
    )
}

export default Form

const Label = styled.h3`
color: ${colors.craftGreen}
`

const CraftFormSection = styled.section`
width: 100vw;
display: flex;
justify-contents: center;
align-items: center;
align-self: center;
margin: 0;
`
const FormInputContainer = styled.div`

`
const CraftForm = styled.form`
margin-right: 7.5vw;
padding-left: 10%;
margin: 0;
`
const Input = styled.input`
border: 0;
border-radius: 25px;

`
const AddImage = styled.div`
height: 200px;
width: 200px;
border-radius: 25px;
background: ${colors.craftGreen};
margin-left: 7.5vw;
`
const InputDescription = styled.textarea`
border: 0;
border-radius: 25px;
`

const CategoryAmountContainer = styled.div`
display: flex;
justify-content: space-between;
width: 70%;
`


// potentially add a type to the form? would be useful if we choose to filter 
//need to , available will default to True, and user ID will be current use, id will be assigned, potentially a picture upload (post-mvp) 