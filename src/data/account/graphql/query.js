import { gql } from "@apollo/client";

export const GET_CURRENT_ACCOUNT = gql`
  query getCurrentAccount {
    currentAccount {
      id
      email
    }
  }
`;
