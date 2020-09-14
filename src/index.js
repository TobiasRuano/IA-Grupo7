import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
// import HistoriasClinicas from "views/LandingPage/HistoriasClinicas.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import Turnos from "views/Turnos/MisTurnosPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ObtenerTurnos from "views/Turnos/ObtenerTurnosPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/historias-clinicas" component={HistoriasClinicas} /> */}
      <Route path="/h" component={LandingPage} />
      <Route path="/turnos" component={Turnos} />
      <Route path="/login" component={LoginPage} />
      <Route path="/obtenerTurno" component={ObtenerTurnos} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
