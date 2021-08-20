const gql = require('graphql-sync');

const {amountType} = require('../../fields')

const CheckCreate = new gql.GraphQLObjectType({
  name: 'CheckCreate transaction',
  description: 'Create a Check object in the ledger, which is a deferred payment that can be cashed by its intended destination.',
  fields() {
    return {
      Destination: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'The unique address of the account that can cash the Check'
      },
      DestinationTag: {
        type: gql.GraphQLInt,
        description: 'Arbitrary tag that identifies the reason for the Check, or a hosted recipient to pay'
      },
      InvoiceID: {
        type: gql.GraphQLString,
        description: 'Arbitrary 256-bit hash representing a specific reason or identifier for this payment'
      },
      Expiration: {
        type: gql.GraphQLInt,
        description: 'Time after which the Check is no longer valid, in timestamp'
      },
      SendMax: {
        type: amountType,
        description: 'Maximum amount of source currency the Check is allowed to debit the sender'
      }
    }
  }
});

module.exports = CheckCreate
