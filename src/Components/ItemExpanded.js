import React from "react";
import styled from 'styled-components';


const ItemExpanded = () => {
    return (
        <ItemExpandedSection className="item-expanded">
            <ItemImgDiv>
                <ItemExpandedImg className="item-image-large" src={require("../assets/myrlene-numa-SnITZTTeJVE-unsplash.jpg")} alt=""/>
            </ItemImgDiv>
            <ItemExpandedDiv>
                <P>Art Supplies</P>
                <TitleAmountDiv>
                    <H2>Name of a Craft Here</H2>
                    <P>Amount: 5?</P>
                </TitleAmountDiv>
                <P>Some description about the item that is probably pretty large I would imagine. What really can be considered 'long' though, you know? Anyways, here's some filler.   </P>
                <P>Crafty Joe</P>
                <button className="contact-button"><a href="mailto:someone@example.com">Contact Crafter</a></button>
            </ItemExpandedDiv>
        </ItemExpandedSection>
    )
}

export default ItemExpanded

const ItemExpandedImg = styled.img`
    width: 200px;
    max-height: 200px;
    border-radius: 25px;
`;

const H2 = styled.h2`
    color: #AD92C0;
`;

const P = styled.p`
    color: #AD92C0;
`

const ItemExpandedSection = styled.section`
    display: flex;
`;

const TitleAmountDiv = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ItemExpandedDiv = styled.div`
    border: solid black 2px;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

const ItemImgDiv = styled.div`
    border: solid black 2px;
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
