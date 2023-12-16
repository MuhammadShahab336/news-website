import React, {useState} from 'react';
import {Button, Col, Container, Form, Nav, Row, Tab, Tabs} from "react-bootstrap";
import ProfileForm from "../components/profile/ProfileForm";

const Profile = () => {
    const [key, setKey] = useState('profile')

    return (
        <>
            <Container>
                <br />
                <Row className="justify-content-center">
                    <Col lg={6}>
                        <Nav fill as="ul" className="justify-content-center shadow-sm">
                            <Nav.Item
                                as="li"
                                className={`${key === 'profile' ? 'bg-header' : 'bg-light'} `}
                                onClick={() => setKey('profile')}
                            >
                                <Nav.Link className={` ${key === 'profile' ? 'text-white' : 'text-dark'} border`}>
                                    Profile
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item
                                as="li"
                                className={`${key === 'changePassword' ? 'bg-header' : 'bg-light'} `}
                                onClick={() => setKey('changePassword')}
                            >
                                <Nav.Link className={` ${key === 'changePassword' ? 'text-white' : 'text-dark'} border`}>
                                    Change Password
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item
                                as="li"
                                className={`${key === 'preference' ? 'bg-header' : 'bg-light'} `}
                                onClick={() => setKey('preference')}
                            >
                                <Nav.Link className={` ${key === 'preference' ? 'text-white' : 'text-dark'} border`}>
                                    Preference
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <br/>

                        {key === 'profile' && (
                            <>
                                <ProfileForm />
                            </>
                        )}


                        {key === 'changePassword' && (
                            <>
                                <Form>
                                    <Form.Group className="mb-3 small">
                                        <Form.Label className="">
                                            Current Password
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            value="Muhammad"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3 small">
                                        <Form.Label className="">
                                            New Password
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            value="Shahab"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3 small">
                                        <Form.Label className="t">
                                            Confirmed Password
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            value="shahab@yopmail.com"
                                        />
                                    </Form.Group>

                                    <br />

                                    <Button
                                        variant="dark"
                                        className="w-100 rounded-0 shadow-none"
                                    >
                                        Save Password
                                    </Button>
                                </Form>
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Profile;