import React from "react";
import ReactDOM from "react-dom/client";
/* import ReactDOM from 'react-dom'; */
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import ContextProvider from "./reducer/context.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ContextProvider>
);
