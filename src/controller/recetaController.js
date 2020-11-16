import urlWebServices from '../controller/webServices.js';

export const createReceta= async function(receta) {
    //url webservices
    let url = urlWebServices.createReceta;
    //armo json con datos
    const formData = new URLSearchParams();

    formData.append('id',receta.id);
    formData.append('fecha',receta.fecha);
    formData.append("nombreMedico",receta.nombreMedico);
    formData.append('comentario',receta.comentario);
    formData.append("userID",receta.userID);
    formData.append("imagenReceta",receta.imagenReceta);
    
    
    //console.log("dato",formData);
    //console.log("url",url);
    try{
        let response = await fetch(url,{
            method: 'PUT', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
             // 'x-access-token': WebToken.webToken,
            'Origin':'http://localhost:3000',
            'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo)
            {
                case 201:
                {
                    //guardo token
                    localStorage.setItem("x",data.loginUser.token);
                    //guardo usuario logueado
                    //let user = data.loginUser.user;
                    //localStorage.setItem("nombre",user.name);
                    //localStorage.setItem("email",user.email);
                    
                    return ({rdo:0,mensaje:"Ok"});//correcto
                }
                case 202:
                {
                    //error rececta
                    return ({rdo:1,mensaje:"la receta ingresada no existe en nuestra base."});
                }
                case 203:
                {
                    //error fecha
                    return ({rdo:1,mensaje:"La fecha de la receta es incorrecta."});
                }
                default:
                {
                    //otro error
                    return ({rdo:1,mensaje:"El nombre del Medico no existe"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };



}

export const getImagenesByID= async function(){

    //url webservices
    let url = urlWebServices.getImagenesByID;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('dni', localStorage.getItem('dni'));
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===200)
        {
            let data = await response.json();
            console.log("imagenesUser",data);
            let listaImg = data.data.docs;
            return listaImg;
        }
        else
        {
            let vacio=[];
            console.log("No hay imagenes")
            return (vacio);
            
        }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const uploadFile= async function(files,nombres)
{
     //url webservices
     let url = urlWebServices.uploadFile;
  
    console.log('files', files)
    console.log('nombres',nombres)
    const formData = new FormData();
    //agrego archivos para subir
    for (let i = 0; i < files.length; i++)
    {
        formData.append('files', files[i], nombres[i])
    }
   
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/form-data',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                //'Content-Type': 'application/form-data'
            },
            body:formData
        });
    
        let archivos = await response.json()
        console.log('respuestaUpload', archivos);
        return archivos;
    } catch (err) {
        alert('Error uploading the files')
        console.log('Error uploading the files', err)
    }
}

export const guardarImagenUser = async function(message)
{
    //url webservices
    let url = urlWebServices.guardarImgenUser;
    //console.log("url",url);
    //console.log("token",WebToken.webToken);
    const formData = new URLSearchParams();
    formData.append('dni', message.dni);
    formData.append('nombreImagen',message.imagen);
    
    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': localStorage.getItem('x'),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body:formData
        });
        if (response.status===201)
        {
            return true;
        }
        else
        {
           return false; 
        }
    }
    catch(error)
    {
        console.log("error",error);
        return false;
    };
}

