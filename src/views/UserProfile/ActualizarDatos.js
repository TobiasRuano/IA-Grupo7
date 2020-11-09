import React from "react";
// @material-ui/core components
import {Redirect} from "react-router-dom";
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
import SectionDownload from "views/UserProfile/SectionDownload.js";

//importo llamada a endpoint
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

export default function ActualizarDatos(props) {
  const classes = useStyles();
  const classes1 = useStylesTheme();
  const { ...rest } = props;
  //datos paciente
  const [name, setName] = React.useState("Tobias");
  const [surname, setSurname] = React.useState("Ruano");
  const [dni, setDni] = React.useState("00000001");
  const [sexo, setSexo] = React.useState("Masculino");
  const [fechanac, setFechanac] = React.useState("06/06/97");
  const [email, setEmail] = React.useState("truano@uade.edu.ar");
  const [domicilio, setDom] = React.useState("Lima 775");
  const [telefono, setTel] = React.useState("1515251515");

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
          console.log("redirect")
        return <Redirect to='/profile' />
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

    {/* {redirect()} */}

      <Parallax small filter image={require("assets/img/bg4.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
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
                          <FormControl enabled>
                            <InputLabel htmlFor="component-surname">
                              Dni
                            </InputLabel>
                            <Input
                              id="component-disabled"
                              value={dni}
                              onChange={handleChangeDni}
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
                          <FormControl enabled>
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
                          <FormControl enabled>
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
                          <FormControl enabled>
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
                          <FormControl enabled>
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
                          <FormControl enabled>
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
                          onClick={handleDataUpdate}
                        >
                        Guardar Cambios
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
