const gql = require('graphql-sync');

const OfferCancel = new gql.GraphQLObjectType({
  name: 'OfferCancel transaction',
  description: 'An OfferCancel transaction removes an Offer object from the XRP Ledger.',
  fields() {
    return {
      OfferSequence: {
        type: new gql.GraphQLNonNull(gql.GraphQLInt),
        description: 'The sequence number (or Ticket  number) of a previous OfferCreate transaction. If specified, cancel any offer object in the ledger that was created by that transaction. It is not considered an error if the offer specified does not exist'
      }
    }
  }
});

module.exports = OfferCancel
