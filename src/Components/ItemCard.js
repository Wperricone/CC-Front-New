import { isNonEmptyArray } from "@apollo/client/utilities";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../constants/colors";

const ItemCard = ({ name, amount, id, color, category }) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/craft/${id}`}>
      <ItemCardSection className={`${category.replace("/", "-")} item-card`}>
        <ItemCardImg
          className="stock-img"
          src={require("../assets/myrlene-numa-SnITZTTeJVE-unsplash.jpg")}
          alt="craft-item"
        />
        <ItemBoxDiv>
          <ItemH4>{name}</ItemH4>
          <ItemP>Amount: {amount}</ItemP>
          <ItemP>Crafty Joe</ItemP>
        </ItemBoxDiv>
      </ItemCardSection>
    </Link>
  );
};

export default ItemCard;

const ItemCardImg = styled.img`
  width: 200px;
  max-height: 200px;
  border-radius: 25px;
`;

const ItemH4 = styled.h4`
  font-size: 20pt;
  margin: 0;
`;
const ItemP = styled.p`
  font-size: 16pt;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ItemBoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 30px;
`;

const ItemCardSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 25px;
  width: 470px;
  height: 220px;
  margin: 20px;
  background: white;
  padding: 30px;
  &.Sewing-Knitting {
    color: ${colors.craftOrange};
    box-shadow: 20px 20px 0px ${colors.craftOrange};
  }
  &.Paper {
    color: ${colors.craftPurple};
    box-shadow: 20px 20px 0px ${colors.craftPurple};
  }
  &.Baking {
    color: ${colors.craftBlue};
    box-shadow: 20px 20px 0px ${colors.craftBlue};
  }
  &.Jewelry {
    color: ${colors.craftGreen};
    box-shadow: 20px 20px 0px ${colors.craftGreen};
  }
  &.Scrapbook-Floral {
    color: ${colors.craftPink};
    box-shadow: 20px 20px 0px ${colors.craftPink};
  }
  &.Painting {
    color: ${colors.craftGreen};
    box-shadow: 20px 20px 0px ${colors.craftGreen};
  }
  &.Drawing {
    color: ${colors.craftBlue};
    box-shadow: 20px 20px 0px ${colors.craftBlue};
  }
  &.Wood {
    color: ${colors.craftPink};
    box-shadow: 20px 20px 0px ${colors.craftPink};
  }
  &.Pottery {
    color: ${colors.craftOrange};
    box-shadow: 20px 20px 0px ${colors.craftOrange};
  }
  &.Other {
    color: ${colors.craftPurple};
    box-shadow: 20px 20px 0px ${colors.craftPurple};
  }
  &:hover {
    cursor: pointer;
    color: ${colors.craftGrey};
    box-shadow: 20px 20px 0px ${colors.craftGrey};
  }
  &:active {
    margin-top: 40px;
    margin-left: 40px;
    margin-bottom: 0px;
    margin-right: 0px;
    box-shadow: 0px 0px 0px;
    color: ${colors.craftWhite};
    background: ${colors.craftGrey};
  }
`;
//DATA
// id, userid, name, type, description, available, quantity, exchange_status

// user => id, name, email
