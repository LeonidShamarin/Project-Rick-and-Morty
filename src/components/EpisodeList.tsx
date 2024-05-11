import React from "react";
import EpisodeDetails from './EpisodeDetails';
interface EpisodeProps {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
}

interface EpisodeListProps {
  episodes: EpisodeProps[];
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes }) => {
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
             <EpisodeDetails episodeId={episode.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EpisodeList;
