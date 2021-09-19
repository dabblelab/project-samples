import { gql } from "apollo-server";

export default gql`
  type Author {
    id: Int!
    name: String!
    books: [Book!]
  }
  extend type Query {
    authors: [Author!]
  }
`;
