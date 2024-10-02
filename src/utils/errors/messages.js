import {errorCodes} from "./codes"

// DRY !!
export const getErrorMessageWrong = (code) => {
    if(code === 'try_again'){
        return "Por favor prueba nuevamente"
    }
    if(code === 'card_expired'){
        return "Tarjeta expirada"
    }
    if(code === 'contact_us'){
        return "Contactese con nuestro soporte"
    }
    return "Algo ocurrió con la aplicacion"
}


// Correcion para no repetir ifs
// Switch
export const getErrorMessageSwitch = (code) => {
    switch(code){
        case 'try_again':
            return "Por favor prueba nuevamente"
        case 'card_expired':
            return "Tarjeta expirada"
        case 'contact_us':
            return "Contactese con nuestro soporte"
        default:
            return "Algo ocurrio con la aplicacion"
    }
}


// Otra optimizacion mejor con abstraccion
export const getErrorMessage = (code) => errorCodes[code] || "Algo ocurrio con la aplicacion"




