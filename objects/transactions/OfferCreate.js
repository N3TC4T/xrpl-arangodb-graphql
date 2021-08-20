const gql = require('graphql-sync');

const {amountType, pathType} = require('../../fields')

const OfferCreate = new gql.GraphQLObjectType({
  name: 'OfferCreate transaction',
  description: 'An OfferCreate transaction is effectively a limit order. It defines an intent to exchange currencies, and creates an Offer object if not completely fulfilled when placed.',
  fields() {
    return {
        TakerGets: {
        type: new gql.GraphQLNonNull(amountType),
        description: 'The amount and type of currency being provided by the offer creator'
      },
      TakerPays: {
        type: new gql.GraphQLNonNull(amountType),
        description: 'The amount and type of currency being requested by the offer creator'
      },
      OfferSequence: {
        type: gql.GraphQLInt,
        description: 'An offer to delete first, specified in the same way as OfferCancel'
      },
      Expiration	: {
        type: gql.GraphQLInt,
        description: 'Time after which the offer is no longer active, in timestamp'
      }
    }
  }
});

module.exports = OfferCreate
