const gql = require('graphql-sync');

const AccountDelete = new gql.GraphQLObjectType({
  name: 'AccountDelete transaction',
  description: 'An AccountDelete transaction deletes an account and any objects it owns in the XRP Ledger.',
  fields() {
    return {
      Destination: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'The unique address of the account receiving the payment'
      },
      DestinationTag: {
        type: gql.GraphQLInt,
        description: 'Arbitrary tag that identifies the reason for the payment to the destination, or a hosted recipient to pay'
      }
    }
  }
});

module.exports = AccountDelete
