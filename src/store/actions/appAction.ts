import {NullAnd} from "../../type/NullAnd";

export const setError = (error: NullAnd<string>) => {
    return {type: 'APP/SET-ERROR', error} as const
}
export const setIsInitialize = (value: boolean) => {
    return {type: 'APP/SET-IS-INITIALIZE', value} as const
}
export const setStatus = (status: NullAnd<string>) => {
    return {type: 'APP/SET-STATUS', status} as const
}