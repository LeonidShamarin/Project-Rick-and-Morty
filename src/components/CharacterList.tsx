import React from "react";

interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
//   origin: string;
//   location: string;
//   episode: string[];
//   url: string;
//   created: string;

}

interface CharacterListProps {

  characters: CharacterProps[];
  onPageChange: (page: number) => void;
  onSearch: (query: string) => void;
  onStatusFilter: (status: string) => void;
  onGenderFilter: (gender: string) => void;
}


const CharacterList: React.FC<CharacterListProps> = ({
  characters,
  onPageChange,
  onSearch,
  onStatusFilter,
  onGenderFilter,
}) => {
  return (
    <div>
      {/* пошук та фільтрації треба зробити потім*/}
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
          {/* <p>Location:{character.location}</p> */}
          {/* <p>Episode: {character.episode}</p> */}
          </li>
        ))}
      </ul>
      {/*  пагінації потім зроблю */}
    </div>
  );
};

export default CharacterList;
