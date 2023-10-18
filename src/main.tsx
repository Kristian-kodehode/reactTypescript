import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./fonts/fonts.css";
import "./index.css";
// import { createStoreHook } from "react-redux";
import { legacy_createStore as createStore } from "redux";

// STORE -> GLOBAL STATE

// ACTION -> INCREMENT
const increment = () => {
  return {
    type: "INCREMENT",
  };
};
const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
// REDUCER

const counter = (state: number = 0, action: { type: string } | undefined) => {
  switch (action?.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);

// Display in console
store.subscribe(() => console.log(store.getState()));
// DISPATCH -> EXECUTES ACTION
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
