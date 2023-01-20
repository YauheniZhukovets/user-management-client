import {DomainUser, UserData} from "../../interface/userInterface";
import {ActionUserType} from "../types/userType";
import {NullAnd} from "../../type/NullAnd";

const initialState = {
    users: [] as DomainUser[],
    userData: null as NullAnd<UserData>
}

type InitialStateType = typeof initialState

export const userReducer = (state = initialState, action: ActionUserType): InitialStateType => {
    switch (action.type) {
        case 'USER/SET-USER': {
            return {...state, userData: action.data}
        }
        case 'USER/SET-USERS': {
            return {...state, users: action.users.map((u) => ({...u, isChecked: false}))}
        }
        default:
            return state
    }
}

