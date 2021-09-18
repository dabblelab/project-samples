import { ApolloServer } from "apollo-server";
import services from "./services";

const server = new ApolloServer({
  typeDefs: services.schema,
  resolvers: services.resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
