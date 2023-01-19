import React, {useEffect} from 'react';
import {AppRouter} from "./components/AppRouter";
import {Spinner} from "react-bootstrap";
import {initializeApp} from "./store/thunk/authThunk";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";

export const App = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)

    useEffect(() => {
        if (!isLoggedIn) {
            dispatch(initializeApp())
        }
    }, [dispatch, isLoggedIn])

    if (!isInitialized) {
        return <Spinner animation="grow"/>
    }

    return (
        <div>
            <AppRouter/>
        </div>
    )
}
