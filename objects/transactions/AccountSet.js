const gql = require('graphql-sync');

const AccountSet = new gql.GraphQLObjectType({
  name: 'AccountSet transaction',
  description: 'An AccountSet transaction modifies the properties of an account in the XRP Ledger.',
  fields() {
    return {
      Domain: {
            type: gql.GraphQLString,
            description: 'The domain that owns this account, as a string of hex representing the ASCII for the domain in lowercase'
      },
      EmailHash: {
        type: gql.GraphQLString,
        description: 'Hash of an email address to be used for generating an avatar image'
      },
      MessageKey: {
        type: gql.GraphQLString,
        description: 'Public key for sending encrypted messages to this account'
      },
      ClearFlag	: {
        type: gql.GraphQLInt,
        description: 'Unique identifier of a flag to disable for this account'
      },
      SetFlag: {
        type: gql.GraphQLInt,
        description: 'Integer flag to enable for this account'
      },
      TransferRate: {
        type: gql.GraphQLInt,
        description: 'The fee to charge when users transfer this account`s issued currencies'
      },
      TickSize	: {
        type: gql.GraphQLInt,
        description: 'Tick size to use for offers involving a currency issued by this address'
      },
      WalletLocator: {
        type: gql.GraphQLString,
        description: 'Not used'
      },
      WalletSize: {
        type: gql.GraphQLInt,
        description: 'Not used'
      }
    }
  }
});

module.exports = AccountSet
