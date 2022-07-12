import React from "react";
import styled from 'styled-components';


const LandingPage = () => {
    return (
        <LandingPageSection className="landing-page">
            <LandingImage className="landing-page-img" src={require ("../assets/bannerImage.png")} alt="crafts-in-action"/>
            <Contents className="search-and-about-container">
                <About>
                    <AboutH2>About</AboutH2>
                    <AboutP>Craft Circle is an online community where crafters can borrow and donate supplies in an effort to make creative outlets more accessible. Currently, this platform is meant for community members who reside in the Denver Metro area.</AboutP>
                </About>
                <form className="search-bar">
                    <label>Search</label>
                    <input type="text"></input>
                    <button className="search-button">search</button>
                </form>
            </Contents>
        </LandingPageSection>
    )
}

export default LandingPage

const LandingImage = styled.img`
width: 80vw;
border-radius: 25px;
box-shadow: 40px 40px rgba(239,203, 199, 1);
margin: 10px;
`
const AboutH2 = styled.h2`
color: #AD92C0;
font-size: 30px;
`
const AboutP = styled.p`
color: #AD92C0;
font-sizr: 15px;
`

const LandingPageSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`
const About = styled.div`
display: flex;
flex-direction: column;
width: 60%;
`

const Contents = styled.div`
display: flex;
flex-direction: row;
width: 80vw;
justify-content: space-between;
align-items: center;
margin-top: 30px;
`

// I noticed the search bar has moved locations in the wireframe. Will add styling once it's location has been confirmed. 