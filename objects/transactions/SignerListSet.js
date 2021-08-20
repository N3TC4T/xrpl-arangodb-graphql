const gql = require('graphql-sync');

const {amountType, signerEntriesType} = require('../../fields')

const SignerListSet = new gql.GraphQLObjectType({
  name: 'SignerListSet transaction',
  description: 'The SignerListSet transaction creates, replaces, or removes a list of signers that can be used to multi-sign a transaction',
  fields() {
    return {
        SignerQuorum: {
        type: new gql.GraphQLNonNull(gql.GraphQLInt),
        description: 'The amount of currency to deliver'
      },
      SignerEntries: {
        type: new gql.GraphQLList(signerEntriesType),
        description: 'rray of SignerEntry objects, indicating the addresses and weights of signers in this list'
      }
    }
  }
});

module.exports = SignerListSet
