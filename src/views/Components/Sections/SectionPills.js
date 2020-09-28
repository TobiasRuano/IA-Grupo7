import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Funcionalidades del sistema</h3>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Dashboard",
                    tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                          El sistema posee un dashboard donde se puede buscar usuarios a los cuales se les puede modificar permisos
                           además de Historias Clinicas de pacientes 
                        </p>
                        <br />
                        <p>
                         Se pueden buscar mediante DNI, Secretaria y demás parámetros de busqueda
                        </p>
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: "Turnos",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Sistema de gestión de turnos para pacientes y profesionales
                        </p>
                        <br />
                        <p>
                          El sistema de turnos ofrece la posibilidad de auto gestionar
                          los turnos  asi como la posibiilidad que los profesionales de
                          la salud y administrativos puedan consultar los mismos, modificar 
                          disponibilidad
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Historias Clinicas",
                    tabIcon: List,
                    tabContent: (
                      <span>
                        <p>
                          Gestión de Historias clinicas de pacientes tanto para 
                          administrativos como para médicos.
                        </p>
                        <br />
                        <p>
                          Se permite crear editar y borrar historias clinicas asi como 
                          también se puede buscar dichas historias clinicas por paciente</p>
                        <br />
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
