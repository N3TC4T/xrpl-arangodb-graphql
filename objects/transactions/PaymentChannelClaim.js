const gql = require('graphql-sync');

const {amountType} = require('../../fields')

const PaymentChannelClaim = new gql.GraphQLObjectType({
  name: 'PaymentChannelClaim transaction',
  description: 'Claim XRP from a payment channel, adjust the payment channel`s expiration, or both',
  fields() {
    return {
      Channel: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'The unique ID of the channel, as a 64-character hexadecimal string'
      },
      Amount: {
        type: amountType,
        description: 'The amount of XRP, authorized by the Signature'
      },
      Balance: {
        type: amountType,
        description: 'Total amount of XRP, delivered by this channel after processing this claim'
      },
      Signature: {
        type: gql.GraphQLString,
        description: 'The signature of this claim, as hexadecimal. The signed message contains the channel ID and the amount of the claim'
      },
      PublicKey: {
        type: gql.GraphQLString,
        description: 'The public key used for the signature, as hexadecimal'
      }
    }
  }
});

module.exports = PaymentChannelClaim
