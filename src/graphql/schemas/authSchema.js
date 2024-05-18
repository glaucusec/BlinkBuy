export const GQLAuthSchema = /* Graphql */ `
    type Mutation {
        login(email: String, password: String) : AuthPayload
    }

    type AuthPayload {
        token: String
        user: User
    }

    type User {
        id: ID!
        name: String!
        email: String!
    }
`;
