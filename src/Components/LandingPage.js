import React from "react";
import styled from 'styled-components';


const LandingPage = () => {
    return (
        <LandingPageSection className="landing-page">
            <LandingImage className="landing-page-img" src={require ("../assets/bannerImage.png")} alt="crafts-in-action"/>
            <Contents className="search-and-about-container">
                <About>
                    <h2>About</h2>
                 <p>about me goes here</p>
                </About>
                <form className="search-bar">
                    <label>Search</label>
                    <input type="text"></input>
                    <button>search</button>
                </form>
            </Contents>
        </LandingPageSection>
    )
}

export default LandingPage

const LandingImage = styled.img`
width: 80vw;
border-radius: 30px;
box-shadow: 40px 40px rgba(239,203, 199, 1);
margin: 10px;
`

const LandingPageSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`
const About = styled.div`
display: flex;
flex-direction: column;
`

const Contents = styled.div`
display: flex;
flex-direction: row;
border: solid 1px black;
width: 80vw;
justify-content: space-between;
align-items: center;
`
//might need to play with divs to get felx box to match wireframe 
// feel free to change structure/ verbiage of search bar 