import React, {useEffect} from 'react';
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {Login} from "../page/Login";
import {Main} from "../page/Main";
import {ERROR_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {fetchUsers} from "../store/thunk/userThunk";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {Registration} from "../page/Registration";

export const AppRouter = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLogin = useAppSelector<boolean>(state => state.auth.isLoggedIn)

    useEffect(() => {
        if (!isLogin) {
            return
        } else {
            dispatch(fetchUsers())
        }
    }, [dispatch, isLogin, navigate])

    return (
        <Routes>
            <Route path={LOGIN_ROUTE} element={<Login/>}/>
            <Route path={MAIN_ROUTE} element={isLogin ? <Main/> : <Navigate to={LOGIN_ROUTE} />}/>
            <Route path={REGISTRATION_ROUTE} element={<Registration/>}/>
            <Route path={ERROR_ROUTE} element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
            <Route path={'*'} element={<Navigate to={'/404'}/>}/>
        </Routes>
    )
}