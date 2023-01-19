import React, {ChangeEvent, useCallback} from 'react';
import {UserItem} from "./UserItem";
import {DomainUser} from "../interface/userIntarface";
import {Container, Form, ListGroup} from "react-bootstrap";
import {useAppSelector} from "../hooks/hooks";

type UserListType = {
    users: DomainUser[]
}

export const UserList: React.FC<UserListType> = React.memo(({users}) => {
        const masterChecked = useAppSelector<boolean>(state => state.user.masterChecked)


        const onMasterCheck = (e: ChangeEvent<HTMLInputElement>) => {

        }

        const onItemCheck = useCallback((id: number, e: ChangeEvent<HTMLInputElement>) => {

        }, [])

        return (
            <Container>
                <div className='d-flex flex-column'>
                    <ListGroup horizontal className='pt-3'>
                        <ListGroup.Item style={{width: '5%', background: "lightgray"}}>
                            <Form.Check
                                type="checkbox"
                                checked={masterChecked}
                                onChange={(e) => onMasterCheck(e)}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item style={{width: '5%', background: "lightgray"}}>id</ListGroup.Item>
                        <ListGroup.Item style={{width: '15%', background: "lightgray"}}>Имя</ListGroup.Item>
                        <ListGroup.Item style={{width: '20%', background: "lightgray"}}>Email</ListGroup.Item>
                        <ListGroup.Item style={{width: '20%', background: "lightgray"}}>Дата
                            регистрации</ListGroup.Item>
                        <ListGroup.Item style={{width: '20%', background: "lightgray"}}>Дата последнего
                            входа</ListGroup.Item>
                        <ListGroup.Item style={{width: '10%', background: "lightgray"}}>Статус</ListGroup.Item>
                    </ListGroup>

                    {users.map((user) => {
                        return (
                            <div key={user.id}>
                                <UserItem user={user} onItemCheck={onItemCheck}/>
                            </div>
                        )
                    })}
                </div>
            </Container>

        )
    }
)