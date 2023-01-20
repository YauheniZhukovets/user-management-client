import {setError, setIsInitialize} from "../actions/appAction";

export type SetErrorType = ReturnType<typeof setError>
export type SetIsInitializeType = ReturnType<typeof setIsInitialize>

export type ActionAppType = SetErrorType | SetIsInitializeType
