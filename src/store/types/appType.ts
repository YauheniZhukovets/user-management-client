import {setError, setIsInitialize, setStatus} from "../actions/appAction";

export type SetErrorType = ReturnType<typeof setError>
export type SetIsInitializeType = ReturnType<typeof setIsInitialize>
export type SetStatusType = ReturnType<typeof setStatus>

export type ActionAppType = SetErrorType | SetIsInitializeType | SetStatusType
