import {setUserId, setUsers} from "../actions/userAction";

export type GetUsersType = ReturnType<typeof setUsers>
export type SetUserIdType = ReturnType<typeof setUserId>

export type ActionUserType = GetUsersType | SetUserIdType

