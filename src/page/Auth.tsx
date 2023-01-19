import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {Navigate, NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {register, signIn} from "../store/thunk/authThunk";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";

export const Auth = () => {
    const dispatch = useAppDispatch()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const submit = async () => {
        if (isLogin) {
            dispatch(signIn(email, password))
        } else {
            dispatch(register(email, password, name))
        }
    }

    if (isLoggedIn) {
        return <Navigate to={'/'}/>
    }
    return (
        <Container className='d-flex justify-content-center align-items-center'
                   style={{height: window.innerHeight}}>
            <Card className='w-50 p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    {!isLogin
                        ?
                        <Form.Control placeholder='Введите имя...'
                                      className='mt-3'
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                        >
                        </Form.Control>
                        :
                        <></>
                    }

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
                        {isLogin
                            ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>

                        }

                        <Button variant='outline-primary'
                                onClick={submit}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}
