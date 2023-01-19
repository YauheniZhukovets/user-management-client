import {setError, setIsInitialize, setStatus} from "../actions/appAction";

export type SetStatusType = ReturnType<typeof setStatus>
export type SetErrorType = ReturnType<typeof setError>
export type SetIsInitializeType = ReturnType<typeof setIsInitialize>

export type ActionAppType = SetStatusType | SetErrorType | SetIsInitializeType

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
