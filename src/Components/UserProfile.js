import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../constants/colors";
import Button from "./Button";
import ColorChanger from "./ColorChanger";

import users from "../data/users.json";

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentColor, setCurrentColor] = useState("craftBlue");

  useEffect(() => {
    setCurrentUser(users.data.getUsers[0]);
  }, []);

  if (!currentUser) {
    return (
      <UserProfileSection className="user-profile">
        <SignInImage
          className="not-signed-in-img"
          // src={require(`../assets/`)}
          alt="not signed in image"
        />
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
      <BannerImg
        className="not-signed-in-img"
        src={require(`../assets/userProfileImgs/userBannerImg.jpg`)}
        alt=""
      />
      <ProfilePicture
        className="not-signed-in-img"
        src={require(`../assets/userProfileImgs/CCProfilePic-01.png`)}
        alt="your profile picture"
        style={{ boxShadow: `-12px -12px 0px ${colors[currentColor]}` }}
      />
      <ProfileName style={{ color: colors[currentColor] }}>
        {currentUser.name}
      </ProfileName>
      <ProfileEmail style={{ color: colors[currentColor] }}>
        {currentUser.email}
      </ProfileEmail>
      <SectionHeader style={{ color: colors[currentColor] }}>
        Crafts I'm Offering
      </SectionHeader>
      <CraftDisplaySection></CraftDisplaySection>
      <Button name={"Add Craft"} link={"/contribution"} />
      <SectionHeader style={{ color: colors[currentColor] }}>
        Borrowed Supplies
      </SectionHeader>
      <CraftDisplaySection></CraftDisplaySection>
      <ColorChanger color={currentColor} updateColor={setCurrentColor} />
      <Button name={"Log Out"} link={"/login"} />
    </UserProfileSection>
  );
};

export default UserProfile;

// wireframe shows borrowed crafts, but it is not explicity mentioned in MVP. If we move forward with this, it will have a similar structure to the available section.

const UserProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
`;

const BannerImg = styled.img`
  width: 85vw;
  border-radius: 25px;
`;

const ProfilePicture = styled.img`
  width: 230px;
  height: 230px;
  border-radius: 25px;
  position: relative;
  top: -90px;
  z-index: 1;
`;

const ProfileName = styled.h1`
  font-size: 35px;
  font-weight: 900;
  margin: 0;
`;

const ProfileEmail = styled.h2`
  font-size: 25px;
  font-weight: 900;
`;

const CraftDisplaySection = styled.section`
  width: 90vw;
  padding: 5vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5%;
  justify-items: center;
  align-items: center;
  margin-bottom: 5vh;
`;

const SectionHeader = styled.h1`
  font-size: 30px;
  font-weight: 900;
`;

const SignInImage = styled.img``;
