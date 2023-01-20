import {setIsLogin, setRegistrationIsCompleted} from "../actions/authAction";
import {AppThunk} from "../../type/StoreTypes";
import {setError, setIsInitialize} from "../actions/appAction";
import {check, login, logOut, registration} from "../../http/authAPI";
import {setUserId} from "../actions/userAction";

export const signIn = (email: string, password: string): AppThunk => async (dispatch) => {
    const date = new Date()
    try {
        const data: any = await login(email, password, date)
        dispatch(setUserId(data.id))
        dispatch(setIsLogin(true))
        dispatch(setError(null))
    } catch (error: any) {
        console.log(error)
        dispatch(setError(error.response.data.message))
    }
}

export const register = (email: string, password: string, name: string): AppThunk => async (dispatch) => {
    try {
        await registration(email, password, name)
        dispatch(setRegistrationIsCompleted(true))
        dispatch(setError(null))
    } catch (error: any) {
        dispatch(setError(error.response.data.message))
    }
}


export const initializeMe = (): AppThunk => async (dispatch) => {
    try {
        const data: any = await check()
        dispatch(setUserId(data.id))
        dispatch(setIsLogin(true));
        dispatch(setError(null))
    } catch (error: any) {
        dispatch(setError(error.response.data.message))
    } finally {
        dispatch(setIsInitialize(true))
    }
}

export const logout = (): AppThunk => async (dispatch) => {
    try {
        await logOut()
        dispatch(setIsLogin(false))
        dispatch(setError(null))
    } catch (error: any) {
        dispatch(setError(error.response.data.message))
    } finally {
        dispatch(setRegistrationIsCompleted(false))
    }
}
