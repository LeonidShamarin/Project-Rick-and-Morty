import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeList from '../components/EpisodeList';

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

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${currentPage}`);
        setEpisodes(response.data.results);
      } catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };

    fetchEpisodes();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>Episodes</h1>
      <EpisodeList episodes={episodes} onPageChange={handlePageChange} />
    </div>
  );
};

export default EpisodesPage;