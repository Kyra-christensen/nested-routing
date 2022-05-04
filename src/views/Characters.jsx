import { useEffect, useState } from 'react';
import { Link, Route, useRouteMatch, Switch } from 'react-router-dom';
import Character from '../components/Character';
import styles from '../App.css';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { url, path } = useRouteMatch();

  useEffect(() => {
    const fetchCharacters = async () => {

    const res = await fetch('https://rickandmortyapi.com/api/character');

    const { results } = await res.json();

    setCharacters(results);
    setIsLoading(false);
      }
    
      fetchCharacters();
    
  }, []);


  return (
    <>
      <h1>Characters from Rick and Morty</h1>
      {
        isLoading ? <p>Loading...</p>
        : (
          <div className={styles.container}>
            <div>
            <aside >
              <ul>
                {characters.map((character) => (
                <li key={character.id}>
                  <Link to={`${url}${character.id}`}>
                    <h4>{character.name}</h4>
                  </Link>
                  
                </li>
              ))}
              </ul>
            </aside>
            </div>
            <div>
            <Route path={`${path}:id`}>
              <Character characters={characters}/>
            </Route>
            </div>
          </div>
        )
      }
    </>
  )
}
