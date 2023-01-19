import {DomainUser} from "../../interface/userIntarface";
import {ActionUserType} from "../types/userType";

const initialState = {
    users: [] as DomainUser[],
    masterChecked: false,
}

type InitialStateType = typeof initialState

export const userReducer = (state = initialState, action: ActionUserType): InitialStateType => {
    switch (action.type) {
        case 'USER/SET-USERS': {
            return {...state, users: action.users.map((u) => ({...u, isChecked: false}))}
        }
        case 'USER/SET-MASTER-CHECK': {
            return {
                ...state,
                masterChecked: action.isChecked,
                users: state.users.map((u) => ({...u, isChecked: action.isChecked}))
            }
        }
        case 'USER/SET-USER-CHECK': {
            return {
                ...state,
                users: state.users.map((u) => u.id === action.id ? {...u, isChecked: action.isChecked} : u),
            }
        }
        default:
            return state
    }
}

