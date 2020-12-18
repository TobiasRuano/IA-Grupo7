import urlWebServices from '../controller/webServices.js';

export const generarTurnos= async function(newTurno) {
    //url webservices
    let url = urlWebServices.generarTurno;
    //armo json con datos
    const formData = new URLSearchParams();

    var result = newTurno.fecha.split('-');
    let parseFecha = new Date(result[0], result[1]-1, result[2]);
    console.log(parseFecha);
    
    // Dia el cual el back generara los turnos de 9 a 18hs. Franja de media hora.
    formData.append('fecha', parseFecha);
    formData.append('medico', newTurno.medico);
    formData.append('dniMedico', newTurno.dniMedico);

    try {
        const token = localStorage.getItem("x");
        console.log(token);
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

export const asignarTurno= async function(turnoDisponible) {
    //url webservices
    let url = urlWebServices.asignarTurno;
    //armo json con datos
    const formData = new URLSearchParams();
    
    formData.append('id', turnoDisponible.id);
    formData.append('fecha', turnoDisponible.fecha);
    formData.append('medico', turnoDisponible.medico);
    formData.append('dniMedico', turnoDisponible.dniMedico);
    formData.append('estado', turnoDisponible.estado);
    formData.append('userID', turnoDisponible.userID);
    formData.append('razon', turnoDisponible.razon);

    try {
        const token = localStorage.getItem("x");
        let response = await fetch(url,{
            method: 'PUT',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
        });
        
        let rdo = response.status;
        let data = await response.json();
        console.log("jsonresponse",data);
            switch(rdo) {
                case 200, 201: {
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

export const removeTurno= async function(removeTurno) {
    //url webservices
    let url = urlWebServices.cancelarTurno;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('id', removeTurno.id);
    formData.append('fecha', removeTurno.fecha);
    formData.append('medico', removeTurno.medico);
    formData.append('dniMedico', removeTurno.dniMedico);
    formData.append('estado', removeTurno.estado);
    formData.append('userID', removeTurno.userID);
    formData.append('razon', removeTurno.razon);

    try {
        const token = localStorage.getItem("x");
        let response = await fetch(url,{
            method: 'PUT',
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
                'x-access-token': token,
                'Access-Control-Allow-Origin': '*',
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
                    return ({rdo:0,mensaje:"Turno eliminado correctamente"});
                }
                default: {
                    return ({rdo:1,mensaje:"Ha ocurrido un error al intentar eliminar el turno del usuario"});                
                }
            }
    }
    catch(error) {
        console.log("error",error);
        return ({rdo:1,mensaje:"Ha ocurrido un grave error"});    
    };
}

export const getTurnosByDNI = async function(dni) {
    //url webservices
    let url = urlWebServices.misTurnos;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('userID', dni);

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
        let data = await response.json();
            switch(rdo) {
                case 201, 200: {

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

export const getTurnosDisponibles = async function(getTurnosDisponibles) {
    //url webservices
    let url = urlWebServices.turnosDisponibles;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('dniMedico', getTurnosDisponibles);

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
        let data = await response.json();
            switch(rdo) {
                case 201, 200: {
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