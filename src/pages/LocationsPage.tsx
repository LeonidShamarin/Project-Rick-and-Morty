import React from 'react';
import { useQuery } from '@apollo/client';
import LocationList from '../components/LocationList';
import Loading from '../components/Loading';
import { GET_LOCATIONS } from '../graphql/queries';

const LocationsPage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <Loading />;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Locations</h1>
      <LocationList locations={data.locations.results} />
    </div>
  );
};

export default LocationsPage;