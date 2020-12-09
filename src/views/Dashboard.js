import React,{useEffect} from "react";
import {Redirect} from "react-router-dom";

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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CustomInput from "components/CustomInput/CustomInput.js";

//importo llamada a endpoint
import {generarTurnos} from "../controller/turnoController.js";
import {getMedicos, getUsers, updateUser} from "../controller/userController.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import DatePicker from "components/DatePicker/DatePicker.js";

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
	const [arrayMedicos, setArrayMedicos] = React.useState([]);
	const [arrayUsuarios, setArrayUsuarios] = React.useState([]);
	let [dateSelected] = React.useState('');
	const [dniMedico, setDNIMedico] = React.useState('');
	const [dniUsuario, setDNIUsuario] = React.useState('');
	const [permisoUsuario, setPermisoUsuario] = React.useState('');
	const [estado, setEstado] = React.useState(false);
	const permisoVisualizar = React.useState(JSON.parse(localStorage.getItem('user')).permiso);

	useEffect(()=>{
		async function componentDidMount() {
			let data = await getMedicos();
			console.log(data);
			for(let i=0; i<data.data.length; i++) {
				arrayMedicos.push(data.data[i]);
			}
			console.log(arrayMedicos)
			setArrayMedicos(arrayMedicos);
			console.log("Array seteada")
		}
		componentDidMount();
	},[]);

	useEffect(()=>{
		async function componentDidMount() {
			let data = await getUsers();
			console.log(data);
			for(let i=0; i<data.data.length; i++) {
				arrayUsuarios.push(data.data[i]);
			}
			console.log(arrayUsuarios)
			setArrayUsuarios(arrayUsuarios);
		}
		componentDidMount();
	},[]);

	const handleDataPass=(val) => {
		console.log(val);
		dateSelected = val;
	}

	const handleDNIChange =(event) => {
		setDNIMedico(event.target.value);
	}

	const handleDNIUsuarioChange = (event) => {
		setDNIUsuario(event.target.value);
		console.log("Este es el nuevo", event.target.value);
	}

	const handlePermisoChange = (event) => {
		if (event.target.value >= 0 && event.target.value < 3) {
			setPermisoUsuario(event.target.value);
		} else {
			alert("Ingrese un numero del 0 al 2");
		}
	}

	const cambiarPermiso=()=> {
		if (dniUsuario!=="" && permisoUsuario!=="") {
			validarCambiarPermiso();
		}
		else {
			alert("Debe completar todos los campos");
		}
	}

	const validarCambiarPermiso = async function() {
		let datos = {
			permiso: permisoUsuario,
			dni: dniUsuario,
		}
		let getPermisoResponse = await updateUser(datos);
		if (getPermisoResponse.rdo===0 ) {
			let user = JSON.parse(localStorage.getItem('user'))
			user.permiso = permisoUsuario
			console.log("El permiso que estoy seteando es: ", permisoUsuario)
      		localStorage.setItem("user", JSON.stringify(user));
			setEstado(true);
		} else {
			alert(getPermisoResponse.mensaje)
		}
}

	const generarNuevosTurnos=()=> {
		if (dniMedico!=="" && dateSelected!=="") {
			let flag = 0;
			for (let index = 0; index < arrayMedicos.length; index++) {
				if (dniMedico == arrayMedicos[index].dni) {
					flag = 1;
				}
			}
			if (flag == 1) {
				validarGenerarTurnos();
			} else {
				alert("Debe intriducir el DNI de un medico valido");
			}
		}
		else {
			alert("Debe completar todos los campos");
		}
	}

	//Ejecuto el endopoint para validar login
	const validarGenerarTurnos= async function() {
			let datos = {
				fecha: dateSelected,
				dniMedico: dniMedico
			}
			let getTurnoResponse = await generarTurnos(datos);
			if (getTurnoResponse.rdo===0 ) {
				setEstado(true);
			} else {
				alert(getTurnoResponse.mensaje)
			}
	}

	const redirect= ()=>{
		if (estado || permisoVisualizar[0] == 0) {
			return <Redirect to='/' />
		}
	}

	if (permisoVisualizar[0] == 0) {
		return(
		  <div>{redirect()}</div>
		);
	} else {
		return (
			<div> 
				<Header
					absolute
					color="white"
					brand="Home"
					rightLinks={<HeaderLinks />}
					{...rest}
				/>    
	
			{redirect()}
	
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
									<TextField onChange={handleDNIChange} id="outlined-basic" label="DNI" variant="outlined" name="dnipaciente" />
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
	
					<GridItem xs={12} sm={12} md={12}>
						<Card>
							<CardHeader color="warning">
								<h4 className={classes.cardTitleWhite}>Generar Disponibilidad de Turnos</h4>
								<p className={classes.cardCategoryWhite}>
									
								</p>
							</CardHeader>
							<CardBody>
								<div>
								<FormControl className={classes.formControl}>
													<InputLabel id="demo-simple-select-helper-label">Elija el profesional</InputLabel>
													<Select
														labelId="demo-simple-select-helper-label"
														id="demo-simple-select-helper"
														value={dniMedico}
														onChange={handleDNIChange}
													>
														<MenuItem value={-1}>
															<em>Debe seleccionar una opcion</em>
														</MenuItem>
														{arrayMedicos.map(medico=> (
															<MenuItem key={medico.dni} value={medico.dni}>{medico.name +" " + medico.surname}</MenuItem>
														))}
													</Select>
													<FormHelperText>Estamos trabajando para agregar mas profesionales</FormHelperText>
												</FormControl>
								<DatePicker passChildData={handleDataPass} title={"Generar la disponibilidad de turnos el:"}></DatePicker>
								<Button onClick={generarNuevosTurnos} color="warning"> Generar</Button>
								</div>
							</CardBody>
						</Card>
					</GridItem>
	
					<GridItem xs={12} sm={12} md={12}>
						<Card>
							<CardHeader color="warning">
								<h4 className={classes.cardTitleWhite}>Cambiar Permisos</h4>
								<p className={classes.cardCategoryWhite}>
									
								</p>
							</CardHeader>
							<CardBody>
								<div>
								<FormControl className={classes.formControl}>
													<InputLabel id="demo-simple-select-helper-label">Elija un usuario</InputLabel>
													<Select
														labelId="demo-simple-select-helper-label"
														id="demo-simple-select-helper"
														value={dniUsuario}
														onChange={handleDNIUsuarioChange}
													>
											<MenuItem value={-1}>
											<em>Debe seleccionar una opcion</em>
											</MenuItem>
											{arrayUsuarios.map(usuario=> (
											<MenuItem key={usuario.dni} value={usuario.dni}>{usuario.name +" " + usuario.surname}</MenuItem>
										))}
									 </Select>
									<FormHelperText>Para cambiar un permiso, debe elehir un usuariode la lista</FormHelperText>
								</FormControl>
								<CustomInput
							labelText="1"
							id="permiso"
							formControlProps={{
							  fullWidth: true
							}}
							inputProps={{
							  type: "number",
							  onChange: (event) => handlePermisoChange(event),
							}}
						  />
								<Button onClick={cambiarPermiso} color="warning"> Cambiar Permiso</Button>
								</div>
							</CardBody>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
		);
	}
}
