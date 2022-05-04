import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Character({ characters = [] }) {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const clickedCharacter = characters.find((character) => character.id === Number(id));
    setCharacter(clickedCharacter);
  }, [id]);

  return(
    <>
      <h2>{character.name}</h2>
      <img src={character.image} alt={`Image of ${character.name}`}></img>
      <p>{character.status}</p>
      <p>{character.species}</p>
      <p>{character.type}</p>
      <p>{character.gender}</p>
    </>
  )
}