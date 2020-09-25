import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
// import HistoriasClinicas from "views/LandingPage/HistoriasClinicas.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import Turnos from "views/Turnos/TurnosPage.js";
import Login from "views/LoginPage/LoginPage.js";
import ObtenerTurnos from "views/Turnos/NuevoTurnoPage.js";
import crearCuenta from "views/CreateAccount/createAccount.js";


import profile from "views/UserProfile/UserProfile.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      {/* <Route path="/historias-clinicas" component={HistoriasClinicas} /> */}
      <Route path="/h" component={LandingPage} />
      <Route path="/turnos" component={Turnos} />
      <Route path="/login" component={Login} />
      <Route path="/nuevoTurno" component={ObtenerTurnos} />
      <Route path="/crearCuenta" component={crearCuenta} />


      <Route path="/profile" component={profile} />


      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
