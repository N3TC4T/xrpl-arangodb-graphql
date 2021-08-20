const gql = require('graphql-sync');

const {amountType, pathType} = require('../../fields')

const TrustSet = new gql.GraphQLObjectType({
  name: 'TrustSet transaction',
  description: 'Create or modify a trust line linking two accounts.',
  fields() {
    return {
      LimitAmount: {
        type: new gql.GraphQLNonNull(amountType),
        description: 'Amount of XRP, to deduct from the sender`s balance and escrow'
      },
      QualityIn: {
        type: gql.GraphQLInt,
        description: 'Value incoming balances on this trust line at the ratio of this number per 1,000,000,000 units'
      },
      QualityOut: {
        type: gql.GraphQLInt,
        description: 'Value outgoing balances on this trust line at the ratio of this number per 1,000,000,000 units'
      },
    }
  }
});

module.exports = TrustSet
