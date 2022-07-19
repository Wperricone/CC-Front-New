import React, { useState } from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import Button from "./Button";

const Form = () => {
  const [itemName, setItemName] = useState("");
  const [amount, setItemAmount] = useState(0);
  const [description, setItemDescription] = useState("");
  const [category, setItemCategory] = useState("");

  return (
    <Section>
      <CraftFormSection>
        <AddImage>Upload your image here</AddImage>
        <CraftForm className="add-item">
          <Instructions>
            Thank you for contributing to the crafting community! Please fill
            out the information below to add your craft item:
          </Instructions>
          <FormInputContainer>
            <Label>Name</Label>
            <Input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            ></Input>
          </FormInputContainer>
          <CategoryAmountContainer>
            <FormInputContainer>
              <Label>Amount</Label>
              <Input
                type="text"
                value={amount}
                onChange={(e) => setItemAmount(e.target.value)}
              ></Input>
            </FormInputContainer>
            <FormInputContainerCategory>
              <Label>Category</Label>
              <Select
                className="dropdown-content"
                onChange={(e) => setItemCategory(e.target.value)}
              >
                <option value="Sewing/Knitting">Sewing/Knitting</option>
                <option value="Paper">Paper</option>
                <option value="Baking">Baking</option>
                <option value="Jewelry">Jewelry</option>
                <option value="Scrapbook/Floral">Scrapbook/Floral</option>
                <option value="Painting">Painting</option>
                <option value="Drawing">Drawing</option>
                <option value="Wood Working">Wood Working</option>
                <option value="Pottery">Pottery</option>
                <option value="Other">Other</option>
              </Select>
            </FormInputContainerCategory>
          </CategoryAmountContainer>
          <FormInputContainer>
            <Label>Description</Label>
            <InputDescription
              rows="5"
              cols="70"
              type="text"
              value={description}
              onChange={(e) => setItemDescription(e.target.value)}
            ></InputDescription>
          </FormInputContainer>
          <Button name={"Add Item"} link={""} />
        </CraftForm>
      </CraftFormSection>
    </Section>
  );
};

export default Form;

const Label = styled.h3`
  color: ${colors.craftGreen};
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CraftFormSection = styled.section`
  width: 85vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const FormInputContainer = styled.div``;

const CraftForm = styled.form`
  padding-left: 15%;
  margin: 0;
`;

const Input = styled.input`
  border: 0;
  border-radius: 25px;
  width: 200px;
`;

const AddImage = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 25px;
  background: ${colors.craftGreen};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputDescription = styled.textarea`
  border: 0;
  border-radius: 15px;
`;

const CategoryAmountContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 70%;
`;

const Select = styled.select`
  border: 0px;
  border-radius: 15px;
  width: 150px;
`;

const Instructions = styled.p`
  color: ${colors.craftBlack};
  font-weight: 700;
  width: 70%;
`;

const FormInputContainerCategory = styled.div`
  margin-left: 15%;
`;
