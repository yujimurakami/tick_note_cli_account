import { atom, useRecoilState } from "recoil";
import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_ACCOUNT } from "data/account/graphql/query";
import PersistenceKeys from "utilities/constants/persistenceKeys";
const accountState = atom({
  key: "accountState",
  default: undefined,
});
import { useHistory } from "react-router-dom";

const useCurrentAccount = () => {
  const [account, setAccount] = useRecoilState(accountState);
  const { data, loading } = useQuery(GET_CURRENT_ACCOUNT);
  const history = useHistory();

  useEffect(() => {
    if (!loading) {
      if (data) {
        setAccount(data.currentAccount);
      } else {
        history.push("sign_in");
      }
    }
  }, [loading]);

  const setCurrentAccount = (account) => {
    setAccount(account);
  };

  const signOut = () => {
    localStorage.removeItem(PersistenceKeys.AUTH_TOKEN);
    setAccount(undefined);
    history.push("/sign_in");
  };

  return { account, setCurrentAccount, signOut };
};

export default useCurrentAccount;
