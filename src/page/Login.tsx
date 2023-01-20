import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {Navigate, NavLink} from "react-router-dom";
import {MAIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {signIn} from "../store/thunk/authThunk";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {AlertError} from "../utils/AlertError";
import {NullAnd} from "../type/NullAnd";

export const Login = () => {
    const dispatch = useAppDispatch()
    const isLogin = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const error = useAppSelector<NullAnd<string>>(state => state.app.error)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const submit = async () => {
        dispatch(signIn(email, password))
    }

    if (isLogin) {
        return <Navigate to={MAIN_ROUTE}/>;
    }
    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight}}
        >
            <Card className='w-50 p-5'>
                <h2 className='m-auto'>Авторизация</h2>
                <Form className='d-flex flex-column'>
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
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                        </div>
                        <Button variant='outline-primary'
                                onClick={submit}
                        >Войти
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