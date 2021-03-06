'use strict';
const schema = require('./schema');
const gql = require('graphql-sync');
const graphql = gql.graphql;
const formatError = gql.formatError;
const createGraphqlRouter = require('@arangodb/foxx/graphql');

// This is a regular Foxx router.
const router = createGraphqlRouter({schema, graphiql: true})
.summary('GraphQL endpoint')
.description('GraphQL endpoint for the XRPL GraphQL');

module.context.use(router);
