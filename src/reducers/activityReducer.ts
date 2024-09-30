import { Activity } from "../types/types"

export type ActivityActions = {
    type : 'save-activity', paylodad: { newActivity: Activity}
}

//Creamos un type para el state del reducer
type ActivityState = {
    activities: Activity[]
}

//A este objeto le pasamos que sea de tipo ActivityState y su propiedad sea un arreglo vacio
//Es un arreglo vacío por ser el valor inicial de nuestro state
export const initialState : ActivityState = {
    activities : []
}

//La función que conecta ambos types
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    
    if(action.type === 'save-activity') {
        //Este código maneja la lógica para actualizar el state
        console.log('Desde nuestro reducer')

    }

    return state
}