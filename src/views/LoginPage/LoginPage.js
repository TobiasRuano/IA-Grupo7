import React from "react";
import {Redirect} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg4.jpg";

//importo llamada a endpoint
import {login} from "../../controller/userController";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [succesfullyLoggedIn, setSuccesfullyLoggedIn] = React.useState(false);
  const isLoggedIn = React.useState(localStorage.getItem("user") ? true : false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const classes = useStyles();
  const { ...rest } = props;
  
  //Valido campos y llamo al endpoint
  const loginUser=()=> {
    if (email !== "" && password !== "") {
      validarLogin();
    }
    else {
      alert("Debe completar usuario y password");
    }
  }

  //Ejecuto el endpoint para validar login
  const validarLogin= async function() {
    let datos = {
      email: email,
      password:password
    }
    let getLogin = await login(datos);
    if (getLogin.rdo===0) {
      let user = getLogin.userData;
      console.log(user.name);
      let data = {
        name: user.name,
        surname: user.surname,
        email: user.email,
        dni: user.dni,
        fechanac: user.fechaNac,
        domicilio: user.domicilio,
        permiso: user.permiso,
        telefono: user.telefono,
        sexo: user.sexo
      }
      localStorage.setItem("user", JSON.stringify(data));
      setSuccesfullyLoggedIn(true);
    }
    if (getLogin.rdo===1) {
      alert(getLogin.mensaje)
    }
  }

  const redirect= ()=>{
    console.log("Valored de succ y is:", succesfullyLoggedIn, isLoggedIn);
    if (succesfullyLoggedIn || isLoggedIn[0]) {
      return <Redirect to='/' />
    }
  }

  const handleEmail=(event)=>{
    setEmail(event.target.value);
  }

  const handlePassword=(event)=>{   
    setPassword(event.target.value);
  }

  function handleCreateAccountClick() {
    window.location.assign("/crearCuenta");
  }

  let button;
  if (true) {
    button = <Button onClick={handleCreateAccountClick} simple color="primary" size="lg"> Crear una cuenta </Button>
  }

  if (isLoggedIn[0] == true) {
    return(
      <div>{redirect()}</div>
    );
  } else {
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Home"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        {redirect()}
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h2><b>Iniciar Sesion</b></h2>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Mail"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                          onChange: (event) => handleEmail(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Contraseña"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          onChange: (event) => handlePassword(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          ),
                          autoComplete: "off"
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button onClick={loginUser} simple color="primary" size="lg">
                        Continuar
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
  
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form}>
                    <CardBody>
                      {button}
                    </CardBody>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
            </div>
          <Footer whiteFont />
        </div>
      </div>
    ); 
  }
}
