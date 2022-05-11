import styled from 'styled-components';
import useFetch from '../hooks/fetch';

export default function Card() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );
  console.log(data);
  return (
    <div>
      {loading && <div>Loading…</div>}
      {error && <div>{error.message}</div>}
      {data?.results.map(character => (
        <StyledCard>
          <ul>
            <li>Name:{character.name}</li>
            <li>Status:{character.status} </li>
            <li>Species:{character.species} </li>
            <li>Type:{character.type}</li>
            <li>Gender:{character.gender} </li>
            <li>Origin:{character.origin.name}</li>
            <li>Location:{character.location.name}</li>
          </ul>
          <div>
            <img src={character.image}></img>
          </div>
          <button>Collect</button>
        </StyledCard>
      ))}
    </div>
  );
}

export const StyledCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 15px;
  background-color: yellow;
  color: green;
  border-radius: 20px;
  border: 2px solid black;
  box-shadow: 3px 3px 3px grey;

  img {
    border-radius: 999px;
  }

  button {
  }
`;

/** const [character, setCharacter] = useState(null); wird nicht gebraucht **/
