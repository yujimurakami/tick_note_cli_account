import { gql } from "@apollo/client";

export const SIGN_IN_ACCOUNT_MUTATION = gql`
  mutation SignInAccount($email: String!, $password: String!) {
    signInAccount(input: { email: $email, password: $password }) {
      account {
        id
        email
      }
      token
    }
  }
`;
export const SIGN_UP_ACCOUNT_MUTATION = gql`
  mutation SignUpAccount(
    $username: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    signUpAccount(
      input: {
        username: $username
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    ) {
      account {
        id
        email
      }
      token
    }
  }
`;
