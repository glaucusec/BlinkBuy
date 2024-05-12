export const GQLSchema = /* GraphQL*/ `
    type Query {
    products(q: String, take: Int!, page: Int!, colors: [String], prices: [String], sizes: [String]): ProductList!,
    product(id: ID!): Product!
    }

    type ProductList {
    results: [Products!]!
    hasMore: Boolean!
    totalHits: Int!
    }

    type Products {
    id: ID
    title: String
    discountedPrice: Int
    reviewsAverage: Float
    reviewsCount: Int
    price: Float
    isActive: Boolean
    images: [String]
    sizes: [String]
    }

    type Product {
    id: ID,
    title: String,
    discountedPrice: Int,
    reviewsAverage: Float,
    reviewsCount: Int,
    price: Float,
    isActive: Boolean,
    }

`;
