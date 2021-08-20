const gql = require('graphql-sync');

const {amountType, pathType} = require('../../fields')

const CheckCash = new gql.GraphQLObjectType({
  name: 'CheckCash transaction',
  description: 'A Payment transaction represents a transfer of value from one account to another.',
  fields() {
    return {
      Amount: {
            type: new gql.GraphQLNonNull(amountType),
            description: 'Redeem the Check for exactly this amount, if possible'
      },
      CheckID: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: '	The ID of the Check ledger object to cash, as a 64-character hexadecimal string'
      },
      DeliverMin: {
        type: amountType,
        description: 'Redeem the Check for at least this amount and for as much as possible'
      }
    }
  }
});

module.exports = CheckCash
