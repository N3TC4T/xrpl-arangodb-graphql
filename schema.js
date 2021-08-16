'use strict';
const gql = require('graphql-sync');
const db = require('@arangodb').db;


const collection = module.context.collection('transactions');


const queryType = new gql.GraphQLObjectType({
  name: 'Query',
  fields() {
    return {
      transactions: {
        type: new gql.GraphQLList(transactionType),
        args: {
          type: {
            description: 'If omitted returns transactions with this type',
            type: gql.GraphQLString
          },
          hash: {
            description: 'If omitted returns transactions with hash',
            type: gql.GraphQLString
          }
        },
        resolve(root, args) {
          return collection.byExample({hash: args.hash})
        }
      },
    };
  }
});

module.exports = new gql.GraphQLSchema({
  query: queryType
});
