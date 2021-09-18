import {gql} from "apollo-server";

export default gql`
  type Message {
    body: String!
    sender: String!
  }

  extend type Query {
    messages: [Message]
  }
`
