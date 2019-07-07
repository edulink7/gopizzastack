import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import Footer from "../components/Footer";

import Login from "./pages/login";
import Orders from "./pages/orders";

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
