import React from "react";
import EpisodeDetails from "./EpisodeDetails";
// import placeholderImage from "../img/tv-show-rick-and-morty-preview.jpg";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {episodes.map((episode) => (
        <div
          key={episode.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="h-48 bg-gray-300">
            {/* <img src={placeholderImage} alt="placeholderImage" /> */}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{episode.name}</h3>
            <p className="text-gray-600 mb-2">Air Date: {episode.air_date}</p>
            <p className="text-gray-600 mb-4">Episode: {episode.episode}</p>
            <EpisodeDetails episodeId={episode.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodeList;
