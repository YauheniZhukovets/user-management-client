import {setMasterCheck, setUserCheck, setUsers} from "../actions/userAction";

export type GetUsersType = ReturnType<typeof setUsers>
export type SetMasterCheck = ReturnType<typeof setMasterCheck>
export type SetUserCheck = ReturnType<typeof setUserCheck>

export type ActionUserType = GetUsersType | SetMasterCheck | SetUserCheck

