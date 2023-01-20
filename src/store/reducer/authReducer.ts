import {ActionAuthType} from "../types/authTypes";


const initialState = {
    isLoggedIn: false,
    isCompletedRegister: false,
}

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action: ActionAuthType): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET-IS-LOGGED-IN': {
            return {...state, isLoggedIn: action.value}
        }
        case 'AUTH/SET-IS-REGISTER-IN': {
            return {...state, isCompletedRegister: action.value}
        }
        default:
            return state
    }
}

