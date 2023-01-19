import {User} from "../../interface/userIntarface";

export const setUsers = (users: User[]) => {
    return {type: 'USER/SET-USERS', users} as const
}
export const setMasterCheck = (isChecked: boolean) => {
    return {type: 'USER/SET-MASTER-CHECK', isChecked} as const
}
export const setUserCheck = (id: number, isChecked: boolean) => {
    return {type: 'USER/SET-USER-CHECK', id, isChecked} as const
}