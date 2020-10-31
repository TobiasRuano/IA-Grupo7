//const urlApi = "http://localhost:4000/";
const urlApi = "https://ia-grupo7-api.herokuapp.com";
console.log("url",urlApi);

const urlWebServices = {
    register:urlApi + "api/users/register",
    login:urlApi +"api/users/login",
}

export default urlWebServices;