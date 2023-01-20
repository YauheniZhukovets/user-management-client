import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {Navigate, NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {register} from "../store/thunk/authThunk";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {AlertError} from "../utils/AlertError";
import {NullAnd} from "../type/NullAnd";

export const Registration = () => {
    const dispatch = useAppDispatch()
    const isRegistrationCompleted = useAppSelector(state => state.auth.isCompletedRegister)
    const error = useAppSelector<NullAnd<string>>(state => state.app.error)

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const submit = async () => {
        dispatch(register(email, password, name))
    }

    if (isRegistrationCompleted) {
        return <Navigate to={LOGIN_ROUTE}/>;
    }

    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight}}
        >
            <Card className='w-50 p-5'>
                <h2 className='m-auto'>Регистрация</h2>
                <Form className='d-flex flex-column'>

                    <Form.Control placeholder='Введите имя...'
                                  className='mt-3'
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>

                    <Form.Control placeholder='Введите email...'
                                  className='mt-3'
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>

                    <Form.Control placeholder='Введите пороль...'
                                  className='mt-3'
                                  type='password'
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}

                    >

                    </Form.Control>

                    <div className='d-flex justify-content-between align-items-center mt-3 pl-3 pr-3'>

                        <div>
                            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                        </div>

                        <Button variant='outline-primary'
                                onClick={submit}
                        >
                            Регистрация
                        </Button>
                    </div>
                </Form>
                {error
                    ? <AlertError error={error}/>
                    : <></>
                }
            </Card>
        </Container>
    )
}