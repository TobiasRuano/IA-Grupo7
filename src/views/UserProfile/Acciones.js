/*eslint-disable*/
import React from "react";
import {Redirect} from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import {Modal} from '@material-ui/core';
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

//importo llamada a endpoint
import {remove} from "../../controller/userController";

const useStyles = makeStyles(styles);

const useStylesModal = makeStyles((styles) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: styles.palette.background.paper,
    border: '2px solid #000',
    boxShadow: styles.shadows[5],
    padding: styles.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}));

export default function Acciones(props) {
  const classes = useStyles();
  const classesModal = useStylesModal();
  const [dni] = React.useState(props.dniPaciente);
  const [estado, setEstado] = React.useState(false);
  const [modalEliminar, setModalEliminar]= React.useState(false);
  console.log(props.dniPaciente);


  const handleDeleteAccount = () => {
    abrirCerrarModalEliminar()
  }

  const deleteAccount = async function(){
    let datos = {
      dni: dni
    }
    let removeStatus = await remove(datos);

    if (removeStatus.rdo===0) {
      localStorage.setItem("x","");
      localStorage.removeItem("user");
      alert("Exito!")
      setEstado(true);
    }
    if (removeStatus.rdo===1) {
      alert(removeStatus.mensaje)
    }
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const bodyEliminar=(
    <div className={classesModal.modal}>
      <p>Estás seguro que deseas eliminar la cuenta? </p>
      <div align="right">
        <Button color="danger" onClick={()=>deleteAccount()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )

  const redirect= ()=>{
		if (estado) {
			return <Redirect to='/' />
		}
	}

  return (
    <div className={classes.section}>
      {redirect()}
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Historia Clinica</h2>
            <h4>
              Para ver su historio clinica, haga click en el diguiente enlace.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="/historiaclinica"
            >
              Consultar Historia Clinica
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h2>Desea Eliminar su Cuenta?</h2>
          </GridContainer>
          <Button color="danger" onClick={() => handleDeleteAccount()}>
            Eliminar Usuario
          </Button>
        </div>
      </div>
      <Modal
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
    </div>
  );
}
