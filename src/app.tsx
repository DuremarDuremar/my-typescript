import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Film from "./pages/film";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./store/actions";
import { Global, Content } from "./styles/style_app";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
