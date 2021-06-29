import React, { useEffect, FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";

import Main from "./pages/main";
import Film from "./pages/film";
import { Global, Content } from "./styles/style_app";
import { respons1000, respons715 } from "./store/actions/res_actions";
const App: FC = () => {
  const dispatch = useDispatch();
  const res1000 = useMediaQuery({ query: "(min-width: 1000px)" });
  const res715 = useMediaQuery({ query: "(min-width: 715px)" });

  useEffect(() => {
    dispatch(respons1000(res1000));
    dispatch(respons715(res715));
  }, [res1000, res715, dispatch]);

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
