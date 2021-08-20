const gql = require('graphql-sync');

const pathType = new gql.GraphQLObjectType({
  name: 'XRPL Path',
  description: 'define a way for issued currency payments to flow through intermediary steps on their way from sender to receiver',
  fields() {
    return {
      account: {
        type: gql.GraphQLString,
        description: 'this path step represents rippling through the specified address. MUST NOT be provided if this step specifies the currency or issuer fields'
      },
      currency: {
        type: gql.GraphQLString,
        description: 'this path step represents changing currencies through an order book. The currency specified indicates the new currency. MUST NOT be provided if this step specifies the account field'
      },
      issuer: {
        type: gql.GraphQLString,
        description: 'this path step represents changing currencies and this address defines the issuer of the new currency'
      },
      type: {
        type: gql.GraphQLInt,
        description: 'An indicator of which other fields are present'
      },
      type_hex: {
        type: gql.GraphQLString,
        description: 'A hexadecimal representation of the type field'
      }
    }
  }
});

module.exports = pathType
