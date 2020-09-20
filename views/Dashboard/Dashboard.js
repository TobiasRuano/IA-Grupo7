import React from "react";
// react plugin for creating charts

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


import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


const useStyles = makeStyles(styles);


const useStylesTheme = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const classes1 = useStylesTheme();

  return (
    <div>     
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Buscar paciente</h4>
              <p className={classes.cardCategoryWhite}>
                
              </p>
            </CardHeader>
            <CardBody>
              <div>
              <form className={classes1.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="DNI" variant="outlined" name="dnipaciente" />
              </form>
              <Button color="warning"> Buscar</Button>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
