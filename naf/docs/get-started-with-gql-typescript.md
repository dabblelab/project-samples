# Get Started with typescript and graphql

In this project i will show you how you can get started
with using typescript combined with apollo-graphql, paired
with that we are also going to see how we can test, split
schema and resolvers to create a large scale project.

### Create a new directory for your project

```
mkdir project
```

### Go inside project dir and create a new dir server

```
cd project
mkdir server
```

### Initialize the project

```
yarn init -y
```

Install the typescript as dev dependency

```
yarn add -D typescript ts-node-dev
```

Initialize typescript by running

```
npx tsc --init
```

This will create a file called `tsconfig.json` in your project

Install apollo-server and graphql

```
yarn add apollo-server graphql
```

Add Scripts in package.json

```
  "scripts": {
    "start": "node dist/index.js",
    "dev": "ts-node-dev src/index.ts",
    "build": "tsc"
  },
```

Open tsconfig.json, Search for outDir and rootDir fields, uncomment and set

```
outDir:"./dist"
rootDir:"./src"
```

Create a dir named `src` and put `index.ts` file in side it

```
console.log("hello world");
```

Test if you can run the app by

```
yarn dev
```

You should see `hello world` printed to the screen

Test if the project builds

```
yarn build
```

Test if the build runs successfully

```
yarn start
```

If everything works that's great!

Paste this in src/index.ts file

```
import { ApolloServer, gql } from "apollo-server";

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

## Let's add testing

We will use jest

```
yarn add -D jest ts-jest @types/jest
```

This will configure jest to use typescript

```
yarn ts-jest config:init
```
