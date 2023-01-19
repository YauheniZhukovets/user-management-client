import {NullAnd} from "../../type/NullAnd";
import {ActionAppType, RequestStatusType} from "../types/appType";

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as NullAnd<string>,
    isInitialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: ActionAppType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS': {
            return {...state, status: action.status}
        }
        case 'APP/SET-ERROR': {
            return {...state, error: action.error}
        }
        case 'APP/SET-IS-INITIALIZE': {
            return {...state, isInitialized: action.value}
        }
        default:
            return state
    }
}

