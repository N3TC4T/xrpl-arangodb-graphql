const gql = require('graphql-sync');

const signerEntriesType = new gql.GraphQLObjectType({
  name: 'Signer Entries',
  description: '',
  fields() {
    return {
      Account: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'An XRP Ledger address whose signature contributes to the multi-signature'
      },
      SignerWeight: {
        type: new gql.GraphQLNonNull(gql.GraphQLInt),
        description: 'The weight of a signature from this signer. A multi-signature is only valid if the sum weight of the signatures provided meets or exceeds the signer list`s SignerQuorum value'
      }
    }
  }
});

module.exports = signerEntriesType
