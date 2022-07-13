import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Button from "./Button";

import response from "../data/allItems.json";

const ItemExpanded = () => {

    const { craftId } = useParams()

    const [item, setItem] = useState({})

    useEffect(() => {
        const findItem = (id) => {
            return response.data.getItems.find(item => item.id === id)
        }

        setItem(findItem(craftId))
    },[])

    return (
        <ItemExpandedSection className="item-expanded">
            <ItemImgDiv>
                <ItemExpandedImg className="item-image-large" src={require("../assets/myrlene-numa-SnITZTTeJVE-unsplash.jpg")} alt=""/>
            </ItemImgDiv>
            <ItemExpandedDiv>
                <CategoryP>{item.category}</CategoryP>
                <TitleAmountDiv>
                    <H2>{item.name}</H2>
                    <AmountP>Amount: {item.amount}</AmountP>
                </TitleAmountDiv>
                <DescP>{item.description}</DescP>
                {/* <button className="contact-button"><a href="mailto:someone@example.com">Contact Crafter</a></button> */}
                <Button name="Contact Crafter" link="" />
            </ItemExpandedDiv>
        </ItemExpandedSection>
    )
}

export default ItemExpanded

const ItemExpandedImg = styled.img`
    width: 80%;
    max-height: 500px;
    border-radius: 25px;
    box-shadow: 20px 20px 0px #AD92C0;
`;

const H2 = styled.h2`
    color: #AD92C0;
`;

const DescP = styled.p`
    color: #A18E96;
    font-weight: bold;
    max-width: 80%;
`
const NameP = styled.p`
    color: #A18E96;
    font-weight: bold;
`

const CategoryP = styled.p`
    font-size: 16pt;
    margin-bottom: 0;
    color: #A18E96;
    font-weight: bold;
`

const AmountP = styled.p`
    font-size: 14pt;
    color: #A18E96;
    font-weight: bold;
    margin-left: 50px;
`

const ItemExpandedSection = styled.section`
    display: flex;
`;

const TitleAmountDiv = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
`;

const ItemExpandedDiv = styled.div`

    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

const ItemImgDiv = styled.div`

    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
