import {setIsLoggedIn} from "../actions/authAction";
import {AxiosError} from "axios";
import {AppThunk} from "../../type/StoreTypes";
import {setError, setIsInitialize, setStatus} from "../actions/appAction";
import {check, login, logOut, registration} from "../../http/authAPI";

export const signIn = (email: string, password: string): AppThunk => async (dispatch) => {
    dispatch(setStatus('loading'))
    try {
        const date = new Date()
        await login(email, password, date)
        dispatch(setIsLoggedIn(true))
    } catch (error) {
        const err = error as AxiosError
        dispatch(setError(err.message))
    } finally {
        dispatch(setStatus('succeeded'))
    }
}

export const register = (email: string, password: string, name: string): AppThunk => async (dispatch) => {
    dispatch(setStatus('loading'))
    try {
        await registration(email, password, name)
        dispatch(setIsLoggedIn(true))
    } catch (error) {
        const err = error as AxiosError
        dispatch(setError(err.message))
    } finally {
        dispatch(setStatus('succeeded'))
    }
}


export const initializeApp = (): AppThunk => async (dispatch) => {
    dispatch(setStatus('loading'))
    try {
        await check()
        dispatch(setIsLoggedIn(true));
    } catch (error) {
        const err = error as AxiosError
        dispatch(setError(err.message))
    } finally {
        dispatch(setStatus('succeeded'))
        dispatch(setIsInitialize(true))
    }
}

export const logout = (): AppThunk => async (dispatch) => {
    dispatch(setStatus('loading'))
    try {
        await logOut()
        dispatch(setIsLoggedIn(false))
    } catch (error) {
        const err = error as AxiosError
        dispatch(setError(err.message))
    } finally {
        dispatch(setStatus('succeeded'))
        dispatch(setIsInitialize(false))
    }
}