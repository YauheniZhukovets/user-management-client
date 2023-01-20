import {DomainUser} from "../../interface/userIntarface";
import {ActionUserType} from "../types/userType";
import {NullAnd} from "../../type/NullAnd";

const initialState = {
    users: [] as DomainUser[],
    userId: null as NullAnd<number>
}

type InitialStateType = typeof initialState

export const userReducer = (state = initialState, action: ActionUserType): InitialStateType => {
    switch (action.type) {
        case 'USER/SET-USER-ID': {
            return {...state, userId: action.id}
        }
        case 'USER/SET-USERS': {
            return {...state, users: action.users.map((u) => ({...u, isChecked: false}))}
        }
        default:
            return state
    }
}

