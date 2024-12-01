import { gql } from "@/graphql";

export const GET_ME = gql(`
  query GetMe($accessToken: String!) {
    me(accessToken: $accessToken) {
      id
      email
    }
  }
`);

export const SIGN_IN = gql(`
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      accessToken
      refreshToken
    }
  }
`);

export const SIGN_UP = gql(`
  mutation RegisterUser($input: RegisterUserInput!) {
    registerUser(input: $input)
  }
`);
