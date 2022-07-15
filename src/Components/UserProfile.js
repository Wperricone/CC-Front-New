import React from "react";
import styled from "styled-components";
import Button from "./Button";

const UserProfile = () => {
  return (
    <UserProfileSection className="user-profile">
      <BannerImg></BannerImg>
      <ProfilePicture></ProfilePicture>
      <ProfileName></ProfileName>
      <ProfileEmail></ProfileEmail>
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

const SectionHeader = styled.section``;
