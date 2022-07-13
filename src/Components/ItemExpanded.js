import React from "react";
import styled from 'styled-components';


const ItemExpanded = () => {
    return (
        <ItemExpandedSection className="item-expanded">
            <ItemImgDiv>
                <ItemExpandedImg className="item-image-large" src={require("../assets/myrlene-numa-SnITZTTeJVE-unsplash.jpg")} alt=""/>
            </ItemImgDiv>
            <ItemExpandedDiv>
                <CategoryP>Art Supplies</CategoryP>
                <TitleAmountDiv>
                    <H2>Name of a Craft Here</H2>
                    <AmountP>Amount: 500</AmountP>
                </TitleAmountDiv>
                <DescP>Some description about the item that is probably pretty large I would imagine. What really can be considered 'long' though, you know? Anyways, here's some filler. Some say it never ends, but it certainly does. Infact, I think it ends riiight about here.</DescP>
                <NameP>Crafty Joe</NameP>
                <button className="contact-button"><a href="mailto:someone@example.com">Contact Crafter</a></button>
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
    margin: 0;
    color: #A18E96;
    font-weight: bold;
`

const AmountP = styled.p`
    font-size: 14pt;
    color: #A18E96;
    font-weight: bold;
    margin-left: 20px;
`

const ItemExpandedSection = styled.section`
    display: flex;
`;

const TitleAmountDiv = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
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
