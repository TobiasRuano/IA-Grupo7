import React from 'react';
// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
// @material-ui/icons
// core components

const styles = {
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(0, 0, 0, 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex"
  },
};

const useStyles = makeStyles(styles);

export default function DateTimePicker(){
  const classes = useStyles();
  return (
    <div>
      <InputLabel className={classes.label}>
        Horario
      </InputLabel>
      <br />
      <FormControl fullWidth>
        <Datetime
          inputProps={{ placeholder: "Elegi un dia y horario" }}
        />
      </FormControl>
    </div>
  );
}