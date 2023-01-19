import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Auth} from "../page/Auth";
import {Main} from "../page/Main";
import {ERROR_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path={MAIN_ROUTE} element={<Main/>}/>
            <Route path={LOGIN_ROUTE} element={<Auth/>}/>
            <Route path={REGISTRATION_ROUTE} element={<Auth/>}/>
            <Route path={ERROR_ROUTE} element={<h1 style={{textAlign: 'center'}}>404:PAGE NOT FOUND</h1>}/>
            <Route path={'*'} element={<Navigate to={'/404'}/>}/>
        </Routes>
    )
}