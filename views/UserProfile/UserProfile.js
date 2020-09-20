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


//import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
//import { EditAttributes } from "@material-ui/icons";

//import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
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

export default function UserProfile() {
  const classes = useStyles();
  const classes1 = useStylesTheme();
  //datos paciente
  const [name, setName] = React.useState('composed TextField');
  const [surname, setSurname] = React.useState('composed TexField');
  const [dni, setDni] = React.useState('composed TextField');
  const [sexo, setSexo] = React.useState('Composed TextField');
  const [fechanac, setFechanac] = React.useState('Composed TextField');
  const [edad, setEdad] = React.useState('Composed TextField');
  const [email, setEmail] = React.useState('Composed TextField');
  const [domicilio, setDom] = React.useState('Composed TextField');
  const [telefono, setTel] = React.useState('Composed TextField');
  
  //datos medicos
  const [gruposang, setGrupoSang] = React.useState('Composed TextField');
  const [cardiaco, setCardiaco] = React.useState('Composed TextField');
  const [diabetes, setDiabetes] = React.useState('Composed TextField');
  const [hiperten, setHiperten] = React.useState('Composed TextField');
  const [alergias, setAlergias] = React.useState('Composed TextField');
 
  


 // const [Actualizar, setActualizar] = React.useState(false);



  const handleChangeGrupoSang = (event) => {
    setGrupoSang(event.target.value);
    
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
  const handleChangeAlergias = (event) => {
    setAlergias(!event.target.value);
  }

  const handleChangeName = (event) => {
    setName(event.target.value);
  }
  const handleChangeDni = (event) => {
    setDni(event.target.value);
  }
  const handleChangeEdad = (event) => {
    setEdad(event.target.value);
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Datos Generales </h4>
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
                    <InputLabel htmlFor="component-edad">Edad</InputLabel>
                    <Input id="component-disabled" value={edad} onChange={handleChangeEdad} />
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
                    <InputLabel htmlFor="component-edad">Edad</InputLabel>
                    <Input id="component-disabled" value={telefono} onChange={handleChangeTel} />
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
                <h4 className={classes.cardTitleWhite}>Datos Médicos </h4>
              </CardHeader>
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                  <form className={classes1.root} nonValidate autoComplete="off">
                   <FormControl >
                    <InputLabel htmlFor="component-gruposang">Grupo Sanguineo</InputLabel>
                    <Input id="component-disabled" value={gruposang} onChange={handleChangeGrupoSang} />
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
               </GridContainer>
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
           </GridItem>

                <Button color="primary">Actualizar Datos</Button>

     </GridContainer>



    </div>
  );
}
