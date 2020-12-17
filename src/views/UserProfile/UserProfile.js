import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
import classNames from "classnames";

import profile from "assets/img/faces/christian.jpg";

import TablaTurnos from "components/TablaTurnos/TablaTurnos.js";
import Acciones from "views/UserProfile/Acciones.js";

import {updateUser} from "../../controller/userController";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

const useStylesTheme = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function UserProfile(props) {
  const classes = useStyles();
  const classes1 = useStylesTheme();
  const { ...rest } = props;
  //datos paciente
  const isLoggedIn = React.useState(localStorage.getItem("user") ? true : false);
  const [name, setName] = React.useState(isLoggedIn[0] ? JSON.parse(localStorage.getItem('user')).name : "null");
  const [surname, setSurname] = React.useState(isLoggedIn[0] ? JSON.parse(localStorage.getItem('user')).surname : "null");
  const [dni, setDni] = React.useState(isLoggedIn[0] ? JSON.parse(localStorage.getItem('user')).dni : "null");
  const [sexo, setSexo] = React.useState(isLoggedIn[0] ? JSON.parse(localStorage.getItem('user')).sexo : "null");
  const [fechanac, setFechanac] = React.useState(isLoggedIn[0] ? JSON.parse(localStorage.getItem('user')).fechanac : "null");
  const [email, setEmail] = React.useState(isLoggedIn[0] ? JSON.parse(localStorage.getItem('user')).email : "null");
  const [domicilio, setDom] = React.useState(isLoggedIn[0] ? JSON.parse(localStorage.getItem('user')).domicilio : "null");
  const [telefono, setTel] = React.useState(isLoggedIn[0] ? JSON.parse(localStorage.getItem('user')).telefono : "null");
  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeDni = (event) => {
    setDni(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeFechanac = (event) => {
    setFechanac(event.target.value);
  };
  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };
  const handleChangeSurname = (event) => {
    setSurname(event.target.value);
  };
  const handleChangeTel = (event) => {
    setTel(event.target.value);
  };
  const handleChangeDom = (event) => {
    setDom(event.target.value);
  };

  const handleActualizarDatos = () => {
    if (isDisabled == true) {
      setIsDisabled(false);
    } else {
      handleDataUpdate();
      setIsDisabled(true);
    }
  }

  const handleDataUpdate = async function() {
    let datos = {
        name: name,
        surname: surname,
        dni: dni,
        genre: sexo,
        birthday: fechanac,
        email: email,
        address: domicilio,
        telefono: telefono
    }
    let getResponse = await updateUser(datos);
    if (getResponse.rdo===0) {
    }
    if (getResponse.rdo===1) {
      alert(getResponse.mensaje)
    }
  }
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  if (isLoggedIn[0] == true) {
    return (
      <div>
        <Header
          color="transparent"
          brand="Home"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/bg4.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    {<div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>}
                    <div className={classes.name}>
                      <h3 className={classes.title}>{name} {surname}</h3>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <Card>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>Datos Generales </h4>
                    </CardHeader>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                          <form
                            className={classes1.root}
                            nonValidate
                            autoComplete="off"
                          >
                            <FormControl disabled>
                              <InputLabel htmlFor="component-surname">
                                Dni
                              </InputLabel>
                              <Input
                                id="component-disabled"
                                value={dni}
                              />
                            </FormControl>
                          </form>
                        </GridItem>
                      </GridContainer>
  
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                          <form
                            className={classes1.root}
                            nonValidate
                            autoComplete="off"
                          >
                            <FormControl disabled={isDisabled}>
                              <InputLabel htmlFor="component-sexo">
                                Sexo
                              </InputLabel>
                              <Input
                                id="component-disabled"
                                value={sexo}
                                onChange={handleChangeSexo}
                              />
                            </FormControl>
                          </form>
                        </GridItem>
  
                        <GridItem xs={12} sm={12} md={4}>
                          <form
                            className={classes1.root}
                            nonValidate
                            autoComplete="off"
                          >
                            <FormControl disabled={isDisabled}>
                              <InputLabel htmlFor="component-fechanac">
                                Fecha de Nacimiento
                              </InputLabel>
                              <Input
                                id="component-disabled"
                                value={fechanac}
                                onChange={handleChangeFechanac}
                              />
                            </FormControl>
                          </form>
                        </GridItem>
  
                        <GridItem xs={12} sm={12} md={4}>
                          <form
                            className={classes1.root}
                            nonValidate
                            autoComplete="off"
                          >
                            <FormControl disabled={isDisabled}>
                              <InputLabel htmlFor="component-surname">
                                Telefono
                              </InputLabel>
                              <Input
                                id="component-disabled"
                                value={telefono}
                                onChange={handleChangeTel}
                              />
                            </FormControl>
                          </form>
                        </GridItem>
                      </GridContainer>
  
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                          <form
                            className={classes1.root}
                            nonValidate
                            autoComplete="off"
                          >
                            <FormControl disabled={isDisabled}>
                              <InputLabel htmlFor="component-domicilio">
                                Domicilio
                              </InputLabel>
                              <Input
                                id="component-disabled"
                                value={domicilio}
                                onChange={handleChangeDom}
                              />
                            </FormControl>
                          </form>
                        </GridItem>
  
                        <GridItem xs={12} sm={12} md={4}>
                          <form
                            className={classes1.root}
                            nonValidate
                            autoComplete="off"
                          >
                            <FormControl disabled={isDisabled}>
                              <InputLabel htmlFor="component-email">
                                E-mail
                              </InputLabel>
                              <Input
                                id="component-disabled"
                                value={email}
                                onChange={handleChangeEmail}
                              />
                            </FormControl>
                          </form>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <Button
                            color="primary"
                            size="lg"
                            onClick={handleActualizarDatos}
                          >
                          Actualizar Datos
                          </Button>
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
  
              <GridContainer justify="center">
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Mis Turnos </h4>
                  <p>Aqui puede manejar sus turnos actuales</p>
                </CardHeader>
                <CardBody >
                  <TablaTurnos dniPaciente={dni}></TablaTurnos>
                </CardBody>
              </Card>
              </GridContainer>
              <Acciones dniPaciente={dni}></Acciones>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header
          color="transparent"
          brand="Home"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/bg4.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                    <CardHeader color="primary">
                      <h4 className={classes.cardTitleWhite}>No tienes permiso para ver esta pagina </h4>
                    </CardHeader>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
