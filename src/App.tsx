import React, {useEffect} from 'react';
import {AppRouter} from "./components/AppRouter";
import {Spinner} from "react-bootstrap";
import {initializeMe} from "./store/thunk/authThunk";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";

export const App = () => {
    const dispatch = useAppDispatch()
    const isInitialized = useAppSelector<boolean>(state => state.app.isInitialized)

    useEffect(() => {
            dispatch(initializeMe())
    }, [dispatch])

    if (!isInitialized) {
        return <Spinner animation="grow"/>
    }

    return (
        <div>
            <AppRouter/>
        </div>
    )
}
