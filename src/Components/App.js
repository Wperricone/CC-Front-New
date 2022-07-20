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
import LoadingPage from "./LoadingPage";
import Confirmation from "./Confirmation";

const GET_ITEMS = gql`
  query getItems {
    items: getItems {
      id
      name
      description
      available
      category
      status
      amount
      user {
        id
        name
        email
      }
    }
  }
`;

function App() {
  // const { loading, error, data } = useQuery(GET_ITEMS);
  const findItem = (id) => {
    if (allCraftItems.data && allCraftItems.data.items) {
      return allItems.find((item) => item.id === id);
    }
  };

  const allCraftItems = useQuery(GET_ITEMS);
  //const currentUser = useQuery(GET_USER);

  // const loading = allCraftItems.loading || currentUser.loading;
  // const error = allCraftItems.error || currentUser.error;

  const loading = allCraftItems.loading;
  const error = allCraftItems.error;

  const [allItems, setAllItems] = useState([]);
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   if (data && data.items) {
  //     setAllItems(data.items);
  //   }
  // }, [data]);

  useEffect(() => {
    if (allCraftItems.data && allCraftItems.data.items) {
      //setUser(currentUser.data);
      setAllItems(allCraftItems.data.items);
    }
  }, [allCraftItems.data]);

  const loginUser = (userData) => {
    setUser(userData);
  };

  const addItem = (item) => {
    setAllItems([...allItems, item])
  }

  if (loading) return <LoadingPage />;
  if (error) console.log("ERROR", error);
  return (
    <main>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={<LandingPage itemData={allItems.length ? allItems : allCraftItems.data.items} />}
        />
        <Route exact path="about" element={<AboutPage />} />
        <Route
          exact
          path="profile"
          element={<UserProfile user={user} setUser={setUser} />}
        />
        <Route exact path="contribution" element={<Form addItem={addItem} user={user} />} />
        <Route
          exact
          path="craft/:craftId"
          element={<ItemExpanded findItem={findItem} />}
        />
        <Route exact path="confirmation" element={<Confirmation />} />
        <Route exact path="login" element={<Login loginUser={loginUser} />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </main>
  );
}

export default App;

const Img = styled.img`
  width: 100vw;
`;
