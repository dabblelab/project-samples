import { gql } from "apollo-server";

export default gql`
  type Book {
    id: Int!
    title: String!
    author: Author!
  }

  extend type Query {
    books: [Book!]
  }
`;
