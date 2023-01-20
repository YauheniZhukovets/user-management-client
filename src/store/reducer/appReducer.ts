import {NullAnd} from "../../type/NullAnd";
import {ActionAppType} from "../types/appType";

const initialState = {
    error: null as NullAnd<string>,
    status: null as NullAnd<string>,
    isInitialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: ActionAppType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-ERROR': {
            return {...state, error: action.error}
        }
        case 'APP/SET-STATUS': {
            return {...state, status: action.status}
        }
        case 'APP/SET-IS-INITIALIZE': {
            return {...state, isInitialized: action.value}
        }
        default:
            return state
    }
}

