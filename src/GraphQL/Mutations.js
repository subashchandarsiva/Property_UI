import { gql } from "@apollo/client";

export const ADD_HOME = gql`
  mutation AddHome($name: String!, $contact: String!, $location: String!) {
    AddHome(name: $name, contact: $contact, location: $location) {
      id
    }
  }
`;

export const UPDATE_HOME = gql`
  mutation UpdateHome(
    $id: String!
    $name: String!
    $contact: String!
    $location: String!
  ) {
    UpdateHome(id: $id, name: $name, contact: $contact, location: $location) {
      id
    }
  }
`;

export const DELETE_HOME = gql`
  mutation DeleteHome($id: String!) {
    DeleteHome(id: $id)
  }
`;
