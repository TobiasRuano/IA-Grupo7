import React,{useEffect} from "react";


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import Slide from "@material-ui/core/Slide";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import {pacientes} from "views/Userdata/DatoPaciente.js"


import Close from "@material-ui/icons/Close";

// core components
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import ButtonUploads from "components/Boton/ButtonUpload.js"

//importo llamada a endpoint
import {createReceta} from "controller/recetaController.js";
import {getImagenesByID} from "controller/recetaController.js";
import{uploadFile}from "controller/recetaController.js";
import{guardarImagenUser} from "controller/recetaController.js";


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  
  table: {
    minWidth: 650,
  }


};

const useStyles = makeStyles(styles);

const useStyles1 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const data = [
  { id: 1 ,fecha: "06/04/2015", medico:"Dr.A", info:"info extra/comentario"},
  { id: 2, fecha: "20/03/2013", medico:"Dr.B", info: "info extra2/comentario2" }
      
];

console.log(pacientes[0].nombre)

 export default function Recetas(props) {
  
  const { ...rest } = props;
  
  const [listaImagenes,setListaImagenes]=React.useState([]);
  const [imgAux,setImgAux]= React.useState('');

  
  console.log("cargacomponente");
  useEffect(()=>{
    async function componentDidMount() 
    {
      //traer imagenes de User
      let rdo = await getImagenesByID();
      setListaImagenes(rdo); 
    }
    componentDidMount();
  },[]);

  const getImagenes = async function (){
    console.log("Voy a buscar imagenes")
    console.log("listaImagenesGetImg",listaImagenes)
    let rdo = await getImagenesByID();
    setListaImagenes(rdo);
    
    console.log("listaImagenesGetImg",listaImagenes)
    console.log("rdoGetImagenesGetImg",rdo)
    
  }
 
  
  const guardarImagen=()=>{
    subirImagen();
  }
  
  const subirImagen= async function ()
  {
    let files=[];
    let nombres=[];
    let archivoImagen = '';
    
    if (imgAux!=='')
    {
      console.log("imgAux",imgAux);
      files.push(imgAux);
      //buscar extension archivo
      let archivoOrig = imgAux.name;
      let posExt = archivoOrig.indexOf('.');
      let extension = archivoOrig.substring(posExt,archivoOrig.length);
      let aleatorio = Math.random().toString().substring(2,15);
      nombres.push("img"+localStorage.getItem('nombre')+"_"+aleatorio+extension);
      //subir archivo a servidor
      archivoImagen = await uploadFile(files,nombres);
      //Si la imagen se subio bien la guardo en la BD
      if (archivoImagen.ok)
      {
        let imgUser={
          dni:localStorage.getItem('dni'),
          imagen: nombres[0]
        }
        let rdo = await guardarImagenUser(imgUser);
        if (rdo)
        {
          alert("Tu imagen se ha almacenado correctamente.")
          getImagenes();
        }
      }
      else
      {
        alert ("Ocurrio un error al subir tu imagen al servidor. Intenta mas tarde.")
      } 
    }
  }
   
  
 
  
  //pasar los datos de receta
  const ingresarReceta= async function() {
    let datos = {
      id: recSeleccion.form.id,
      fecha:recSeleccion.form.fecha,
      nombreMedico: recSeleccion.form.medico,
      comentario:recSeleccion.form.info,
      //userID:
      imagenReceta:imgAux
    }
    let getReceta = await createReceta(datos);
    console.log(getReceta.rdo)
    if (getReceta.rdo===0 ) {
      
    }
    if (getReceta.rdo===1) {
      alert(getReceta.mensaje)
    }
}
 

 
  const [state,setState] = React.useState({
     data:data,
    
  });
   
  const [pacientedni,setPacienteDni]=React.useState();
  const [paciente,setPaciente]=React.useState();

  const classes = useStyles();
  const classes1 = useStyles1();
  
  const [cardAgregar,setCardAgregar]=React.useState(false);
  
  const[recSeleccion,setrecSeleccion]=React.useState({
    form: {
      id:'',
      fecha: '',
      medico: '',
      info:'',
      imagen:''
    },
  })



const agregarfila= ()=>{
 
  var valorNuevo= {...recSeleccion.form};
  console.log(valorNuevo);
  valorNuevo.id=state.data.length+1;
  var lista= state.data;
  lista.push(valorNuevo);
  setState({data: lista });
  setCardAgregar(false)
}

const onRowDelete= (oldData) =>{
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
      setState((prevState) => {
        const data = [...prevState.data];
        data.splice(data.indexOf(oldData), 1);
        return { ...prevState, data };
      });
    }, 600);
  })
}
  

const buscarPaciente=()=>{
  
 pacientes.filter(paciente=>paciente.dni === pacientedni)
                  .map(filterPaciente=>(setPaciente(filterPaciente.nombre+ ", "+ filterPaciente.apellido)))

}
console.log(paciente)
const handleOnchangeDni=(event)=>{
  setPacienteDni(event.target.value)
};



const handleOnchange=(event)=>{

  setrecSeleccion({
      
    form:{
      ...recSeleccion.form,
      [event.target.name]:event.target.value,
     
    }
  });
  console.log(event.target.value);
};



  return (
   

    <div>
      <Header
        absolute
        color="black"
        brand="Home"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      
    
    <GridContainer 
        style={{marginTop:'250px'}}
        justify="center">
      <GridItem xs={8} sm={8} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Buscar Paciente</h4>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
              <div>
              <form className={classes1.root} noValidate autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="DNI" 
                    variant="outlined" 
                    name="dnipaciente" 
                    onChange={handleOnchangeDni}/>
                <Button 
                    color="primary"
                    onClick={getImagenes}> Buscar</Button>
                <p>{paciente}</p>
              </form>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      <GridItem xs={8} sm={8} md={8}>
        <Card>
          <CardHeader color="primary">
            <div>
            <h4 className={classes.cardTitleWhite}>Recetas</h4>
            <p className={classes.cardCategoryWhite}>
                Autorización de Recetas
            </p>
            <Button 
               style={{top: "50%", right:-700}}
               color="success" 
               onClick={()=>setCardAgregar(true)}>
              Agregar
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <div>
            <Table>
             <TableHead color="primary">
              <TableRow>
                <TableCell aling="left">Fecha</TableCell>
                <TableCell aling="left">Médico</TableCell>
                <TableCell aling="left">Información</TableCell>
                <TableCell align="center">Acción</TableCell>
              </TableRow>
             </TableHead>
             <TableBody>
               {recSeleccion.form.map((dato) => (
                 <TableRow key={dato.id}>
                 
                 <TableCell component="th" scope="row">{dato.fecha}</TableCell>
                 <TableCell aling="left">{dato.medico}</TableCell>
                 <TableCell align="left">{dato.imagenReceta}</TableCell>
                 <TableCell align="center">
                   <Button color="primary">Descargar</Button>{"  "}
                   </TableCell>
                 </TableRow>
               ))}
              </TableBody>
             </Table>
             </div>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem>
      <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
                  }}
                  open={cardAgregar}
                  TransitionComponent={Transition}
                  keepMounted
                  onClose={() => setCardAgregar(false)}
                  aria-labelledby="classic-modal-slide-title"
                  aria-describedby="classic-modal-slide-description"
                >
        <DialogTitle
                    id="classic-modal-slide-title"
                    disableTypography
                    className={classes.modalHeader}

                  >
                  <h4 className={classes.modalTitle}>Recetas</h4>
        </DialogTitle>   
        <DialogContent>
                  <form className={classes1.root} noValidate autoComplete="off">
                      <FormControl>
                        <TextField
                            name="fecha" 
                            label="Fecha" 
                            variant="outlined" 
                            onChange={handleOnchange}/>
                      </FormControl>
                    </form>  
                    <form className={classes1.root} noValidate autoComplete="off">
                      <FormControl>
                        <TextField
                            name="medico" 
                            label="Médico" 
                            variant="outlined" 
                            onChange={handleOnchange}/>
                        </FormControl>
                    </form> 
                    <form className={classes1.root} noValidate autoComplete="off">
                      <FormControl>
                        <TextField
                            name="info" 
                            label="Comentario" 
                            variant="outlined" 
                            onChange={handleOnchange}/>
                        </FormControl>
                    </form> 

                    
                     
                    <div>
                    
                      <ButtonUploads  getImagen={(i)=>setImgAux(i)} onClick= {()=>{guardarImagen()}}/>
                  
                    </div>
                    <div>
                    <Button 
                     color="success" 
                     type= "submit" 
                     onClick={()=>ingresarReceta()}
                     >
                    Agregar
                    </Button>
                      {" "}
                     <Button  
                          key="closeBtnagregar"
                          aria-label="Close"
                          color="danger"
                          onClick={() => setCardAgregar(false)}>
                          Cancelar
                          </Button>
                      </div>
                  </DialogContent>
                  
                  </Dialog> 
      </GridItem>
    </GridContainer>
    </div>
    
  );
}
