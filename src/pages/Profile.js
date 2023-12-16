import React, {useState} from 'react';
import {Button, Col, Container, Form, Nav, Row, Tab, Tabs} from "react-bootstrap";
import ProfileForm from "../components/profile/ProfileForm";
import ChangePasswordFrom from "../components/profile/ChangePasswordFrom";
import PreferenceForm from "../components/profile/PreferenceForm";

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
                                <ChangePasswordFrom />
                            </>
                        )}

                        {key === 'preference' && (
                            <>
                                <PreferenceForm />
                            </>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Profile;