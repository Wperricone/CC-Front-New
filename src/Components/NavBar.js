import React from 'react';
import styled from 'styled-components';



const NavBar = () => {
	return (
		<Nav>
			<img>
			</img>
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
background: papayawhip;
`;

const Nav = styled.nav`
display: flex;
justify-content: space-between;
`;