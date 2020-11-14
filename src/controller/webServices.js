//const urlApi = "http://localhost:4000/";
const urlApi = "https://ia-grupo7-api.herokuapp.com/";
console.log("url",urlApi);

const urlWebServices = {
    register: urlApi + "api/users/registration",
    login: urlApi + "api/users/login",
    deleteUser: urlApi + "api/users/:id",
    updateUser: urlApi + "api/users/updateuser",
    getMedicos: urlApi + "api/users/medicos",

    generarTurno: urlApi + "api/turnos/crearturnos",
    misTurnos: urlApi + "api/turnos/misturnos",
    deleteTurno: urlApi + "api/turnos/:id",
}

export default urlWebServices;