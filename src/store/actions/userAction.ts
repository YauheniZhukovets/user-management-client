import {User} from "../../interface/userInterface";

export const setUserId = (id: number) => {
    return {type: 'USER/SET-USER-ID', id} as const
}
export const setUsers = (users: User[]) => {
    return {type: 'USER/SET-USERS', users} as const
}