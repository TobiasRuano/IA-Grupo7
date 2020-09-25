import React from "react";

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

import DatePicker from "components/DatePicker/DatePicker.js"

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function NuevoTurnoPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [esp, setEsp] = React.useState('');
  const [profesional, setProfesional] = React.useState('');
  const handleEspChange = (event) => {
    setEsp(event.target.value);
  };
  const handleProfChange = (event) => {
    setProfesional(event.target.value);
  }
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
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
                      </Select>
                      <FormHelperText>Estamos trabajando para agregar mas profesionales</FormHelperText>
                    </FormControl>
                    <div>
                      <DatePicker></DatePicker>
                    </div>

                    <CustomInput
                      labelText="DNI"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "number",
                        endAdornment: (
                          <InputAdornment position="end">
                            <FingerprintIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button href="/turnos" simple color="primary" size="lg">
                      Chequear disponibilidad
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