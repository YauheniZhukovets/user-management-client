import {setIsLogin, setRegistrationIsCompleted} from "../actions/authAction";

export type SetIsLoggedInType = ReturnType<typeof setIsLogin>
export type SetRegistrationIsCompletedType = ReturnType<typeof setRegistrationIsCompleted>

export type ActionAuthType = SetIsLoggedInType | SetRegistrationIsCompletedType

