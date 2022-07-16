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
      user {
        id
        name
        email
      }
    }
  }
`;

const GET_USER = gql`
  query getAUser {
    details: getAUser(email: "phillip@email.com") {
      id
      email
      name
    }
    inventory: getUserItems(id: 1) {
      name
      description
      category
      status
      available
      amount
    }
  }
`


function App() {  
  // const { loading, error, data } = useQuery(GET_ITEMS);
  const findItem = (id) => {
    if (allCraftItems.data && allCraftItems.data.items) {
      return allItems.find((item) => item.id === id);
    }
  };

  const allCraftItems = useQuery(GET_ITEMS)
  const currentUser = useQuery(GET_USER)

  const loading = allCraftItems.loading || currentUser.loading
  const error = allCraftItems.error || currentUser.error

  const [allItems, setAllItems] = useState([]);
  const [user, setUser] = useState({})

  // useEffect(() => {
  //   if (data && data.items) {
  //     setAllItems(data.items);
  //   }
  // }, [data]);

  useEffect(() => {
    if (allCraftItems.data && allCraftItems.data.items) {
      console.log(currentUser.data)
      setUser(currentUser.data)
      setAllItems(allCraftItems.data.items);
    }
  }, [allCraftItems.data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <main>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage itemData={allCraftItems.data.items} />} />
        <Route exact path="about" element={<AboutPage />} />
        <Route exact path="profile" element={<UserProfile user={user} />} />
        <Route exact path="contribution" element={<Form />} />
        <Route
          exact
          path="craft/:craftId"
          element={<ItemExpanded findItem={findItem} />}
        />
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
