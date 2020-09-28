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

//import { TableFooter } from "@material-ui/core";


import Close from "@material-ui/icons/Close";

// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

//import TablePaginationDemo from 'components/Table/TablePagination';



const data = [
  { nom: "Ibuxxx500mg" , fecha: "06/04/2015", medico:"Dr.F" },
  { nom: "Parayyy500mg" , fecha: "20/03/2013", medico:"Dr.O" },
  
  
];


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



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";



 export default function Recetas() {
 
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);
  // const [EditModal, setEditModal]=React.usteState(false);

  // const [datoSeleccionado, setDatoSeleccionado]=React.usteState({
  //   ant='',
  //   fecha='',
  //   descripcion='',
  //   medico='',
  // });

   
  React.state = {
    data: data,
   modalActualizar: false,
   // modalInsertar: false,
    form: {
      act: "",
      fecha: "",
      descripcion: "",
      medico: "",
    },
  };

  const handleClickOpen = (dato) => {
    // setClassicModal(true);

  };
  
  // const seleccionarDato=(dato,caso)=>{
  //   setDatoSeleccionado(dato);
  //   (caso === 'Editar')&&setEditModal(true)
  // }

 
  return (
   
    <GridContainer style={{marginTop:'100px'}}>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Recetas</h4>
            <p className={classes.cardCategoryWhite}>
              Autorización de Medicación
            </p>
          </CardHeader>
          <CardBody>
            <div>
            <Table>
             <TableHead color="primary">
              <TableRow>
                <TableCell aling="left">Informacion</TableCell>
                <TableCell aling="left">Fecha</TableCell>
                <TableCell aling="left">Médico</TableCell>
                <TableCell align="center">Acción</TableCell>
              </TableRow>
             </TableHead>
             <TableBody>
               {data.map((dato) => (
                 <TableRow key={dato.nom}>
                 
                 <TableCell component="th" scope="row">{dato.nom}</TableCell>
                 <TableCell aling="left">{dato.fecha}</TableCell>
                 <TableCell align="left">{dato.medico}</TableCell>
                 <TableCell align="center">
                   <Button color="primary" onClick={handleClickOpen}>Descargar</Button>{"  "}
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
                  open={classicModal}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setClassicModal(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
        <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}
                  >
            <IconButton
                      className={classes.modalCloseButton}
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={() => setClassicModal(false)}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>Recetas</h4>
                 </DialogTitle>   
                <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                >
                  <p>
                  Aca va la observacion de la medicación
                  </p>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                  <Button
                      //onClick={() =>}
                      color="primary"
                      simple
                    >
                      Editar
                    </Button>
                  </DialogActions>
                  </Dialog> 
      </GridItem>
    </GridContainer>
   

  );
}
