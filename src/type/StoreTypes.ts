import {store} from "../store/store";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {ActionAuthType} from "../store/types/authTypes";
import {ActionAppType} from "../store/types/appType";
import {ActionUserType} from "../store/types/userType";


export type AppAction = ActionAuthType | ActionAppType | ActionUserType
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AppAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppAction>