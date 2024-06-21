export const GQLSchema = /* GraphQL*/ `
    type Query {
        products(q: String, take: Int!, page: Int!, colors: [String], prices: [String], sizes: [String]): ProductList!,
        product(id: ID!): Product!,
        latest_items: [LatestItem!]!                                                                                                                
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
        isBestSeller: Boolean,
        published: Boolean,
    }

    type LatestItem {
        id: ID,
        title: String,
        discountedPrice: Int,
        price: Float,
        image: String,
    }

    type LatestItems {
        latest_items: [LatestItem]
    }
`;
