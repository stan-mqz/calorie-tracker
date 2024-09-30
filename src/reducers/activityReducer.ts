import { Activity } from "../types/types"

/*Creamos un type para el state inicial. Como nuestro state inicial es un state general
y cada propiedad es un state diferente, podemos tipar esos states para evitar que reciban valores 
incorrectos*/

type ActivityState = {
    activities: Activity[]//Este state recibirá un arreglo de objetos de tipo Actitvity 

    /*Aca podriamos añadir mas estados y definiriles un tipado estático, por ejemplo:
    counter : number
    */
}

/*Creamos la acción save-activity que nos permita modificar el state que le indiquemos en su respectiva
condición*/

export type ActivityActions = {

    /* Pasamos el type (descripcion de lo que hace) y el payload: los nuevos datos del estado,
       también especificamos el tipo de dato del payload. Por ejemplo

       type : 'ejemplo', paylaod : string
    */
    type : 'save-activity', paylodad: { newActivity: Activity}
}


/*Esta variable (objeto) almacena los states iniciales que le pasemos como sus propiedades. Al tener un tipo de
 ActivityState deberá tener todas las propiedaes pasadas al type y el tipo de dato de las propiedades 
 en el type*/

export const initialState : ActivityState = {
    activities : []

    //counter: 0
}

//La función  que conecta el initital state y y las acciones
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {

    //Indicamos que pasa cuando llamemos a esta acción
    if(action.type === 'save-activity') {
        //Este código maneja la lógica para actualizar el state
        console.log('Desde nuestro reducer')

    }

    return state
}