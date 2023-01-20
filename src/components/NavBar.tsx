import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {logout} from "../store/thunk/authThunk";
import {useAppDispatch} from "../hooks/hooks";

type NavBarType = {
    baneUsers: () => void
    removeUsers: () => void
}

export const NavBar: React.FC<NavBarType> = React.memo(({removeUsers, baneUsers}) => {
    const dispatch = useAppDispatch()

    const logOut = () => {
        dispatch(logout())
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>User Management</Navbar.Brand>
                    <Nav className="me-auto">
                        <Button className="m-1"
                                onClick={baneUsers}
                                variant="outline-warning"
                        >Блокировка
                        </Button>

                        <Button className="m-1"
                                onClick={removeUsers}
                                variant="outline-danger"
                        >Удаление
                        </Button>
                    </Nav>
                    <Button className="m-1"
                            variant="outline-primary"
                            onClick={logOut}
                    >Выйти
                    </Button>
                </Container>
            </Navbar>
        </div>
    )
})