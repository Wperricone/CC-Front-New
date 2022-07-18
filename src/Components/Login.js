import React, { useState } from "react";
import styled from 'styled-components';
import Button from './Button';
import colors from "../constants/colors";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <LoginPageSection className="login-page">
            <LoginBox className="login-modal">
                <Label>Email:</Label>
                <Input type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <Label>Password:</Label>
                <Input type="text" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <Text>Don't have an account? Sign up <SignUpLink to="/">here!</SignUpLink></Text>
            </LoginBox>
                <Button name="Login" link="/profile"/>
        </LoginPageSection>
    )
}

export default Login

const LoginPageSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const LoginBox = styled.div`
    height: 300px;
    width: 400px;
    background: white;
    border-radius: 25px;
    box-shadow: 20px 20px 0px ${colors.craftBlue};
    margin: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Input = styled.input`
    border-radius: 25px;
    width: 80%;
    height: 30px;
    margin: 5%;
    border: 1px solid ${colors.craftBlue};
    text-align: center;
`;

const Label = styled.label`
    font-size: 20px;
    font-weight: 700;
    color: ${colors.craftGreen};
`;

const Text = styled.p`
    font-size: 15px;
    font-weight: 700;
    color: ${colors.craftBlue};
`;

const SignUpLink = styled(Link)`
    font-size: 15px;
    font-weight: 700;
    color: ${colors.craftOrange};
`;
