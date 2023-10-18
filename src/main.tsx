import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./fonts/fonts.css";
import "./index.css";
import { legacy_createStore as createStore } from "redux";
import allReducers from "./reducers";

const store = createStore(allReducers);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
