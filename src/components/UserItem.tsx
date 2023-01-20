import React, {ChangeEvent} from 'react';
import {DomainUser} from "../interface/userInterface";
import {Form, ListGroup} from "react-bootstrap";

type UserItemType = {
    user: DomainUser
    onItemCheck: (e: ChangeEvent<HTMLInputElement>, item: DomainUser) => void
}

export const UserItem: React.FC<UserItemType> = React.memo(({onItemCheck, user}) => {

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
                <ListGroup.Item style={{width: '20%'}}>{user.email}</ListGroup.Item>
                <ListGroup.Item style={{width: '20%'}}>{user.createdAt}</ListGroup.Item>
                <ListGroup.Item
                    style={{width: '20%'}}>{user.lastVisit ?? user.updatedAt}
                </ListGroup.Item>
                <ListGroup.Item style={{width: '10%'}}>{user.isBanned ? "Забанен" : "Активен"}</ListGroup.Item>
            </ListGroup>
        </div>
    )
})