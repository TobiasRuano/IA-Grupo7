import React from "react";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';



import Close from "@material-ui/icons/Close";

// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import IconButtons from "components/Icon/IconButtons.js"







const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  
  table: {
    minWidth: 650,
  }


};

const useStyles = makeStyles(styles);

const useStyles1 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";



 export default function Recetas() {

  const data = [
    { id: 1 ,fecha: "06/04/2015", medico:"Dr.A", info:"info extra/comentario"},
    { id: 2, fecha: "20/03/2013", medico:"Dr.B", info: "info extra2/comentario2" },
    
    
  ];
 
  const classes = useStyles();
  const classes1 = useStyles1();
  
  const [cardAgregar,setCardAgregar]=React.useState(false);
  const [classicModal, setClassicModal] = React.useState(false);

  const [recSeleccion, setrecSeleccion] =React.useState({
    fecha: " ",
    medico:"",
    info:" "
  });

  
  const handleClickOpenAdd =()=>{
    setCardAgregar(true);
  }

  const handleOnchange =(event) =>{
    console.log(event.target.value)
    setrecSeleccion({
      ...recSeleccion,
      [event.target.id]:event.target.value
    })
}



  

   
  React.state = {
    data: data,
  
    form: {
      id: "",
      fecha: "",
      medico: "",
      info: "",
    },
  };


  
 
  return (
   
    <GridContainer 
        style={{marginTop:'100px'}}
        justify="center">
      <GridItem xs={8} sm={8} md={8}>
        <Card>
          <CardHeader color="primary">
       
            <h4 className={classes.cardTitleWhite}>Recetas</h4>
            {/*<IconButtons onClick={()=>setCardAgregar(true)} />*/}
            <Button 
               style={{position: "fixed", top: "20%", right:250}}
               color="success" 
               onClick={()=>setCardAgregar(true)}>
              Agregar
              </Button>
            <p className={classes.cardCategoryWhite}>
            
              Autorización de Recetas
           
            </p>
          </CardHeader>
          <CardBody>
            <div>
            <Table>
             <TableHead color="primary">
              <TableRow>
                <TableCell aling="left">Fecha</TableCell>
                <TableCell aling="left">Médico</TableCell>
                <TableCell aling="left">Información</TableCell>
                <TableCell align="center">Acción</TableCell>
              </TableRow>
             </TableHead>
             <TableBody>
               {data.map((dato) => (
                 <TableRow key={dato.id}>
                 
                 <TableCell component="th" scope="row">{dato.fecha}</TableCell>
                 <TableCell aling="left">{dato.medico}</TableCell>
                 <TableCell align="left">{dato.info}</TableCell>
                 <TableCell align="center">
                   <Button color="primary">Descargar</Button>{"  "}
                   <Button color="danger" >Eliminar</Button>
                   </TableCell>
                 </TableRow>
               ))}
              </TableBody>
             </Table>
             </div>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
      <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={cardAgregar}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setCardAgregar(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
        <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}

                  >
                  <h4 className={classes.modalTitle}>Recetas</h4>
        </DialogTitle>   
        <DialogContent>
                  <form className={classes1.root} noValidate autoComplete="off">
                      <FormControl>
                        <TextField
                            nombre="fecha" 
                            label="Fecha" 
                            variant="outlined" 
                            onChange={handleOnchange}/>
                      </FormControl>
                    </form>  
                    <form className={classes1.root} noValidate autoComplete="off">
                      <FormControl>
                        <TextField
                            nombre="medico" 
                            label="Médico" 
                            variant="outlined" 
                            onChange={handleOnchange}/>
                        </FormControl>
                    </form> 
                    <form className={classes1.root} noValidate autoComplete="off">
                      <FormControl>
                        <TextField
                            nombre="info" 
                            label="Comentario" 
                            variant="outlined" 
                            onChange={handleOnchange}/>
                        </FormControl>
                    </form> 

                    
                     
                    <div>
                    <Button
                      //onClick={() =>} // aca funcion de subir imagen de receta
                      color="primary"
                      simple
                    >
                      Subir Receta
                    </Button>
                    </div>
                    <div>
                    <Button color="success" type= "submit" >Agregar</Button>
                      {" "}
                     <Button  
                          key="closeBtnagregar"
                          aria-label="Close"
                          color="danger"
                          onClick={() => setCardAgregar(false)}>
                          Cancelar
                          </Button>
                      </div>
                  </DialogContent>
                  
                  </Dialog> 
      </GridItem>
    </GridContainer>
   

  );
}
