/*eslint-disable*/
import React, { useState, Component } from 'react';
// react components for routing our app without refresh
import { Link, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, LockOpen, PersonAdd, Person } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {

  const [isLoggedIn, setLoggedStatus] = useState(localStorage.getItem("user") ? true : false);
  const [redirectFlag, setRedirectFlag] = React.useState(false);

  const handleChangeLoggedStatus = (value) => {
    setLoggedStatus(value);
  }
  const handleLogOut = () => {
    localStorage.removeItem("user");
    handleChangeLoggedStatus(false);
    setRedirectFlag(true);
  }

  const redirect= ()=>{
    if (redirectFlag) {
      return <Redirect to='/' />
    }
  }

  const classes = useStyles();
  if (isLoggedIn === true) {
    let permiso = JSON.parse(localStorage.getItem('user')).permiso
    if (permiso == 0) {
      return (
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText="Opciones"
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              buttonIcon={Apps}
              dropdownList={[
                <Link to="/nuevoTurno" className={classes.dropdownLink}>
                  Obtener Turno
                </Link>,
                <Link to="/historiaclinica" className={classes.dropdownLink}>
                Historias Clìnicas
                </Link>
              ]}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/profile"
              color="transparent"
              className={classes.navLink}
            >
              <Person className={classes.icons} /> Perfil
            </Button>
          </ListItem>
  
          <ListItem className={classes.listItem}>
            <Button
              href=""
              color="transparent"
              className={classes.navLink}
              color="danger"
              onClick={handleLogOut}
            >
              <Person className={classes.icons} /> Cerrar Sesion
            </Button>
          </ListItem>
        </List>
      );
    } else if (permiso != 0) {
      return (
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText="Opciones"
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              buttonIcon={Apps}
              dropdownList={[
                <Link to="/nuevoTurno" className={classes.dropdownLink}>
                  Obtener Turno
                </Link>,
                <Link to="/dashboard" className={classes.dropdownLink}>
                Panel de Administración
                </Link>,
                <Link to="/historiaclinica" className={classes.dropdownLink}>
                Historias Clìnicas
                </Link>
              ]}
            />
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/profile"
              color="transparent"
              className={classes.navLink}
            >
              <Person className={classes.icons} /> Perfil
            </Button>
          </ListItem>
  
          <ListItem className={classes.listItem}>
            <Button
              href=""
              color="transparent"
              className={classes.navLink}
              color="danger"
              onClick={handleLogOut}
            >
              <Person className={classes.icons} /> Cerrar Sesion
            </Button>
          </ListItem>
        </List>
      );
    }
  } else {
    return (
      <List className={classes.list}>
        {redirect()}
        <ListItem className={classes.listItem}>
          <Button
            href="/login"
            color="transparent"
            className={classes.navLink}
          >
            <LockOpen className={classes.icons} /> Iniciar Sesion
          </Button>
        </ListItem>

        <ListItem className={classes.listItem}>
          <Button
            href="/crearCuenta"
            color="transparent"
            className={classes.navLink}
          >
            <PersonAdd className={classes.icons} /> Crear una Cuenta
          </Button>
        </ListItem>
        </List>
    );
  }
}