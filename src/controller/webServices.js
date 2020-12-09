const urlApi = "http://localhost:4000/";
//const urlApi = "https://ia-grupo7-api.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    register: urlApi + "api/users/registration",
    login: urlApi + "api/users/login",
    deleteUser: urlApi + "api/users/remove",
    updateUser: urlApi + "api/users/updateuser",
    searchUser: urlApi + "api/users/userbydni",
    getMedicos: urlApi + "api/users/medicos",
    getUsers: urlApi + "api/users/allusers",

    generarTurno: urlApi + "api/turnos/crearturnos",
    asignarTurno: urlApi + "api/turnos/asignarturno",
    misTurnos: urlApi + "api/turnos/misturnos",
    deleteTurno: urlApi + "api/turnos/:id",
    turnosDisponibles: urlApi + "api/turnos/disponibles",

    createReceta: urlApi + "api/recetas/recetanueva",
    getImagenesByID: urlApi + "api/recetas/getimgbyid",
    uploadFile: urlApi + "api/recetas/uploadfiles",
    guardarImagenUser:urlApi + "api/users/guardarImgUser"
    
}



export default urlWebServices;