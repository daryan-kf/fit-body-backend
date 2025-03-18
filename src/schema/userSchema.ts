import gql from "graphql-tag";

const userSchema = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    createdAt: String!
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): AuthPayload!
    login(email: String!, password: String!): AuthPayload!
  }
`;

export default userSchema;
