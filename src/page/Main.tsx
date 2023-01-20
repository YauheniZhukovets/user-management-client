import React, {ChangeEvent, useState} from 'react';
import {UserList} from "../components/UserList";
import {NavBar} from "../components/NavBar";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {DomainUser} from "../interface/userInterface";
import {banedUser, removeUser} from "../store/thunk/userThunk";

export const Main = () => {
    const dispatch = useAppDispatch()
    const users = useAppSelector<DomainUser[]>(state => state.user.users)
    const [masterChecked, setMasterChecked] = useState<boolean>(false)
    const [selectedList, setSelectedList] = useState<number[]>([])

    const onMasterCheck = (e: ChangeEvent<HTMLInputElement>) => {
        users.map((u) => (u.isChecked = e.target.checked))
        setMasterChecked(e.target.checked)
        setSelectedList(users.filter((e) => e.isChecked).map((u) => u.id))
    }

    const onItemCheck = (e: ChangeEvent<HTMLInputElement>, item: DomainUser) => {
        users.map(u => (u.id === item.id ? u.isChecked = e.target.checked : u))
        const totalItems = users.length
        const totalCheckedItems = users.filter((u) => u.isChecked).length
        setMasterChecked(totalItems === totalCheckedItems)
        setSelectedList(users.filter((u) => u.isChecked).map((u) => u.id))
    }

    const baneCheckedUsers = () => {
        dispatch(banedUser(selectedList))
    }

    const removeCheckedUsers = () => {
        dispatch(removeUser(selectedList))
    }

    return (
        <div>
            <NavBar baneUsers={baneCheckedUsers}
                    removeUsers={removeCheckedUsers}
            />
            <UserList users={users}
                      masterChecked={masterChecked}
                      onItemCheck={onItemCheck}
                      onMasterCheck={onMasterCheck}
            />
        </div>
    )
}
