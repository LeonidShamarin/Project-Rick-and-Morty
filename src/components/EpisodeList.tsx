import React from "react";

interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

interface EpisodeListProps {
  episodes: EpisodeProps[];
  onPageChange: (page: number) => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({
  episodes,
  onPageChange,
}) => {
  return (
    <div>
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <h3>{episode.name}</h3>
            <p>Air Date: {episode.air_date}</p>
            <p>Episode: {episode.episode}</p>
            {/* <ul>
              {episode.characters.map((character) => (
                <li key={character}>{character}</li>
              ))}
            </ul> */}
          </li>
        ))}
      </ul>
      {/* <button onClick={() => onPageChange(0)}>0</button>
      <button onClick={() => onPageChange(1)}>1</button> */}
    </div>
  );
};

export default EpisodeList;
