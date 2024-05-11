import React from "react";

interface LocationProps {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

interface LocationListProps {
  locations: LocationProps[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <div>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <h3>{location.name}</h3>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
