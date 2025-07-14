import React from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import { BsBriefcase, BsPeople, BsSliders } from 'react-icons/bs';
import { MdDashboard } from "react-icons/md";
import './AdminAccess.css';
const actions = [
    {
        title: 'Job Management',
        icon: <BsBriefcase size={25} />,
        items: ['Create a new Job', 'Edit Job and Stages', 'Change Job Status'],
    },
    {
        title: 'Candidate Management',
        icon: <BsPeople size={25} />,
        items: ['Edit User details', 'Edit Job and Stages', 'Change Job Status'],
    },
    {
        title: 'User Management',
        icon: <BsSliders size={25} />,
        items: ['Edit User details', 'Edit Job and Stages', 'Change Job Status'],
    },
];

const AdminAccess = () => {
    return (
        <Container fluid className="admin-access-wrapper p-4">
            <h5 className="fw-semibold mb-4 d-flex align-items-center fontclr">
                <MdDashboard size={22} className="me-2" style={{ color: '#1e88e5' }} />
                Admin Access
            </h5>

            {/* Header Row */}
            <div className="border rounded-3 mb-3">
                <Row
                    className="fw-semibold fontclr text-start text-md-center py-2 px-3"
                    style={{ fontSize: '0.95rem' }}
                >
                    <Col xs={12} md={6} className="mb-2 mb-md-0 text-start">Actions</Col>
                    <Col xs={12} md={2} className="mb-2 mb-md-0">Administrator</Col>
                    <Col xs={12} md={2} className="mb-2 mb-md-0">Moderator</Col>
                    <Col xs={12} md={2}>Viewer</Col>
                </Row>
            </div>

            {/* Dynamic Section Rows */}
            {actions.map((section, idx) => (
                <div key={idx} className="border rounded-3 mb-3">
                    {/* Section Title */}
                    <div
                        className="d-flex align-items-center px-3 py-2 border-bottom"
                        style={{ color: '#1e88e5', whiteSpace: 'nowrap', overflow: 'hidden' }}
                    >
                        <span className="me-2">{section.icon}</span>
                        <span className="fw-semibold text-truncate">{section.title}</span>
                    </div>

                    {/* Section Items */}
                    {section.items.map((item, i) => (
                        <Row
                            key={i}
                            className="py-2 px-3 border-top text-start text-md-center"
                        >
                            <Col xs={12} md={6} className="fontclr mb-2 mb-md-0 text-start">
                                {item}
                            </Col>
                            <Col xs={12} md={2} className="mb-2 mb-md-0">
                                <input type="checkbox" defaultChecked />
                            </Col>
                            <Col xs={12} md={2} className="mb-2 mb-md-0">
                                <input type="checkbox" defaultChecked />
                            </Col>
                            <Col xs={12} md={2}>
                                <input type="checkbox" />
                            </Col>
                        </Row>
                    ))}
                </div>
            ))}
        </Container>
    );
};

export default AdminAccess;