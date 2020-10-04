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

const useStyles = makeStyles(styles);

export default function SectionDownload() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer className={classes.textCenter} justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Historia Clinica</h2>
            <h4>
              Actualmente no es posible ver la historia clinica en la web,
              para ello debera descargarla con el siguiente enlace.
            </h4>
          </GridItem>
          <GridItem xs={12} sm={8} md={6}>
            <Button
              color="primary"
              size="lg"
              href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-download-section"
              target="_blank"
            >
              Descargue su historia Clinica
            </Button>
          </GridItem>
        </GridContainer>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h2>Desea Eliminar su Cuenta?</h2>
          </GridContainer>
          <Button
            color="danger"
          >
            Eliminar Usuario
          </Button>
        </div>
      </div>
    </div>
  );
}
