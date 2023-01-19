import axios from "axios";

export const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)