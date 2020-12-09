import urlWebServices from '../controller/webServices.js';

export const register= async function(register) {
    //url webservices
    let url = urlWebServices.register;
    var result = register.fechaNac.split('-');
    let parseFecha = new Date(result[0], result[1]-1, result[2]);
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', register.email);
    formData.append('password', register.password);
    formData.append('dni', register.dni);
    formData.append('name', register.name);
    formData.append('surname', register.surname);
    formData.append('sexo', register.sexo);
    formData.append('fechaNac', parseFecha);
    formData.append('domicilio', register.domicilio);
    formData.append('permiso', '0');
    formData.append('telefono', 111111111);

    console.log(register.birthday);

    try {
        let response = await fetch(url,{
            method: 'POST',
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
            switch(rdo) {
                case 201: {
                    return ({rdo:0,mensaje:"Ok"});
                }
                case 202: {
                    return ({rdo:1,mensaje:"El mail ingresado ya existe en nuestra base."});
                }
                case 203: {
                    return ({rdo:1,mensaje:"El DNI ingresado ya existe en nuestra base de datos."});
                }
                default: {
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error) {
        console.log("ERROR:",error);
        return ({rdo:1,mensaje:"Ha ocurrido un grave error"});    
    };
}

export const login = async function(login) {
    //url webservices
    let url = urlWebServices.login;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', login.email);
    formData.append('password', login.password);
    console.log("dato",formData);
    console.log("url",url);
    try {
        let response = await fetch(url,{
            method: 'POST',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo) {
                case 201: {
                    //guardo token
                    localStorage.setItem("x",data.loginUser.token);
                    return ({userData: data.loginUser.user, rdo:0,mensaje:"Ok"});
                }
                case 202: {
                    console.log(data.status)
                    return ({rdo:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203: {
                    return ({rdo:1,mensaje:"La contraseña no es correcta."});
                }
                default: {
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error) {
        console.log("error",error);
        return ({rdo:1,mensaje:"Ha ocurrido un grave error"});
    };
}

export const updateUser= async function(updateUser) {
    //url webservices
    let url = urlWebServices.updateUser;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', updateUser.email != null ? updateUser.email : null);
    formData.append('dni', updateUser.dni);
    formData.append('nombre', updateUser.name != null ? updateUser.name : null);
    formData.append('apellido', updateUser.surname != null ? updateUser.surname : null);
    formData.append('genero', updateUser.genre != null ? updateUser.genre : null);
    formData.append('fechaNac', updateUser.birthday != null ? updateUser.birthday : null);
    formData.append('domicilio', updateUser.address != null ? updateUser.address : null);
    formData.append('telefono', updateUser.telefono != null ? updateUser.telefono : null);
    formData.append('permiso', updateUser.permiso != null ? updateUser.permiso : null);

    console.log(updateUser.name != null ? updateUser.name : null);

    try {
        const token = localStorage.getItem("x");
        let response = await fetch(url,{
            method: 'PUT',
            mode: "cors",
            headers: {
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': token,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo) {
                case 201, 200: {
                    return ({rdo:0,mensaje:"Ok"});
                }
                case 202: {
                    return ({rdo:1,mensaje:"El mail ingresado ya existe en nuestra base."});
                }
                case 203: {
                    return ({rdo:1,mensaje:"El DNI ingresado ya existe en nuestra base de datos."});
                }
                default: {
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error) {
        console.log("error",error);
        return ({rdo:1,mensaje:"Ha ocurrido un grave error"});    
    };
}

export const remove= async function(remove) {
    //url webservices
    let url = urlWebServices.deleteUser;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('dni', remove.dni);

    try {
        const token = localStorage.getItem("x");
        let response = await fetch(url,{
            method: 'POST',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': token,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
        });
        
        let data = await response.json().status;
        let rdo = response.status;
        console.log("Respuesta: ",response);
        console.log("jsonresponse",data);
            switch(rdo) {
                case 201, 200: {
                    return ({rdo:0,mensaje:"Ok"});
                }
                default: {
                    return ({rdo:1,mensaje:"Ha ocurrido un error al intentar eliminar el usuario"});                
                }
            }
    }
    catch(error) {
        console.log("error",error);
        return ({rdo:1,mensaje:"Ha ocurrido un grave error"});    
    };
}

export const getUserByDNI = async function(getUserByDNI) {
    //url webservices
    let url = urlWebServices.getUserByDNI;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('dni', getUserByDNI.dni);
    console.log("dato",formData);
    console.log("url",url);
    try {
        const token = localStorage.getItem("x");
        let response = await fetch(url,{
            method: 'POST',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': token,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo) {
                case 201: {
                    return ({rdo:0,mensaje:"Ok"});
                }
                default: {
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error) {
        console.log("error",error);
        return ({rdo:1,mensaje:"Ha ocurrido un grave error"});    
    };
}

export const getMedicos = async function() {
    //url webservices
    let url = urlWebServices.getMedicos;
    try {
        const token = localStorage.getItem("x");
        let response = await fetch(url,{
            method: 'GET',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': token,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("La jsonresponse es: ",data);
            switch(rdo) {
                case 201, 200: {
                    return ({data: data.data.docs,rdo:0,mensaje:"Ok"});
                }
                default: {
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error) {
        console.log("error",error);
        return ({rdo:1,mensaje:"Ha ocurrido un grave error"});    
    };
}

export const getUsers = async function() {
    //url webservices
    let url = urlWebServices.getUsers;
    //armo json con datos
    const formData = new URLSearchParams();
    try {
        const token = localStorage.getItem("x");
        let response = await fetch(url,{
            method: 'GET',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': token,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'}
            
        });
        
        let rdo = response.status;
        console.log("response",response);
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo) {
                case 201,200: {
                    return ({data: data.data.docs, rdo:0,mensaje:"Ok"});
                }
                default: {
                    return ({rdo:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error) {
        console.log("error",error);
        return ({rdo:1,mensaje:"Ha ocurrido un grave error"});    
    };
}