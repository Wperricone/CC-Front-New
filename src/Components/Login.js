import React from "react";
import styled from 'styled-components';

const Login = () => {
    return (
        <section className="login-page">
            <div className="login-modal">
                <input type="text" placeholder="email"></input>
                <input type="text" placeholder="password"></input>
                <button>login</button>
            </div>
        </section>
    )
}

export default Login