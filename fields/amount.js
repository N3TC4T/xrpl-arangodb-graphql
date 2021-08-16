const gql = require('graphql-sync');

const amountType = new gql.GraphQLObjectType({
  name: 'XRPL Amount',
  description: 'Amount represent in XRPL',
  fields() {
    return {
      value: {
        type: new gql.GraphQLNonNull(gql.GraphQLFloat),
        description: 'Amount value'
      },
      currency: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'Amount currency'
      },
      issuer: {
        type: gql.GraphQLString,
        description: 'Amount issuer'
      }
    }
  }
});

module.exports = amountType
