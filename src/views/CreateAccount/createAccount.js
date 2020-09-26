import React from "react";
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

import NacimientoPicker from "components/DatePicker/NacimientoPicker.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";

const useStyles = makeStyles(styles);

export default function CreateAccountPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [value, setValue] = React.useState('female');
  const [nacimiento, setNac] = React.useState(Date);
  const classes = useStyles();
  const { ...rest } = props;

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleNacChange = (event) => {
    setNac(event.target.nacimiento);
    console.log("Holaaaa");
  }
  setTimeout(function() {
    setCardAnimation("");
  }, 700);

  function createAccount() {
    console.log("Testing create account button");
  };


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
                        endAdornment: (
                          <InputAdornment position="end">
                            <PersonIcon className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />

                  <FormControl component="fieldset">
                    <FormLabel component="legend">Genero</FormLabel>
                    <RadioGroup aria-label="Sexo" name="gender1" value={value} onChange={handleChange}>
                      <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                      <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                      <FormControlLabel value="other" control={<Radio />} label="Otro" />
                    </RadioGroup>
                  </FormControl>

                  <NacimientoPicker value={nacimiento} onChange={handleNacChange} ></NacimientoPicker>

                  <CustomInput
                      labelText="Domicilio"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
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
                    <Button onClick={createAccount} href="/profile" simple color="primary" size="lg">
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
