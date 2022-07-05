import React from "react";

const Character = (character) => {
  return (
    <div className="text-center p-5">
      <h2>{character.name}</h2>
      <h3>
        {character.species} - {character.status}
      </h3>
      <img
        className="img-fluid rounded-pill"
        src={character.image}
        alt={character.name}
      />
    </div>
  );
};

export default Character;
