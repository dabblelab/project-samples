import todo from "./todo";
import message from "./message";
import { gql } from "apollo-server";
import author from "./author";
import book from "./book";

const BaseSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;

export default {
  schema: [BaseSchema, todo.schema, message.schema, author.schema, book.schema],
  resolvers: [
    todo.resolvers,
    message.resolvers,
    author.resolvers,
    book.resolvers,
  ],
};
