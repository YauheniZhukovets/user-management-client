import React, {ChangeEvent} from 'react';
import {DomainUser} from "../interface/userInterface";
import {Form, ListGroup} from "react-bootstrap";
import {useAppSelector} from "../hooks/hooks";

type UserItemType = {
    user: DomainUser
    onItemCheck: (e: ChangeEvent<HTMLInputElement>, item: DomainUser) => void
}

export const UserItem: React.FC<UserItemType> = React.memo(({onItemCheck, user}) => {
    const id = useAppSelector(state => state.user.userData?.id)

    return (
        <div>
            <ListGroup horizontal className='pt-2'>
                <ListGroup.Item style={{width: '5%'}}>
                    <Form.Check
                        type="checkbox"
                        checked={user.isChecked}
                        onChange={(e) => onItemCheck(e, user)}
                    />
                </ListGroup.Item>
                <ListGroup.Item style={{width: '5%'}}>{user.id}</ListGroup.Item>
                <ListGroup.Item style={{width: '15%'}}>{user.name}</ListGroup.Item>
                <ListGroup.Item
                    style={user.id === id ? {fontWeight: "bolder", width: '20%'} : {width: '20%'}}>{user.email}
                </ListGroup.Item>
                <ListGroup.Item style={{width: '20%'}}>{user.createdAt}</ListGroup.Item>
                <ListGroup.Item
                    style={{width: '20%'}}>{user.lastVisit ?? user.updatedAt}
                </ListGroup.Item>
                <ListGroup.Item style={{width: '10%'}}>{user.isBanned ? "Забанен" : "Активен"}</ListGroup.Item>
            </ListGroup>
        </div>
    )
})