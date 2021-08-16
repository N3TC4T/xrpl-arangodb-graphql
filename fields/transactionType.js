const transactionType = new gql.GraphQLEnumType({
  name: 'TransactionsType',
  description: 'Types of transactions',
  values: {
    AccountSet: {
      value: 'AccountSet',
      description: 'Set options on an account'
    },
    AccountDelete: {
      value: 'AccountDelete',
      description: 'Delete an account'
    },
    CheckCancel: {
      value: 'CheckCancel',
      description: 'Cancel a check'
    },
    CheckCash: {
      value: 'CheckCash',
      description: 'Redeem a check'
    },
    CheckCreate: {
      value: 'CheckCreate',
      description: 'Create a check'
    },
    DepositPreauth: {
      value: 'DepositPreauth',
      description: 'Preauthorizes an account to send payments to this one'
    },
    EscrowCancel: {
      value: 'EscrowCancel',
      description: 'Reclaim escrowed XRP'
    },
    EscrowCreate: {
      value: 'EscrowCreate',
      description: 'Create an escrowed XRP payment'
    },
    EscrowFinish: {
      value: 'EscrowFinish',
      description: 'Deliver escrowed XRP to recipient'
    },
    OfferCancel: {
      value: 'OfferCancel',
      description: 'Withdraw a currency-exchange order'
    },
    OfferCreate: {
      value: 'OfferCreate',
      description: 'Submit an order to exchange currency'
    },
    PaymentChannelClaim: {
      value: 'PaymentChannelClaim',
      description: 'Claim money from a payment channel'
    },
    PaymentChannelCreate: {
      value: 'PaymentChannelCreate',
      description: 'Open a new payment channel'
    },
    PaymentChannelFund: {
      value: 'PaymentChannelFund',
      description: 'Add more XRP to a payment channel'
    },
    SetRegularKey: {
      value: 'SetRegularKey',
      description: 'Add, remove, or modify an account`s regular key pair'
    },
    SignerListSet: {
      value: 'SignerListSet',
      description: 'Add, remove, or modify an account`s multi-signing list'
    },
    TicketCreate: {
      value: 'TicketCreate',
      description: 'Set aside one or more sequence numbers as Tickets'
    },
    TrustSet: {
      value: 'TrustSet',
      description: 'Add or modify a trust line'
    }
  }
});

module.exports = transactionType


