import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

//core components
import Button from "components/CustomButtons/Button.js";




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

export default function IconButtons() {
  
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

 
  return (
    <div className={classes.root} >


       <Tooltip title="Ver">
       <IconButton aria-label="ver">
        <VisibilityIcon onClick={() => setClassicModal(true)} />
      </IconButton>
      </Tooltip>
    
      <Tooltip title="Editar">
      <IconButton  aria-label="editar">
        <CreateIcon />
       </IconButton>
       </Tooltip>
  
      <Tooltip title="Eliminar">
      <IconButton aria-label="eliminar">
        <DeleteIcon />
      </IconButton>
      </Tooltip>
      
    </div>
  );
  }

