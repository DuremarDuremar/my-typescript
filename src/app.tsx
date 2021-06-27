import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Film from "./pages/film";

import { Global, Content } from "./styles/style_app";

const App: React.FC = () => {
  return (
    <Router>
      <Global />
      <Content>
        <Switch>
          <Route path="/" exact component={Main} />

          <Route path="/:id" component={Film} />
        </Switch>
      </Content>
    </Router>
  );
};

export default App;
