import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import LocationList from '../components/LocationList';

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  
}

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

const LocationsPage: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const { data } = await client.query({ query: GET_LOCATIONS });
        setLocations(data.locations.results);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div>
      <h1>Locations</h1>
      <LocationList locations={locations} />
    </div>
  );
};

export default LocationsPage;

