import React from 'react';
import styled from 'styled-components';


const NavBar = () => {
	return (
		<Nav>
			<Img className="logo" src={require ("../assets/CraftCircleLogo-06.png")} alt="craft circle logo"/>
			<div>
				<Button>
					<h3>All Crafts</h3>
				</Button>
				<Button>
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
`;

const Nav = styled.nav`
background: #F4ECDD;
display: flex;
justify-content: space-between;
`;

const Img = styled.img`
height: 100px;
`
