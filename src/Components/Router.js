import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Components
import Header from "./Header";
// Route
import Home from "../Routes/Home";
export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Redirect from="*" to="/" />
        </Switch>
      </>
    </Router>
  );
};
