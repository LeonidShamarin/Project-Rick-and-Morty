import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
}

interface EpisodeDetailsProps {
  episodeId: number;
}

const EpisodeDetails: React.FC<EpisodeDetailsProps> = ({ episodeId }) => {
  const [episode, setEpisode] = useState<any>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodeId}`
        );
        setEpisode(response.data);
        setCharacters(response.data.characters.slice(0, 3));
      } catch (error) {
        console.error('Error fetching episode details:', error);
      }
    };

    fetchEpisodeDetails();
  }, [episodeId]);

  const handleLoadMore = async () => {
    try {
      const characterResponses = await Promise.all(
        episode.characters.slice(3).map((url: string) =>
          axios.get(url)
        )
      );
      const newCharacters = characterResponses.map((response) => response.data);
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
      setLoadMore(false);
    } catch (error) {
      console.error('Error fetching additional characters:', error);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal}>View Details</button>
      <Modal isOpen={showModal} onClose={toggleModal}>
        {episode && (
          <>
            <h2>{episode.name}</h2>
            <p>Air Date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
          
            <h3>Characters</h3>
            <ul>
              {characters.map((character) => (
                <li key={character.id}>
                  <img src={character.image} alt={character.name} />
                  <p>{character.name}</p>
                  <p>{character.status}</p>
                </li>
              ))}
            </ul>
            {episode.characters.length > 3 && !loadMore && (
              <button onClick={() => setLoadMore(true)}>Load More</button>
            )}
            {loadMore && <button onClick={handleLoadMore}>Loading...</button>}
          </>
        )}
      </Modal>
    </div>
  );
};

export default EpisodeDetails;