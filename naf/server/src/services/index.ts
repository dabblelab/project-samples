import todo from "./todo";
import message from "./message";
import {gql} from "apollo-server";

const BaseSchema =  gql`
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
  schema: [BaseSchema, todo.schema, message.schema],
  resolvers:[todo.resolvers, message.resolvers]
}
