import { gql } from "apollo-server";

export default gql`
  type Todo {
    task: String!
    completed: Boolean!
  }

  extend type Query {
    todos: [Todo]
  }
`;
