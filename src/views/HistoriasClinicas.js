import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";


import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "10px",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }


};

const useStyles = makeStyles(styles);


const useStylesTheme = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export default function HistoriasClinicas(props) {
  const classes = useStyles();
  const classes1 = useStylesTheme();
  const { ...rest } = props;
  //datos paciente
  const [name, setName] = React.useState('Tobias');
  const [surname, setSurname] = React.useState('Ruano');
  const [dni, setDni] = React.useState('00000001');
  const [sexo, setSexo] = React.useState('Masculino');
  const [fechanac, setFechanac] = React.useState('06/06/97');
  const [email, setEmail] = React.useState('truano@uade.edu.ar');
  const [domicilio, setDom] = React.useState('Lima 775');
  const [telefono, setTel] = React.useState('1515251515');
  
  //datos medicos
  const [motivo, setMotivo] = React.useState('Dolor Abdominal');
  const [gruppsang, setGrupoSang] = React.useState('A+');
  const [cardiaco, setCardiaco] = React.useState('NO');
  const [diabetes, setDiabetes] = React.useState('NO');
  const [hiperten, setHiperten] = React.useState('NO');
  const [alergias, setAlergias] = React.useState('NINGUNA');
  const [antecedentes, setAntecedentes] = React.useState('NINGUNO');
  const [evolucion, setEvolucion] = React.useState('sin Evaluar');
 
  
 // const [Actualizar, setActualizar] = React.useState(false);
  const handleChangeGrupoSang = (event) => {
    setGrupoSang(event.target.value);    
  }
  const handleChangeMotivo = (event) => {
    setMotivo(event.target.value);
  }
  const handleChangeCardiaco = (event) => {
    setCardiaco(event.target.value);
  }
  const handleChangeDiabetes = (event) => {
    setDiabetes(event.target.value);
  }
  const handleChangeHiperten = (event) => {
    setHiperten(event.target.value);
  }
  const handleChangeAntecendentes = (event) => {
    setAntecedentes(!event.target.value);
  }

  const handleChangeEvolucion = (event) => {
    setEvolucion(!event.target.value);
  }

  const handleChangeAlergias = (event) => {
    setAlergias(!event.target.value);
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }
  const handleChangeDni = (event) => {
    setDni(event.target.value);
  }
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleChangeFechanac = (event) => {
    setFechanac(event.target.value);
  }
  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  }
  const handleChangeSurname = (event) => {
    setSurname(event.target.value);
  }
  const handleChangeTel = (event) => {
    setTel(event.target.value);
  }
  const handleChangeDom = (event) => {
    setDom(event.target.value);
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
      <GridContainer style={{marginTop:'100px'}}>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Datos Paciente </h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                <form className={classes1.root} nonValidate autoComplete="off">
                  <FormControl disabled>
                    <InputLabel htmlFor="component-disabled">Nombre</InputLabel>
                    <Input id="component-disableN" value={name} onChange={handleChangeName} />
                  </FormControl>
                </form>
               </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl disabled>
                    <InputLabel htmlFor="component-surname">Apellido</InputLabel>
                    <Input id="component-disabled" value={surname} onChange={handleChangeSurname} />
                  </FormControl>
                </form>
                </GridItem>
               
                <GridItem xs={12} sm={12} md={4}>
                <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl disabled>
                    <InputLabel htmlFor="component-surname">Dni</InputLabel>
                    <Input id="component-disabled" value={dni} onChange={handleChangeDni} />
                  </FormControl>
                </form>
                </GridItem>
              </GridContainer>
              
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl disabled>
                    <InputLabel htmlFor="component-sexo">Sexo</InputLabel>
                    <Input id="component-disabled" value={sexo} onChange={handleChangeSexo} />
                  </FormControl>
                </form>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl disabled>
                    <InputLabel htmlFor="component-fechanac">Fecha de Nacimiento</InputLabel>
                    <Input id="component-disabled" value={fechanac} onChange={handleChangeFechanac} />
                  </FormControl>
                </form>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl disabled>
                    <InputLabel htmlFor="component-surname">Telefono</InputLabel>
                    <Input id="component-disabled" value={telefono} onChange={handleChangeTel} />
                  </FormControl>
                </form>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    
                <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl disabled>
                    <InputLabel htmlFor="component-domicilio">Domicilio</InputLabel>
                    <Input id="component-disabled" value={domicilio} onChange={handleChangeDom} />
                  </FormControl>
                </form>
                  
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl disabled>
                    <InputLabel htmlFor="component-email">E-mail</InputLabel>
                    <Input id="component-disabled" value={email} onChange={handleChangeEmail} />
                  </FormControl>
                </form>
                </GridItem>
              </GridContainer>
              
            </CardBody>
          </Card>
        </GridItem> 

       {/*datos medicos*/}        
       <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Historia Clinica </h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                  <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl >
                    <InputLabel htmlFor="component-motivo">Motivo de Consulta</InputLabel>
                    <Input id="component-disabled" value={motivo} onChange={handleChangeMotivo} />
                  </FormControl>
                </form>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl>
                    <InputLabel htmlFor="component-cardiaco">Cardíaco</InputLabel>
                    <Input id="component-disabled" value={cardiaco} onChange={handleChangeCardiaco} />
                  </FormControl>
                </form>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                  <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl >
                    <InputLabel htmlFor="component-diabetes">Diabetes</InputLabel>
                    <Input id="component-disabled" value={diabetes} onChange={handleChangeDiabetes} />
                  </FormControl>
                </form>
                  </GridItem>
               </GridContainer>
               <GridContainer>
                 <GridItem xs={12} sm={12} md={4}>
                 <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl>
                    <InputLabel htmlFor="component-hiperten">Hipertensión</InputLabel>
                    <Input id="component-disabled" value={hiperten} onChange={handleChangeHiperten} />
                  </FormControl>
                </form>
                 </GridItem>
                 <GridItem xs={12} sm={12} md={4}>
                 <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl >
                    <InputLabel htmlFor="component-alergias">Alergías</InputLabel>
                    <Input id="component-disabled" value={alergias} onChange={handleChangeAlergias} />
                  </FormControl>
                </form>
                 </GridItem>

                 <GridItem xs={12} sm={12} md={4}>
                 <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl >
                    <InputLabel htmlFor="component-antecedentes">Antecendentes</InputLabel>
                    <Input id="component-disabled" value={antecedentes} onChange={handleChangeAntecendentes} />
                  </FormControl>
                </form>
                 </GridItem>

                 <GridItem xs={12} sm={12} md={4}>
                 <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl >
                    <InputLabel htmlFor="component-evolucion">Evolucion</InputLabel>
                    <Input id="component-disabled" value={evolucion} onChange={handleChangeEvolucion} />
                  </FormControl>
                </form>
                 </GridItem>

               </GridContainer>
              </CardBody>
            </Card>
           </GridItem>
     </GridContainer>

    </div>
  );
}