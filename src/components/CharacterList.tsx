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
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      <div className="flex mb-4">
        <div className="mr-4">
          <label
            htmlFor="status-filter"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="status-filter"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            onChange={(e) => onStatusFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="gender-filter"
            className="block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender-filter"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            onChange={(e) => onGenderFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      {/*  пагінації потім зроблю */}
    </div>
  );
};

export default CharacterList;
