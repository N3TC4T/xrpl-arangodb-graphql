const gql = require('graphql-sync');

const {amountType} = require('../../fields')

const Payment = new gql.GraphQLObjectType({
  name: 'Payment transaction',
  description: 'A Payment transaction represents a transfer of value from one account to another.',
  fields() {
    return {
      Amount: {
        type: new gql.GraphQLNonNull(amountType),
        description: 'The amount of currency to deliver'
      },
      Destination: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'The unique address of the account receiving the payment'
      },
      DestinationTag: {
        type: gql.GraphQLInt,
        description: 'Arbitrary tag that identifies the reason for the payment to the destination, or a hosted recipient to pay'
      },
      InvoiceID: {
        type: gql.GraphQLString,
        description: 'Arbitrary 256-bit hash representing a specific reason or identifier for this payment'
      },
      Paths: {
        type: gql.GraphQLString,
        description: 'Array of payment paths to be used for this transaction. Must be omitted for XRP-to-XRP transactions'
      },
    }
  }
});

module.exports = Payment
