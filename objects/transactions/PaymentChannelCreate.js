const gql = require('graphql-sync');

const {amountType} = require('../../fields')

const PaymentChannelCreate = new gql.GraphQLObjectType({
  name: 'PaymentChannelCreate transaction',
  description: 'Create a unidirectional channel and fund it with XRP. The address sending this transaction becomes the "source address" of the payment channel.',
  fields() {
    return {
      Amount: {
        type: new gql.GraphQLNonNull(amountType),
        description: 'Amount of XRP, to deduct from the sender`s balance and set aside in this channel'
      },
      Destination: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'Address to receive XRP claims against this channel. This is also known as the "destination address" for the channel'
      },
      DestinationTag: {
        type: gql.GraphQLInt,
        description: 'Arbitrary tag to further specify the destination for this payment channel, such as a hosted recipient at the destination address'
      },
      SettleDelay: {
        type: new gql.GraphQLNonNull(gql.GraphQLInt),
        description: 'Amount of time the source address must wait before closing the channel if it has unclaimed XRP'
      },
      PublicKey: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'The public key of the key pair the source will use to sign claims against this channel, in hexadecimal. This can be any secp256k1 or Ed25519 public key'
      },
      CancelAfter	: {
        type: gql.GraphQLInt,
        description: 'The time, in timestamp, when this channel expires'
      }
    }
  }
});

module.exports = PaymentChannelCreate
