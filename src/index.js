import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import Login from "views/LoginPage/LoginPage.js";
import ObtenerTurnos from "views/Turnos/NuevoTurnoPage.js";
import crearCuenta from "views/CreateAccount/createAccount.js";


import profile from "views/UserProfile/UserProfile.js";
import UpdateData from "views/UserProfile/ActualizarDatos.js";
import recetas from "views/Recetas.js";
import dashboard from "views/Dashboard.js";
import HistoriasClinicas from "views/HistoriasClinicas.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/nuevoTurno" component={ObtenerTurnos} />
      <Route path="/crearCuenta" component={crearCuenta} />
      <Route path="/historiaclinica" component={HistoriasClinicas} />

      <Route path="/profile" component={profile} />
      <Route path="/actualizardatos" component={UpdateData} />
      <Route path="/recetas" component={recetas} />
      <Route path="/dashboard" component={dashboard} />

      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
