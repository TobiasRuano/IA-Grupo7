import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function ButtonUploads(props) {
  const classes = useStyles();
  const [fileNames, setFileNames] = React.useState("");
  const [files, setFiles] = React.useState(null);

  const {
    getImagen
  } = props;

  const handleSubmit = e => {
    e.preventDefault();
    
    let imagen = e.target.files[0]; 
    if(imagen.size > 3100000)
    { 
      alert('La imagen supera el máximo de 3MB') 
      return
    }
      getImagen(imagen)
  
    
  };
  

  const addFile = e => {
    let fileNames = "";
    let files = e.target.files;
    for (let i = 0; i < e.target.files.length; i++) {
      fileNames = fileNames + e.target.files[i].name;
      if (props.multiple && i !== e.target.files.length - 1) {
        fileNames = fileNames + ", ";
      }
    }
    setFiles(files);
    setFileNames(fileNames);
    handleSubmit(e);
  };

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={addFile}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" simple>
          Subir receta
        </Button>
      </label> 
    </div>
  );
}