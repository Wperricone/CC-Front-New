import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Button from "./Button";
import colors from "../constants/colors";

const ItemExpanded = ({ findItem }) => {

    const { craftId } = useParams()

    const [item, setItem] = useState({})

    useEffect(() => {
        setItem(findItem(craftId))
    },[item])

    return (
        <ItemExpandedSection className="item-expanded">
            {item ? <>
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
                    <Button name="Contact Crafter" link="" action={(e) => {window.location.href = 'mailto:crafter@gmail.com';
                                                                    e.preventDefault()}}/>
                </ItemExpandedDiv>
            </>
            : <h1>Loading...</h1>}
        </ItemExpandedSection>
    )
}

export default ItemExpanded

const ItemExpandedImg = styled.img`
    width: 80%;
    max-height: 500px;
    border-radius: 25px;
    box-shadow: 20px 20px 0px ${colors.craftPurple};
`;

const H2 = styled.h2`
    color: ${colors.craftPurple};
`;

const DescP = styled.p`
    color: ${colors.craftGrey};
    font-weight: bold;
    max-width: 80%;
`
const NameP = styled.p`
    color: ${colors.craftGrey};
    font-weight: bold;
`

const CategoryP = styled.p`
    font-size: 16pt;
    margin-bottom: 0;
    color: ${colors.craftGrey};
    font-weight: bold;
`

const AmountP = styled.p`
    font-size: 14pt;
    color: ${colors.craftGrey};
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

