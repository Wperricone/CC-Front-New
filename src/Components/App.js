import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import "./NavBar";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";
import UserProfile from "./UserProfile";
import Form from "./Form";
import ItemExpanded from "./ItemExpanded";
import Login from "./Login";
import NoMatch from "./NoMatch";

const GET_ITEMS = gql`
  query getItems {
   items: getItems {
    id
    name
    description
    category
    status
    available
    amount
    userId
   }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_ITEMS); 

  const findItem = (id) => {  
    return data.items.find(item => item.id === id)
  }
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <main> 
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage itemData={data.items} />} />
        <Route exact path="about" element={<AboutPage />} />
        <Route exact path="profile" element={<UserProfile />} />
        <Route exact path="contribution" element={<Form />} />
        <Route exact path="craft/:craftId" element={<ItemExpanded findItem={findItem} />} />
        {/* <Route exact path="confirmation" element={} /> */}
        <Route exact path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
  );
}

export default App;

const Img = styled.img`
  width: 100vw;
`;
