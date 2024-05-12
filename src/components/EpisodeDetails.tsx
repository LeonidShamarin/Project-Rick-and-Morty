import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";

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
  // const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const fetchEpisodeDetails = async () => {
      try {
        const response = await axios.get(
          `https://rickandmortyapi.com/api/episode/${episodeId}`
        );
        setEpisode(response.data);
        const characterIds = response.data.characters
          .slice(0, 3)
          .map((url: string) => url.split("/").pop());
        const characterResponses = await Promise.all(
          characterIds.map((id: string) =>
            axios.get(`https://rickandmortyapi.com/api/character/${id}`)
          )
        );
        setCharacters(characterResponses.map((response) => response.data));
      } catch (error) {
        console.error("Error fetching episode details:", error);
      }
    };

    fetchEpisodeDetails();
  }, [episodeId]);

  const handleLoadMore = async () => {
    try {
      const characterIds = episode.characters
        .slice(characters.length, characters.length + 2)
        .map((url: string) => url.split("/").pop());
      const characterResponses = await Promise.all(
        characterIds.map((id: string) =>
          axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        )
      );
      const newCharacters = characterResponses.map((response) => response.data);
      setCharacters((prevCharacters) => [...prevCharacters, ...newCharacters]);
    } catch (error) {
      console.error("Error fetching additional characters:", error);
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
            {episode.characters.length > characters.length && (
              <button onClick={handleLoadMore}>Load More</button>
            )}
          </>
        )}
      </Modal>
    </div>
  );
};

export default EpisodeDetails;
