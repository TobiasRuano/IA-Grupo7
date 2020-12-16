import React,{useEffect} from "react";
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

import styles from "assets/jss/material-kit-react/views/loginPage.js";
import image from "assets/img/bg7.jpg";

//importo llamada a endpoint
import {asignarTurno, getTurnosDisponibles} from "../../controller/turnoController.js";
import {getMedicos} from "../../controller/userController.js";

const useStyles = makeStyles(styles);

export default function NuevoTurnoPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const isLoggedIn = React.useState(localStorage.getItem("user") ? true : false);
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [esp, setEsp] = React.useState('');
  const [profesional, setProfesional] = React.useState('');
  const [turno, setTurno] = React.useState('');
  const [dni, setDNI] = React.useState('');
  const [estado, setEstado] = React.useState(false);
  const [arrayMedicos, setArrayMedicos] = React.useState([]);
  const [array, setArray] = React.useState([]);
  let dniMedico = -1;
  /* let turnoElegido = undefined; */
  var arrayTurnos = [];
  var arrayEsp = ["Consulta general", "Pediatria", "Ortodoncia", "Cardiologia", "Rayos", "Electrocardiograma", "Análisis de sangre", "Tomografia computada"];

  const handleEspChange = (event) => {
    setEsp(event.target.value);
  };
  const handleProfChange = (event) => {
    setTurno('');
    setProfesional(event.target.value);
    dniMedico = event.target.value;
    getTurnos();
  }

  const handleSelectTurno = (event) => {
    setTurno(event.target.value);
  }

  const handleDNIChange = (event) => {
    setDNI(event.target.value);
  }

  const solicitarTurno=()=> {
    if (turno!=="" && dni!=="" && profesional!=="" && esp!=="") {
      validarSelectTurno();
    }
    else {
      alert("Debe completar todos los campos");
    }
  }

  async function getTurnos() {
      if (dniMedico !== -1 && dniMedico !== undefined) {
        let data = await getTurnosDisponibles(dniMedico);
        for(let i=0; i<data.data.length; i++) {
          let dia = new Date(data.data[i].fecha);
          dia.setMonth(dia.getMonth() + 1);
          data.data[i].fecha = dia;
          arrayTurnos.push(data.data[i]);
        }
        setArray(arrayTurnos);
      }
  }

  useEffect(()=>{
    async function componentDidMount() {
      let data = await getMedicos();
      let array = [];
      for(let i=0; i<data.data.length; i++) {
        array.push(data.data[i]);
      }
      setArrayMedicos(array);
    }
    componentDidMount();
  },[]);

  //Ejecuto el endopoint para validar login
  const validarSelectTurno= async function() {
    let index = arrayMedicos.findIndex(x => x.dni ===profesional);
    let medico = arrayMedicos[index].name + " " + arrayMedicos[index].surname
    console.log("iddddd: ", turno.id)
      let data = {
        id: turno.id,
        userID: dni,
        razon: esp,
        fecha: turno.fecha,
        medico: medico,
        dniMedico: profesional,
        estado: "Asignado"
      }
      let getAsignacionTurno = await asignarTurno(data);
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
                          {arrayEsp.map(esp=> (
                            <MenuItem key={esp} value={esp}>{esp}</MenuItem>
                          ))}
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
                          {arrayMedicos.map(medico=> (
                            <MenuItem key={medico.dni} value={medico.dni}>{medico.name +" " + medico.surname}</MenuItem>
                          ))}
                        </Select>
                        <FormHelperText>Estamos trabajando para agregar mas profesionales</FormHelperText>
                      </FormControl>
  
                      <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-helper-label">Elija el Turno</InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={turno}
                          onChange={handleSelectTurno}
                        >
                          {array.map(Turno=> (
                            <MenuItem key={Turno._id} value={Turno}>{Turno.fecha.getDate() +"/"+ Turno.fecha.getMonth()+ "/"+ Turno.fecha.getFullYear() +" ---- Horario: "+ Turno.fecha.getUTCHours()+ ":"+ Turno.fecha.getMinutes()}</MenuItem>
                          ))}
                        </Select>
                        {<FormHelperText>Estos son los turnos disponibles</FormHelperText>}
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