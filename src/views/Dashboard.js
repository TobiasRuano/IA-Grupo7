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
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";


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

export default function Dashboard(props) {
  const classes = useStyles();
  const classes1 = useStylesTheme();
  const { ...rest } = props;

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
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Buscar Usuario</h4>
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
      </GridContainer>
    </div>
  );
}
