import React, {useCallback, useEffect} from 'react';
import {UserList} from "../components/UserList";
import {NavBar} from "../components/NavBar";
import {fetchUsers} from "../store/thunk/userThunk";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {useNavigate} from "react-router-dom";
import {DomainUser} from "../interface/userIntarface";

export const Main = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const users = useAppSelector<DomainUser[]>(state => state.user.users)

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login')
            return
        } else {
            dispatch(fetchUsers())
        }
    }, [dispatch, isLoggedIn, navigate])

    const baneCheckedUsers = useCallback(() => {

    }, [])

    const removeCheckedUsers = useCallback(() => {

    }, [])


    return (
        <div>
            <NavBar baneUsers={baneCheckedUsers}
                    removeUsers={removeCheckedUsers}
            />
            <UserList users={users}/>
        </div>
    )
}
