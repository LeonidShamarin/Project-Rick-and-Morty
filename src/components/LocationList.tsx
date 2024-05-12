import React from "react";
import placeholderImage from "../img/imaginary.png";
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
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
    xl:grid-cols-5 gap-4 p-10"
    >
      {locations.map((location) => (
        <div
          key={location.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="h-30 w-30">
            <img src={placeholderImage} alt="placeholderImage" />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">{location.name}</h3>
            <p className="text-gray-600 mb-1">
              <span className="font-semibold">Type: </span> {location.type}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Dimension: </span>
              {location.dimension}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
