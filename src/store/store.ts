import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from "./reducer/authReducer";
import {appReducer} from "./reducer/appReducer";
import {userReducer} from "./reducer/userReducer";


const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    user: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store