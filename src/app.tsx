import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Film from "./pages/film";
import { fetchUsers } from "./store/actions";
import { Global, Content } from "./styles/style_app";

const App = () => {
  console.log(fetchUsers());

  return (
    <Router>
      <Global />
      <Content>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/film">
            <Film />
          </Route>
        </Switch>
      </Content>
    </Router>
  );
};

export default App;
