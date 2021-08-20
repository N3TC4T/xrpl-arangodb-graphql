const gql = require('graphql-sync');

const DepositPreauth = new gql.GraphQLObjectType({
  name: 'DepositPreauth transaction',
  description: 'A DepositPreauth transaction gives another account pre-approval to deliver payments to the sender of this transaction.',
  fields() {
    return {
    Authorize: {
        type: gql.GraphQLString,
        description: 'The XRP Ledger address of the sender to preauthorize'
      },
      Unauthorize: {
        type: gql.GraphQLString,
        description: 'The XRP Ledger address of a sender whose preauthorization should be revoked.'
      },
    }
  }
});

module.exports = DepositPreauth
