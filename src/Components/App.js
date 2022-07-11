import { useQuery, gql } from '@apollo/client';
import './NavBar';
import NavBar from './NavBar';
import styled from 'styled-components';


function App() {
  return (
    <div>
      <NavBar/>
      <Img src={require ("../assets/myrlene-numa-SnITZTTeJVE-unsplash.jpg")}/>
      <div>
      Placeholder for Craft Container
      </div>
    </div>
  );
}

export default App;

const Img = styled.img`
width: 100vw;
`;
