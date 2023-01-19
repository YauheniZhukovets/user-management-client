import {NullAnd} from "../../type/NullAnd";
import {RequestStatusType} from "../types/appType";

export const setStatus = (status: RequestStatusType) => {
    return {type: 'APP/SET-STATUS', status} as const
}
export const setError = (error: NullAnd<string>) => {
    return {type: 'APP/SET-ERROR', error} as const
}
export const setIsInitialize = (value: boolean) => {
    return {type: 'APP/SET-IS-INITIALIZE', value} as const
}
