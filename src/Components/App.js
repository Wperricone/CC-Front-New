import { useQuery, gql } from '@apollo/client';
import './NavBar';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import ItemContainer from './ItemContainer';
import styled from 'styled-components';



function App() {
  return (
    <div>
      <NavBar/>
      <LandingPage />
      <ItemContainer  /> 
    </div>
  );
}

export default App;

const Img = styled.img`
width: 100vw;
`;
