import {ActionAuthType} from "../types/authTypes";


const initialState = {
    isLoggedIn: false,
}

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: ActionAuthType): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET-IS-LOGGED-IN': {
            return {...state, isLoggedIn: action.value}
        }
        default:
            return state
    }
}

