import { useQuery, gql } from '@apollo/client';
import './NavBar';
import NavBar from './NavBar';
import styled from 'styled-components';



// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;

// function DisplayLocations() {
//   const { loading, error, data } = useQuery(GET_LOCATIONS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error D:</p>;

//   return data.locations.map(({ id, name, description, photo }) => (
//     <div key={id}>
//       <h3>{name}</h3>
//       <img width="400" height="250" alt="location-reference" src={`${photo}`} />
//       <br />
//       <b>About this location:</b>
//       <p>{description}</p>
//       <br />
//     </div>
//   ));
// }

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
