import { React, useState } from 'react';
import { Container, Row, Col, Card, Badge, Dropdown, ButtonGroup, DropdownButton, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import candidateImage from '../../assets/image/candidateImage.jpg'
import interviewInvite1 from '../../assets/image/interviewInvite1.jpg'
import interviewInvite2 from '../../assets/image/interviewInvite2.jpg'
import './Notifications.css'
import Infosys from '../../assets/logo/Infosys.png'
import { PiBriefcase } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaMapMarkerAlt, FaRupeeSign, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const candidates = [
    {
        name: 'Jon Hendry',
        logo: interviewInvite1,
        status: 'Applied',
        status_text: '30 mins ago',
        color: '#1e88e5',
    },
    {
        name: 'Liam',
        logo: interviewInvite2,
        status: 'Under_Review',
        status_text: '1h ago',
        color: '#f0c909'
    },
    {
        name: 'Matteo',
        logo: candidateImage,
        status: 'Shortlisted',
        status_text: '1d ago',
        color: '#43a047',
    },
    {
        name: 'Matteo',
        logo: candidateImage,
        status: 'Not_Shortlisted',
        status_text: '2d ago',
        olor: '#e53935'
    },
    {
        name: 'Liam',
        logo: interviewInvite1,
        status: 'interviewInvite1',
        status_text: '1d ago',
        color: '#fb8500',
    },
];
const statusColorMap = {
    Applied: '#dde6ef',
    Shortlisted: '#ecf5ed',
    Rejected: '#f44336',
    Under_Review: '#fffbe7',
    Not_Shortlisted: '#fcebeb',
    Irrelevant_Candidate: '#f2e6d9',
    On_Hold: '#f5edfc'
    // add more if needed
};

const Notification = () => {

    //navigate things

    const navigate = useNavigate();

    const handleEyeClick = () => {
        navigate('/jobdescription'); // change this to your route
    };

    return (
        <Container className="my-4">
            <Row className="align-items-center justify-content-between mb-4">
                <Col xs={12} md="auto" className="mb-2 mb-md-0">
                    <h5 className="fw-semibold mb-0">Notification</h5>
                </Col>
                <Col xs={12} md="auto">
                    <Dropdown>
                        <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn btn-light border rounded d-flex justify-content-between align-items-center w-100"
                        >
                            <span className='textColor-applied'>Week</span> <FaChevronDown size={12} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Last 4 Months</Dropdown.Item>
                            <Dropdown.Item>Last 6 Months</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>

            <Row className="gy-3">
                {candidates.map((person, index) => (
                    <Col key={index} xs={12} md={6} className="gx-1 d-flex justify-content-center">
                        <div className="p-3 shadow-sm rounded-4 border position-relative w-100" style={{ maxWidth: '95%' }}>
                            <Row className="gx-2 align-items-center">
                                {/* Mobile Layout Wrapper */}
                                <div className="d-block d-md-none text-center w-100">
                                    {/* Image Centered */}
                                    <div className="mb-3">
                                        <img
                                            src={person.logo}
                                            alt={person.name}
                                            className="rounded-circle"
                                            style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                                        />
                                    </div>
                                    {/* Text Below */}
                                    <p className="text-muted fs-small mb-1">{person.status_text}</p>
                                    <h6 className="fw-semibold mb-2 textColor-applied">{person.name}</h6>
                                    <p className="text-muted mb-3">
                                        Your resume has been {person.status.replace(/_/g, ' ').toLowerCase()}
                                    </p>
                                    {/* Eye Icon Centered Below */}
                                    <div onClick={handleEyeClick} style={{ cursor: 'pointer' }}>
                                        <FaEye
                                            size={30}
                                            style={{
                                                backgroundColor: '#dfd9d7',
                                                padding: '6px',
                                                borderRadius: '50%',
                                                color: '#5d4037',
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Default (Desktop/Tablet) Layout */}
                                <div className="d-none d-md-flex w-100 align-items-center">
                                    {/* Left - Image */}
                                    <Col xs="auto" className="me-2">
                                        <img
                                            src={person.logo}
                                            alt={person.name}
                                            className="rounded-circle"
                                            style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                                        />
                                    </Col>
                                    {/* Center - Text */}
                                    <Col className="px-2 pt-2">
                                        <p className='textColor-applied fs-small mb-1 text-start'>{person.status_text}</p>
                                        <h6 className="fw-semibold mb-2 textColor-applied text-start">{person.name}</h6>
                                        <p className='textColor-applied text-start'>Your resume has been {person.status.replace(/_/g, ' ').toLowerCase()}</p>
                                    </Col>
                                    {/* Right - Eye Icon */}
                                    <Col xs="auto" className="d-flex justify-content-end align-self-start mt-2 me-2">
                                        <div onClick={handleEyeClick} style={{ cursor: 'pointer' }}>
                                            <FaEye
                                                size={30}
                                                style={{
                                                    backgroundColor: '#dfd9d7',
                                                    padding: '6px',
                                                    borderRadius: '50%',
                                                    color: '#5d4037',
                                                }}
                                            />
                                        </div>
                                    </Col>
                                </div>
                            </Row>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Notification;