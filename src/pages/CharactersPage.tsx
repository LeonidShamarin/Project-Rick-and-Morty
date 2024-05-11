import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from '../components/CharacterList';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  // origin: {
  //   name: string;
  // };
  // episode: string[];
  // location: {
  //   name: string;
  // };
  // created: string;
  // url: string;
  // episodeCount: number;
}

const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${searchQuery}&status=${statusFilter}&gender=${genderFilter}`);
        setCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [currentPage, searchQuery, statusFilter, genderFilter]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1); // Повернутися до першої сторінки при новому пошуку
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    setCurrentPage(1); // Повернутися до першої сторінки при зміні фільтра
  };

  const handleGenderFilter = (gender: string) => {
    setGenderFilter(gender);
    setCurrentPage(1); // Повернутися до першої сторінки при зміні фільтра
  };

  return (
    <div>
      <h1>Characters</h1>
      {/* Додати поля для пошуку та фільтрації */}
      <CharacterList
        characters={characters}
        onPageChange={handlePageChange}
        onSearch={handleSearch}
        onStatusFilter={handleStatusFilter}
        onGenderFilter={handleGenderFilter}
      />
    </div>
  );
};

export default CharactersPage;