import {$authHost} from "./index";
import jwtDecode from "jwt-decode";

export const registration = async (email: string, password: string, name: string) => {
    const {data} = await $authHost.post('registration', {email, password, name})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email: string, password: string, date: Date) => {
    const {data} = await $authHost.post('login', {email, password, date})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const logOut = async () => {
    const {data} = await $authHost.delete('logout')
    localStorage.setItem('token', data.token)
    return data
}