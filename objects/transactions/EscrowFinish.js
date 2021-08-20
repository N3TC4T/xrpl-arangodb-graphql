const gql = require('graphql-sync');

const {amountType, pathType} = require('../../fields')

const EscrowFinish = new gql.GraphQLObjectType({
  name: 'EscrowFinish transaction',
  description: 'Deliver XRP from a held payment to the recipient.',
  fields() {
    return {
      Owner: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'Address to receive escrowed XRP'
      },
      OfferSequence: {
        type: new gql.GraphQLNonNull(gql.GraphQLInt),
        description: 'Transaction sequence of EscrowCreate transaction that created the held payment to finish'
      },
      Condition: {
        type: gql.GraphQLString,
        description: 'Hex value matching the previously-supplied PREIMAGE-SHA-256 crypto-condition of the held payment'
      },
      Fulfillment: {
        type: gql.GraphQLString,
        description: 'Hex value of the PREIMAGE-SHA-256 crypto-condition fulfillment  matching the held payment`s Condition'
      },
    }
  }
});

module.exports = EscrowFinish
