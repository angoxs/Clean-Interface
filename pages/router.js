const { Router } = require("react-router-dom");
const { default: MyApp } = require("./_app");
import React from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <MyApp />
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
