import {AxiosError} from "axios";
import {AppThunk} from "../../type/StoreTypes";
import {setError} from "../actions/appAction";
import {setUsers} from "../actions/userAction";
import {blockUser, deleteUser, fetchUser} from "../../http/userAPI";
import {logout} from "./authThunk";

export const fetchUsers = (): AppThunk => async (dispatch) => {
    try {
        const res = await fetchUser()
        dispatch(setUsers(res))
        dispatch(setError(null))
    } catch (error) {
        const err = error as AxiosError
        dispatch(setError(err.message))
    }
}

export const banedUser = (id: number[]): AppThunk => async (dispatch, getState) => {
    const userId = getState().user.userData!.id
    try {
        await blockUser(id)
        if (id.includes(userId!)) {
            dispatch(logout())
        }
        dispatch(fetchUsers())
        dispatch(setError(null))
    } catch (error: any) {
        dispatch(setError(error.response.data.message))
    }
}

export const removeUser = (id: number[]): AppThunk => async (dispatch, getState) => {
    const userId = getState().user.userData!.id
    try {
        await deleteUser(id)
        if (id.includes(userId!)) {
            dispatch(logout())
        }
        dispatch(fetchUsers())
        dispatch(setError(null))
    } catch (error: any) {
        dispatch(setError(error.response.data.message))
    }
}

