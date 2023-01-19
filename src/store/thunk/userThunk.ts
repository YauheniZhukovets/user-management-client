import {AxiosError} from "axios";
import {AppThunk} from "../../type/StoreTypes";
import {setError, setStatus} from "../actions/appAction";
import {setUsers} from "../actions/userAction";
import {fetchUser} from "../../http/userAPI";

export const fetchUsers = (): AppThunk => async (dispatch) => {
    dispatch(setStatus('loading'))
    try {
        const res = await fetchUser()
        dispatch(setUsers(res))
    } catch (error) {
        const err = error as AxiosError
        dispatch(setError(err.message))
    } finally {
        dispatch(setStatus('succeeded'))
    }
}