import React from "react";
import {Redirect} from "react-router-dom";

// @material-ui/core components
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from "@material-ui/core/InputAdornment";

import FingerprintIcon from '@material-ui/icons/Fingerprint';

import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import ListaTurnos from "components/ListaTurnos.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function NuevoTurnoPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const isLoggedIn = React.useState(localStorage.getItem("user") ? true : false);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [esp, setEsp] = React.useState('');
  const [profesional, setProfesional] = React.useState('');
  const [turnoElegido, setTurnoElegido] = React.useState('');
  const [dni, setDNI] = React.useState('');
  const [estado, setEstado] = React.useState(false);

  const handleEspChange = (event) => {
    setEsp(event.target.value);
  };
  const handleProfChange = (event) => {
    console.log(event.target.value);
    setProfesional(event.target.value);
  }
  const handleSelectTurno = (event) => {
    setTurnoElegido(event.target.value);
  }

  const handleDNIChange = (event) => {
    console.log(event.target.value);
    setDNI(event.target.value);
  }

  const solicitarTurno=()=> {

  //Ejecuto el endopoint para validar login
  const validarSelectTurno= async function() {
      let datos = {
        dni: dni,
        razon: esp,
        fecha: turnoElegido.fecha,
        dniMedico: turnoElegido.dniMedico,
        estado: "Asignado"
      }
      let getAsignacionTurno = await asignarTurno(datos);
      if (getAsignacionTurno.rdo===0 ) {
        setEstado(true);
      } else {
        alert(getAsignacionTurno.mensaje)
      }
  }

  const redirect= ()=>{
    if (estado) {
      return <Redirect to='/profile' />
    }
  }

  setTimeout(function () {
    setCardAnimation("");
  }, 700);

  if (isLoggedIn[0] == false) {
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Home"
          rightLinks={<HeaderLinks />}
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
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form}>
                    <h3 className={classes.divider}>No tienes permiso para ver esta pagina</h3>
                    <CardBody>
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
                    <h3 className={classes.divider}>Seleccion de turno</h3>
                    <CardBody>
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">Elija especialidad</InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={esp}
                          onChange={handleEspChange}
                        >
                          <MenuItem value="">
                            <em>Debe seleccionar una opcion</em>
                          </MenuItem>
                          <MenuItem value={10}>Consulta general</MenuItem>
                          <MenuItem value={20}>Pediatria</MenuItem>
                          <MenuItem value={30}>Ortodoncia</MenuItem>
                          <MenuItem value={40}>Cardiologia</MenuItem>
                          <MenuItem value={50}>Análisis de sangre</MenuItem>
                          <MenuItem value={60}>Rayos</MenuItem>
                          <MenuItem value={70}>Electrocardiograma</MenuItem>
                          <MenuItem value={80}>Tomografia computada</MenuItem>
                        </Select>
                        <FormHelperText>Estamos trabajando para agregar mas especialidades</FormHelperText>
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">Elija el profesional</InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={profesional}
                          onChange={handleProfChange}
                        >
                          <MenuItem value="">
                            <em>Debe seleccionar una opcion</em>
                          </MenuItem>
                          <MenuItem value={10}>Sir William Osler</MenuItem>
                          <MenuItem value={20}>Ignaz Semmelweis</MenuItem>
                          <MenuItem value={30}>Sir Joseph Lister</MenuItem>
                          <MenuItem value={40}>Sigmund Freud</MenuItem>
                          <MenuItem value={50}>Rafael Arteaga Covarrubias</MenuItem>
                          <MenuItem value={60}>Juan Quiroz</MenuItem>
                        </Select>
                        <FormHelperText>Estamos trabajando para agregar mas profesionales</FormHelperText>
                      </FormControl>
  
                      <FormControl>
                        <ListaTurnos></ListaTurnos>
                      </FormControl>
  
                      <CustomInput
                        labelText="DNI"
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "number",
                          onChange: (event) => handleDNIChange(event),
                          endAdornment: (
                            <InputAdornment position="end">
                              <FingerprintIcon className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
  
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button onClick={solicitarTurno} simple color="primary" size="lg">
                        Asignar Turno
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