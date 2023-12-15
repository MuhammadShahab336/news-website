import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import loader from '../../assets/images/Spinner-1s-200px.svg'

const MainLoader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    if (loading) {
        return (
            <>
                <Row className="align-items-center justify-content-center vh-100">
                    <Col xs="auto">
                        <div className="text-center">
                            <img
                                src={loader}
                                alt="newzy-loder"
                                width={100}
                                height={100}
                                className="img-contain"
                            />
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
};

export default MainLoader;