import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
// import "intersection-observer";
import { composeWithDevTools } from "redux-devtools-extension";
import { render, screen } from "@testing-library/react";
import Top from "./top";
import { rootReducer } from "../store/combine";

const renderWithRedux = (
  component: any,
  {
    store = createStore(
      rootReducer,
      composeWithDevTools(applyMiddleware(thunk))
    ),
  } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("render Top", () => {
  it("render Top component", () => {
    renderWithRedux(<Top />);
  });
});
