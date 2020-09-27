import React from "react";
// @material-ui/core components

import classNames from "classnames";


import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";


import TablaTurnos from "components/TablaTurnos/TablaTurnos.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(styles);
const dashboardRoutes = [];

export default function TurnosPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [age, setAge] = React.useState('');
  const patientName = "Tobias";
  const classes = useStyles();
  const { ...rest } = props;

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  
  return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Inicio"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
          height: 400,
          color: "white"
          }}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
      >
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <h1>Bienvenido {patientName}</h1>
                <TablaTurnos></TablaTurnos>
            </div>
        </div>
        <Footer whiteFont />
      </div>
      </div>
  );
}
