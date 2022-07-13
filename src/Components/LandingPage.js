import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemContainer from "./ItemContainer";

import response from "../data/allItems.json";

const LandingPage = () => {

  const [itemData, setItemData] = useState([]);
   
  useEffect(() => {
     setItemData(response.data.getItems);
  }, []);

  return (
    <LandingPageSection className="landing-page">
      <LandingImage
        className="landing-page-img"
        src={require("../assets/bannerImage.png")}
        alt="crafts-in-action"
      />
      <ItemContainer itemData={itemData} />
    </LandingPageSection>
  );
};

export default LandingPage;

const LandingImage = styled.img`
  width: 80vw;
  border-radius: 25px;
  box-shadow: 40px 40px rgba(239, 203, 199, 1);
  margin: 10px;
`;

const LandingPageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// I noticed the search bar has moved locations in the wireframe. Will add styling once it's location has been confirmed.
