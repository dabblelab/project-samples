import { gql } from "apollo-server"

export default gql`
  type Todo {
    task: String!
    completed: Boolean!
    message: Message
  }

  extend type Query {
    todos: [Todo]
  }
`
