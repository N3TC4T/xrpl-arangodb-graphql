const gql = require('graphql-sync');

const SetRegularKey = new gql.GraphQLObjectType({
  name: 'SetRegularKey transaction',
  description: 'A SetRegularKey transaction assigns, changes, or removes the regular key pair associated with an account.',
  fields() {
    return {
        RegularKey: {
        type: gql.GraphQLString,
        description: 'A base-58-encoded Address that indicates the regular key pair to be assigned to the account. If omitted, removes any existing regular key pair from the account. Must not match the master key pair for the address'
      }
    }
  }
});

module.exports = SetRegularKey
