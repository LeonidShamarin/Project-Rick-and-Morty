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
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
        onClick={toggleModal}
      >
        View Details
      </button>
      <Modal isOpen={showModal} onClose={toggleModal}>
        {episode && (
          <>
            <h2 className="text-2xl font-semibold mb-2">{episode.name}</h2>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Air Date:</span>{" "}
              {episode.air_date}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Episode:</span> {episode.episode}
            </p>

            <h3 className="text-lg font-semibold mb-2">Characters</h3>
            <div className="grid grid-cols-3 gap-4">
              {characters.map((character) => (
                <div key={character.id} className="flex items-center">
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <p className="ml-2 text-sm font-medium text-gray-900">
                    {character.name}
                  </p>
                </div>
              ))}
            </div>
            {episode.characters.length > characters.length && (
              <button
                className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            )}
          </>
        )}
      </Modal>
    </div>
  );
};

export default EpisodeDetails;
