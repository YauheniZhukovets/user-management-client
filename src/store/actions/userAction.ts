import {User, UserData} from "../../interface/userInterface";

export const setUserData = (data: UserData) => {
    return {type: 'USER/SET-USER', data} as const
}
export const setUsers = (users: User[]) => {
    return {type: 'USER/SET-USERS', users} as const
}