import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import Button from "./Button";

import users from "../data/users.json";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentColor, setCurrentColor] = useState("colors.craftBlue");

  useEffect(() => {
    setCurrentUser(users.data.getUsers[0]);
  }, []);

  if (!currentUser) {
    return (
      <UserProfileSection className="user-profile">
        <SectionHeader>
          You're not signed in! Click the button below to sign in or create an
          account.
        </SectionHeader>
        <Button name={"Login"} link={"/login"} />
      </UserProfileSection>
    );
  }

  return (
    <UserProfileSection className="user-profile">
      <BannerImg />
      <ProfilePicture />
      <ProfileName>{`${currentUser.name}`}</ProfileName>
      <ProfileEmail>{`${currentUser.email}`}</ProfileEmail>
      <CraftDisplaySection>
        <SectionHeader>Crafts I'm Offering</SectionHeader>
        <Button name={"Add Craft"} link={"/contribution"} />
      </CraftDisplaySection>
      <CraftDisplaySection>
        <SectionHeader>Borrowed Supplies</SectionHeader>
      </CraftDisplaySection>
      <Button name={"Log Out"} link={"/login"} />
    </UserProfileSection>
  );
};

export default UserProfile;

// wireframe shows borrowed crafts, but it is not explicity mentioned in MVP. If we move forward with this, it will have a similar structure to the available section.

const UserProfileSection = styled.section``;

const BannerImg = styled.img``;

const ProfilePicture = styled.img``;

const ProfileName = styled.h1``;

const ProfileEmail = styled.h2``;

const CraftDisplaySection = styled.section``;

const SectionHeader = styled.h1``;
