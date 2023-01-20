import {setUserData, setUsers} from "../actions/userAction";

export type GetUsersType = ReturnType<typeof setUsers>
export type SetUserIdType = ReturnType<typeof setUserData>

export type ActionUserType = GetUsersType | SetUserIdType

