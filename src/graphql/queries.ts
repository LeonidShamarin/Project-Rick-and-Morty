import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
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