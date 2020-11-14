import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function NacimientoPicker(props) {
  const classes = useStyles();
  const title = React.useState(props.title);
  
  const functionHandler = (event) => {
    var val = event.target.value;
    props.passChildData(val); 
  }

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label={title}
        type="date"
        defaultValue="2020-09-28"
        className={classes.textField}
        inputProps={{
          onChange: (event) => functionHandler(event),
        }}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
}