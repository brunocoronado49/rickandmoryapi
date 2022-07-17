import { useEffect, useState } from "react";
import Character from "./Character";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const NavPage = ({page}) => {
    return (
      <header className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-primary block"
          onClick={changePageBack}
        >
          Back page
        </button>
        <h3>Current page: {page}</h3>
        <button
          className="btn btn-primary block"
          onClick={changePageNext}
        >
          Next page
        </button>
      </header>
    );
  }

  const changePageNext = () => {
    setPage(page + 1);
  }

  const changePageBack = () => {
    setPage(page - 1);
  }

  const fetchData = async () => {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const data = await res.json();
    setLoading(false);
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <NavPage page={page}/>
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
      <NavPage page={page}/>
      <br />
    </div>
  );
};

export default CharacterList;
