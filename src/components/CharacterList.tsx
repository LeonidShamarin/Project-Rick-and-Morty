import React from "react";

interface CharacterProps {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface CharacterListProps {
  characters: CharacterProps[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div>
      <div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
            xl:grid-cols-5  gap-4 px-10"
      >
        {characters.map((character) => (
          <div
            key={character.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{character.name}</h3>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Status:</span>
                {character.status}
              </p>
              <p className="text-gray-600 mb-1">
                <span className="font-semibold">Species:</span>
                {character.species}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Gender:</span>
                {character.gender}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
