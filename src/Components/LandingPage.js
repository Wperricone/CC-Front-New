import React from "react";
import styled from 'styled-components';


const LandingPage = () => {
    return (
        <section className="landing-page">
            <img className="landing-page-img" src="" alt="crafts-in-action"/>
            <div className="search-and-about-container">
                <h2>About</h2>
                <p>about me goes here</p>
                <form className="search-bar">
                    <label>Search</label>
                    <input type="text"></input>
                    <button>search</button>
                </form>
            </div>
        </section>
    )
}

export default LandingPage


//might need to play with divs to get felx box to match wireframe 
// feel free to change structure/ verbiage of search bar 