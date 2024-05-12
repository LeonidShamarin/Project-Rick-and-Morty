import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "../components/CharacterList";
import CharacterFilter from "../components/CharacterFilter";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { handleError } from "../utils/errorHandler";
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

const CharactersPage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${currentPage}&name=${searchQuery}&status=${statusFilter}&gender=${genderFilter}`
        );
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
        setError(null);
      } catch (error) {
        handleError(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage, searchQuery, statusFilter, genderFilter]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const handleGenderFilter = (gender: string) => {
    setGenderFilter(gender);
    setCurrentPage(1);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Characters</h1>
      <CharacterFilter
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        genderFilter={genderFilter}
        onSearch={handleSearch}
        onStatusFilter={handleStatusFilter}
        onGenderFilter={handleGenderFilter}
      />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <>
          <CharacterList
            characters={characters}
           
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default CharactersPage;
