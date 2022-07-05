import { useEffect, useState } from "react";
import Character from "./Character";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    setLoading(false);
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          characters.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character {...character} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CharacterList;
