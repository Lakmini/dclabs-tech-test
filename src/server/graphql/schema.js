import { buildSchema } from 'graphql';

const QUERY = `
  enum Currency {
    GBP
  }

  type Amount {
    main: Int
  }

  type ProductCost {
    currency: Currency
    amount: Amount
  }

  type Product {
    name: String
    description: String
    cost: ProductCost
    contractLength: String
  }

  type Query {
    products: [Product]
    basket: [Product]
  }
`

const MUTATION = `
  type Response {
    success: Boolean
  }

  type Mutation {
    addToBasket(
      productName: String!
    ): Response

    removeFromBasket(
      productName: String!
    ): Response
  }
`

export const schema = buildSchema(`
  ${QUERY}
  ${MUTATION}
`);