import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";

import "./index.css";
import App from "./App";
import { GlobalStateContext } from "./context/GlobalState";

ReactDOM.render(
  <GlobalStateContext>
    <App />
  </GlobalStateContext>,
  document.getElementById("root")
);
