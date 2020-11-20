import { ApolloServer, gql } from 'apollo-server';
import { sync as globSync } from 'glob';
import fs from 'fs';
import path from 'path';
import { dataSources } from './dataSources';

const resolversPath = path.resolve(__dirname, 'resolvers');

const typeDefs = globSync('**/*.graphql', {
  cwd: resolversPath,
}).map(fileName =>
  gql(fs.readFileSync(path.resolve(resolversPath, fileName)).toString('utf8'))
);

const resolvers = globSync('**/!(*.test).js', { cwd: resolversPath }).map(
  fileName => require(path.resolve(resolversPath, fileName)).default
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

export { server };
