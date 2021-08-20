const gql = require('graphql-sync');

const TicketCreate = new gql.GraphQLObjectType({
  name: 'TicketCreate transaction',
  description: 'A TicketCreate transaction sets aside one or more sequence numbers as Tickets.',
  fields() {
    return {
        TicketCount: {
        type: new gql.GraphQLNonNull(gql.GraphQLInt),
        description: 'How many Tickets to create. This must be a positive number and cannot cause the account to own more than 250 Tickets after executing this transaction'
      }
    }
  }
});

module.exports = TicketCreate
