import React from "react";
import { CLOSE_SIDE_BAR, OPEN_SIDE_BAR } from "../action";

const mainReducer = (state, action) =>{
    const actionType = action.type
    switch(actionType){
        case OPEN_SIDE_BAR:
            return {...state, openSideBar: !state.openSideBar}
            break;
        case CLOSE_SIDE_BAR:
            return {...state, openSideBar: false}
            break;
        default:
            throw new Error(`No matching ${actionType} - action type`)
    }
}

export default mainReducer