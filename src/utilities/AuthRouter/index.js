import { Route, Redirect } from "react-router-dom";
import PersistenceKeys from "../constants/persistenceKeys";

const AuthRouter = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem(PersistenceKeys.AUTH_TOKEN);
  return (
    <Route
      {...rest}
      render={(props) => (token ? <Component {...props} /> : <Redirect to="/sign_in" />)}
    />
  );
};

export default AuthRouter;
