import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

import {getTurnosDisponibles} from "../controller/turnoController.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

var arrayTurnos = [];

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={parseDate(arrayTurnos[index].fecha)} />
    </ListItem>
  );
}

function parseDate(date) {
  let dia = new Date(date);
  let value = "Dia: " + dia.getDate() + "/" + dia.getMonth() + "/" + dia.getFullYear() + " Horario:" + dia.getHours() + ":" + dia.getMinutes()
  return value
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList(props) {
  const classes = useStyles();
  const [array, setArray] = React.useState([]);
  const [dniMedico, setDniMedico] = React.useState(props.dni);

  useEffect(()=>{
    async function componentDidUpdate() {
      console.log("este es el valor de el dni del medico en el componente lista", dniMedico);
      if (dniMedico != -1) {
        let data = await getTurnosDisponibles(dniMedico);
        console.log(data);
        for(let i=0; i<data.data.length; i++) {
          arrayTurnos.push(data.data[i]);
        }
        setArray(arrayTurnos);
        console.log(arrayTurnos.length); 
      }
    }
    componentDidUpdate();
  },[]);

  return (
    <div className={classes.root}>
      <FixedSizeList height={400} width={300} itemSize={46} itemCount={arrayTurnos.length}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}