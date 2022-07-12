import React from 'react';
import styled from 'styled-components';


const NavBar = () => {
	return (
		<Nav className='nav-bar'>
			<Img className="logo" src={require ("../assets/CraftCircleLogo-06.png")} alt="craft circle logo"/>
			<div>
				<Button className='nav-button'>
					<h3>All Crafts</h3>
				</Button>
				<Button className="nav-button">
					<h3>About</h3>
				</Button>
				<Button className="nav-button">
					<h3>Profile</h3>
				</Button>
			</div>
		</Nav>
	)
}

export default NavBar;

const Button = styled.button`
background: #F4ECDD;
border: none;
font-size: 25px;
color: #A7C891;
margin: 25px;
&: hover {
	color: #E3976E
} 
`;

const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding: 25px;
`;

const Img = styled.img`
height: 150px;
`
