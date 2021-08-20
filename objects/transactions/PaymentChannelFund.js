const gql = require('graphql-sync');

const {amountType} = require('../../fields')

const PaymentChannelFund = new gql.GraphQLObjectType({
  name: 'PaymentChannelFund transaction',
  description: 'Add additional XRP to an open payment channel, and optionally update the expiration time of the channel.',
  fields() {
    return {
    Channel: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'The unique ID of the channel to fund, as a 64-character hexadecimal string'
      },
      Amount: {
        type: new gql.GraphQLNonNull(amountType),
        description: 'Amount of XRP, to add to the channel'
      },
      Expiration	: {
        type: gql.GraphQLInt,
        description: 'New Expiration time to set for the channel, in timestamp'
      }
    }
  }
});

module.exports = PaymentChannelFund
