import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import {Modal, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import { removeTurno, getTurnosByDNI } from 'controller/turnoController';

const columns= [
    { field: 'razon', numeric: false, disablePadding: true, title: 'Razon' },
    { field: 'fecha', numeric: true, disablePadding: false, title: 'Dia y Horario' },
    { field: 'profesional', numeric: true, disablePadding: false, title: 'Profesional' },
    { field: 'estado', numeric: true, disablePadding: false, title: 'Estado' },
  ];


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function EnhancedTable(props) {
  const styles= useStyles();
  const [daaata, setData]= useState([]);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [dni] = React.useState(props.dniPaciente);
  const [turnosAPI, setTurnosApi] = React.useState([]);
  let array = [];
  const [turno, setArtistaSeleccionado]=useState({
    artista: "",
    genero: "",
    id: "",
    pais: "",
    ventas: ""
  })

  function createData(razon, fecha, profesional, estado, id) {
    return { razon, fecha, profesional, estado , id};
  }

  const peticionGet=async()=>{
      let data = await getTurnosByDNI(dni);
      for(let i=0; i<data.data.length; i++) {
        turnosAPI.push(data.data[i]);
        let date = new Date(data.data[i].fecha);
        let value = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear() + "  Horario: " + date.getUTCHours() + ":" + date.getUTCMinutes();
        array.push(createData(data.data[i].razon, value, data.data[i].medico, data.data[i].estado, data.data[i].id));
      }
      setData(array);
  }

  const peticionDelete=async()=>{
    let index = daaata.findIndex(x => x.id ===turno.id);
    let turnoBorrar = turnosAPI[index];
    let datos = {
        id: turnoBorrar.id,
        userID: dni,
        razon: turnoBorrar.razon,
        fecha: turnoBorrar.fecha,
        medico: turnoBorrar.medico,
        dniMedico: turnoBorrar.dniMedico,
        estado: "Disponible"
      }
      let removeStatus = await removeTurno(datos);
      if (removeStatus.rdo===0) {
        alert("Exito!")
        array = daaata.filter(function(el) { return el.id != turnoBorrar.id; }); 
        setTurnosApi(array)
        setData(array);
      }
      if (removeStatus.rdo===1) {
        alert(removeStatus.mensaje)
      }
      abrirCerrarModalEliminar()
  }

  const seleccionarTurno=(turno, caso)=>{
    setArtistaSeleccionado(turno);
    if (caso === "Eliminar") {
      abrirCerrarModalEliminar()
    }
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(()=>{
    async function componentDidMount() {
        peticionGet();
    }
    componentDidMount();
  },[]);

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas cancelar el turno? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )
  

  return (
    <div className="App">
     <MaterialTable
          columns={columns}
          data={daaata}
          title=""  
          actions={[
            {
              icon: 'delete',
              tooltip: 'Cancelar Turno',
              onClick: (event, rowData) => seleccionarTurno(rowData, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header:{
              actions: "Cancelar Turno"
            }
          }}
        />

        <Modal
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
    </div>
  );
}

export default EnhancedTable;
