import React, {createContext, useReducer} from "react";
import AppReducer from './AppReducer';

//Initialisation de l'état
const initialState = {
    users: [
        {id:1, name:'Utilisateur un'},
        {id:2, name:'Utilisateur deux'},
        {id:3, name:'Utilisateur trois'}
    ]

};

//création context

export const GlobalContext = createContext(initialState);

//Provider component

export const GLobalProdvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <GlobalContext.Provider value={{
            users: state.users
        }}>

        {children}
        </GlobalContext.Provider>
    )
}