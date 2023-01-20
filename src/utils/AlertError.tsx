import React, {useEffect, useState} from 'react';
import {Alert} from "react-bootstrap";
import {NullAnd} from "../type/NullAnd";
import {setError} from "../store/actions/appAction";
import {useAppDispatch} from "../hooks/hooks";

type AlertErrorType = {
    error: NullAnd<string>
}

export const AlertError: React.FC<AlertErrorType> = ({error}) => {
    const dispatch = useAppDispatch()
    const [show, setShow] = useState<boolean>(!!error)

    useEffect(() => {
        setTimeout(() => {
            if (show) {
                setShow(false)
                dispatch(setError(null))
            }
        }, 4000)
    }, [dispatch, show])

    return (
        <>
            {show
                ?
                <Alert className='mt-3' variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>{error}</Alert.Heading>
                </Alert>
                :
                <></>
            }
        </>
    )
}
