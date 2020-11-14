/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";

//importo llamada a endpoint
import {remove} from "../../controller/userController";

const useStyles = makeStyles(styles);

export default function SectionDownload(props) {
  const classes = useStyles();
  const [dni, setDNI] = React.useState(props.dniPaciente);
  console.log(props.dniPaciente);


  const handleDeleteAccount = () => {
    deleteAccount();
  }

  const deleteAccount = async function(){
    let datos = {
      dni: dni
    }
    console.log("El dni a eliminar es: ", dni);
    let removeStatus = await remove(datos);

    if (removeStatus.rdo===0) {
      alert("Exito!")
      localStorage.setItem("x","");
    }
    if (removeStatus.rdo===1) {
      alert(removeStatus.mensaje)
    }
  }


  return (
    <div className={classes.section}>
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
    </div>
  );
}
