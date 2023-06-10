import React, {useContext, useReducer} from "react";
import mainReducer from "../reducers/mainReducer";
import { OPEN_SIDE_BAR, CLOSE_SIDE_BAR } from "../action";

const initialState ={
    openSideBar: false
}


const MainContext = React.createContext()

export const MainProvider = ({children}) =>{
    const [state, dispatch] = useReducer(mainReducer, initialState)

    function openSideSlider(){
        dispatch({type: OPEN_SIDE_BAR})
    }
    function closeSideBar(){
        dispatch({type: CLOSE_SIDE_BAR})
    }

    return (
        <MainContext.Provider value={{...state, openSideSlider, closeSideBar}}>{children}</MainContext.Provider>
    )
}

export const useMainContext = () =>{
    return useContext(MainContext)
}