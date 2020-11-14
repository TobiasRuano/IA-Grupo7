import React,{useEffect} from "react";
import {Redirect} from "react-router-dom";

// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
//import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Button from "components/CustomButtons/Button.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import CustomInput from "components/CustomInput/CustomInput.js";

//importo llamada a endpoint
import {generarTurnos} from "../controller/turnoController.js";
import {getMedicos} from "../controller/userController.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import DatePicker from "components/DatePicker/DatePicker.js";


const useStyles = makeStyles(styles);


const useStylesTheme = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Dashboard(props) {
  const classes = useStyles();
  const classes1 = useStylesTheme();
  const { ...rest } = props;
  const [arrayMedicos] = React.useState([]);
  let [dateSelected] = React.useState('');
  const [dniMedico, setDNIMedico] = React.useState('');
  const [estado, setEstado] = React.useState(false);

  useEffect(()=>{
    async function componentDidMount() {
      let data = await getMedicos();
      for(let i=0; i<data.data.length; i++) {
        arrayMedicos.push(data.data[i]);
        console.log(data.data[i]);
      }
    }
    componentDidMount();
  },[]);

  const handleDataPass=(val) => {
    console.log(val);
    dateSelected = val;
  }

  const handleDNIChange =(event) => {
    setDNIMedico(event.target.value);
  }

  const generarNuevosTurnos=()=> {
    if (dniMedico!=="" && dateSelected!=="") {
      let flag = 0;
      for (let index = 0; index < arrayMedicos.length; index++) {
        if (dniMedico == arrayMedicos[index].dni) {
          flag = 1;
        }
      }
      if (flag == 1) {
        validarGenerarTurnos();
      } else {
        alert("Debe intriducir el DNI de un medico valido");
      }
    }
    else {
      alert("Debe completar todos los campos");
    }
  }

  //Ejecuto el endopoint para validar login
  const validarGenerarTurnos= async function() {
      let datos = {
        fecha: dateSelected,
        dniMedico: dniMedico
      }
      let getTurnoResponse = await generarTurnos(datos);
      if (getTurnoResponse.rdo===0 ) {
        setEstado(true);
      } else {
        alert(getTurnoResponse.mensaje)
      }
  }

  const redirect= ()=>{
    if (estado) {
      return <Redirect to='/' />
    }
  }

  return (
    <div> 
      <Header
        absolute
        color="white"
        brand="Home"
        rightLinks={<HeaderLinks />}
        {...rest}
      />    

    {redirect()}

      <GridContainer style={{marginTop:'100px'}}>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Buscar Usuario</h4>
              <p className={classes.cardCategoryWhite}>
                
              </p>
            </CardHeader>
            <CardBody>
              <div>
              <form className={classes1.root} noValidate autoComplete="off">
                <TextField onChange={handleDNIChange} id="outlined-basic" label="DNI" variant="outlined" name="dnipaciente" />
              </form>
              <Button color="warning"> Buscar</Button>
              </div>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Buscar Historia clinica</h4>
              <p className={classes.cardCategoryWhite}>
                
              </p>
            </CardHeader>
            <CardBody>
              <div>
              <form className={classes1.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="DNI" variant="outlined" name="dnipaciente" />
              </form>
              <form className={classes1.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Secretaria" variant="outlined" name="secretaria" />
              </form>
              <Button color="warning"> Buscar</Button>
              </div>
            </CardBody>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Generar Disponibilidad de Turnos</h4>
              <p className={classes.cardCategoryWhite}>
                
              </p>
            </CardHeader>
            <CardBody>
              <div>
              <form className={classes1.root} noValidate autoComplete="off">
                <CustomInput
                      labelText="DNI del Medico"
                      id="dni"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "number",
                        onChange: (event) => handleDNIChange(event)
                      }}
                    />
              </form>
              <DatePicker passChildData={handleDataPass} title={"Generar la disponibilidad de turnos el:"}></DatePicker>
              <Button onClick={generarNuevosTurnos} color="warning"> Generar</Button>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
