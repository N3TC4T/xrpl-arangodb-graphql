const gql = require('graphql-sync');

const {
  transactionType
} = require('../fields')

const transactions = require('../objects/transactions')

const transactionInterface = new gql.GraphQLInterfaceType({
  name: 'Transaction',
  description: 'Transaction in XRPL',
  fields() {
    return {
      hash: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'Transaction hash'
      },
      TransactionType: {
        type: new gql.GraphQLNonNull(transactionType),
        description: 'Transaction type'
      },
      Account: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'Transaction initializer account addres'
      },
      Fee: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'Transaction Fee'
      },
      SigningPubKey: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'SigningPubKey'
      },
      TxnSignature: {
        type: new gql.GraphQLNonNull(gql.GraphQLString),
        description: 'TxnSignature'
      },
      Sequence: {
        type: new gql.GraphQLNonNull(gql.GraphQLInt),
        description: 'Transaction Sequence'
      },
      LedgerIndex: {
        type: new gql.GraphQLNonNull(gql.GraphQLInt),
        description: 'LedgerIndex'
      }
    };
  },
  resolveType(tx) {
    return transactions[tx.TransactionType]
  }
});

module.exports = transactionInterface


