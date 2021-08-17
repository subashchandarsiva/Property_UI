import { gql } from "@apollo/client";

export const GET_HOMES = gql`
  query {
    homes {
      id
      name
      contact
      location
    }
  }
`;
