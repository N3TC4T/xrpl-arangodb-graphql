const gql = require('graphql-sync');

const EscrowCancel = new gql.GraphQLObjectType({
  name: 'EscrowCancel transaction',
  description: 'Return escrowed XRP to the sender.',
  fields() {
    return {
        Owner: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'Address of the source account that funded the escrow payment'
      },
      OfferSequence: {
        type: new gql.GraphQLNonNull(gql.GraphQLInt),
        description: 'Transaction sequence (or Ticket  number) of EscrowCreate transaction that created the escrow to cancel'
      }
    }
  }
});

module.exports = EscrowCancel
