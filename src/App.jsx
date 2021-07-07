import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./scenes/Home";
import SignIn from "./scenes/SignIn";
import SignUp from "./scenes/SignUp";
import { ApolloProvider } from "@apollo/client";
import client from "./utilities/graphqlClient";
import "./styles/App.less";
import "./styles/global.scss";
import { RecoilRoot } from "recoil";
import AuthRouter from "./utilities/AuthRouter";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <BrowserRouter>
          <Switch>
            <AuthRouter exact path="/" component={Home} />
            <Route exact path="/sign_up" component={SignUp} />
            <Route exact path="/sign_in" component={SignIn} />
          </Switch>
        </BrowserRouter>
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
