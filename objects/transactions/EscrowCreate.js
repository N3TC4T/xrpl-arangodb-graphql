const gql = require('graphql-sync');

const {amountType, pathType} = require('../../fields')

const EscrowCreate = new gql.GraphQLObjectType({
  name: 'EscrowCreate transaction',
  description: 'Sequester XRP until the escrow process either finishes or is canceled.',
  fields() {
    return {
      Amount: {
        type: new gql.GraphQLNonNull(amountType),
        description: 'Amount of XRP, to deduct from the sender`s balance and escrow'
      },
      Destination: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'Address to receive escrowed XRP'
      },
      DestinationTag: {
        type: gql.GraphQLInt,
        description: 'Arbitrary tag to further specify the destination for this escrowed payment, such as a hosted recipient at the destination address'
      },
      FinishAfter: {
        type: gql.GraphQLInt,
        description: 'The time, in timestamp, when the escrowed XRP can be released to the recipient'
      },
      CancelAfter: {
        type: gql.GraphQLInt,
        description: 'The time, in timestamp, when this escrow expires'
      },
      Condition: {
        type: gql.GraphQLString,
        description: 'Hex value representing a PREIMAGE-SHA-256 crypto-condition'
      },
    }
  }
});

module.exports = EscrowCreate
