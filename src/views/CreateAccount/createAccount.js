import React from "react";
import {Redirect} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import PersonIcon from '@material-ui/icons/Person';
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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import NacimientoPicker from "components/DatePicker/DatePicker.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg4.jpg";

//importo llamada a endpoint
import {register} from "../../controller/userController";

const useStyles = makeStyles(styles);

export default function CreateAccountPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");

  const [genre, setGenre] = React.useState('female');
  const [nacimiento, setNac] = React.useState(Date);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [verificPassword, setVerificPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [dni, setDNI] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [exitoCuentaNueva, setExitoCuentaNueva] = React.useState(false);
  const isLoggedIn = React.useState(localStorage.getItem("user") ? true : false);

  const classes = useStyles();
  const { ...rest } = props;

  const handleGenre = (event) => {
    console.log(event.target.value);
    setGenre(event.target.value);
  }

  const handleNacChange = (event) => {
    console.log("esta es la fecha que pasa nac change: ", event.target.nacimiento);
    setNac(event.target.nacimiento);
  }

  const handleDataPass=(val) => {
    console.log("esta es la fecha que pasa data pass: ", val);
    setNac(val);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleVerificPassword = (event) => {
    setVerificPassword(event.target.value);
  }

  const handleName = (event) => {
    setName(event.target.value);
  }

  const handleSurname = (event) => {
    setSurname(event.target.value);
  }

  const handleDNI = (event) => {
    setDNI(event.target.value);
  }

  const handleAddress = (event) => {
    setAddress(event.target.value);
  }

  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  const createAccount=()=> {
    if (email!=="" && password!=="" && dni!=="" && address!=="" && name!=="" && surname!=="" && verificPassword!=="" && nacimiento!=="") {
      validarCreateAccount();
    }
    else {
      alert("Debe completar todos los campos");
    }
  }

  //Ejecuto el endopoint para validar login
  const validarCreateAccount= async function() {
      let datos = {
        email: email,
        password: password,
        name: name,
        surname: surname,
        dni: dni,
        sexo: genre,
        fechaNac: nacimiento,
        domicilio: address
      }
      let getRegister = await register(datos);
      if (getRegister.rdo===0 ) {
        setExitoCuentaNueva(true);
      } else {
        alert(getRegister.mensaje)
      }
  }

  const redirect= ()=>{
    if (exitoCuentaNueva || isLoggedIn[0]) {
      return <Redirect to='/' />
    }
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
                      <h2><b>Crear una cuenta</b></h2>
                    </CardHeader>
                    <CardBody>
                    <CustomInput
                        labelText="Nombre"
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          onChange: (event) => handleName(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <PersonIcon className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
  
                    <CustomInput
                        labelText="Apellido"
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          onChange: (event) => handleSurname(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <PersonIcon className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
  
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Genero</FormLabel>
                      <RadioGroup aria-label="Sexo" name="gender1" value={genre} onChange={handleGenre}>
                        <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                        <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                        <FormControlLabel value="other" control={<Radio />} label="Otro" />
                      </RadioGroup>
                    </FormControl>
  
                    <NacimientoPicker passChildData={handleDataPass} value={nacimiento} onChange={handleNacChange} ></NacimientoPicker>
  
                    <CustomInput
                        labelText="Domicilio"
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          onChange: (event) => handleAddress(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <LocationOnIcon className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
  
                    <CustomInput
                        labelText="DNI"
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "number",
                          onChange: (event) => handleDNI(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <FingerprintIcon className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
  
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
                      
                      <CustomInput
                        labelText="Repita la Contraseña"
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          onChange: (event) => handleVerificPassword(event),
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
                      <Button onClick={createAccount} simple color="primary" size="lg">
                        Crear Cuenta
                      </Button>
                    </CardFooter>
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
