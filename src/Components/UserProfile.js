import React from "react";
import styled from 'styled-components';

const UserProfile = () => {
    return (
        <section className="user-profile">
            <section className="bio">
                <img className="profile-picture" src="" alt="crafter profile picture"/>
                <h2>Name</h2>
                <h3>contact info/ location</h3>
            </section>
            <section className="available-items">
                <h3>Supplies I'm Offering</h3>
                <button>donate</button>
                <div>
                    craft cards would go here 
                </div>
            </section>
        </section>
    )
}

export default UserProfile


// wireframe shows borrowed crafts, but it is not explicity mentioned in MVP. If we move forward with this, it will have a similar structure to the available section. 