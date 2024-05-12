import React, { useState, useEffect } from "react";
import axios from "axios";
import EpisodeList from "../components/EpisodeList";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";
import { handleError } from "../utils/errorHandler";
interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

const EpisodesPage: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://rickandmortyapi.com/api/episode?page=${currentPage}`
        );
        setEpisodes(response.data.results);
        setTotalPages(response.data.info.pages);
        setError(null);
      } catch (error) {
        handleError(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEpisodes();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Episodes</h1>
      {isLoading ? (
        <Loading />
      ) : error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <>
          <EpisodeList episodes={episodes} />
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

export default EpisodesPage;
