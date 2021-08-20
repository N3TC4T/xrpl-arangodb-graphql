const gql = require('graphql-sync');

const CheckCancel = new gql.GraphQLObjectType({
  name: 'CheckCancel transaction',
  description: 'An AccountDelete transaction deletes an account and any objects it owns in the XRP Ledger.',
  fields() {
    return {
    CheckID: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'The ID of the Check ledger object to cancel, as a 64-character hexadecimal string'
      }
    }
  }
});

module.exports = CheckCancel
