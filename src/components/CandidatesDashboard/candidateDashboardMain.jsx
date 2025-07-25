import React from 'react';
import { useState } from 'react';
import { Navbar, Container, Button, Nav, Breadcrumb, Image, Col, Row, Form, InputGroup } from 'react-bootstrap';
import './candidateDashboard.css'
// import PostJobForm from './postJobForm'
// import ApplicationStatisticsDashboard from './ApplicationStatistics'
import skylarklogo from '../../assets/logo/Skylark3.jpeg'
import profile from '../../assets/image/candidateImage.jpg'
import { FaStar } from "react-icons/fa";
import { PiSignpostBold } from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { TfiLocationArrow } from "react-icons/tfi";
import { FiGrid, FiFileText, FiHeart, FiBell, FiMessageSquare, FiLogOut, FiMenu, FiEdit, FiTarget, FiCheckCircle, FiPlus, FiMapPin, FiBriefcase, FiPhone } from 'react-icons/fi';
import { GrDiamond } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import { PiCalendarDotsLight } from "react-icons/pi";
import { RiWechatLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { RiLockUnlockLine } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { } from 'react-icons/fi';
import { PiUserCircleGear } from "react-icons/pi";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaChevronDown } from 'react-icons/fa'
import { PiSubtitlesLight } from "react-icons/pi";
import { PiBuildingsBold } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaList, FaIndustry, FaUserTie, FaBuilding, FaBriefcase, FaGraduationCap, FaChartLine, FaRupeeSign, FaVenusMars, FaLaptopHouse, FaUsers, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ApplicationStatistics from './ApplicationStatistics';
import CandidateProfile from './candidateProfilePage';
import AppliedJobs from './AppliedJobs';
import InterviewSchedule from './InterviewSchedule'
import ChattingPage from './MessageInbox'
import Notification from './Notifications'
import PrivacyControl from './PrivacyControl'
import LogoutModal from './Lougout'
import PricingPlans from './PremiumPackage'
import FindRecruiter from './FindRecruiter'

const BreadcrumbNav = ({ activeItem }) => {
    // Format the activeItem string (e.g., 'AdminAccess' -> 'Admin Access')
    const formatItem = (item) => {
        return item?.replace(/([A-Z])/g, ' $1').trim();
    };

    return (
        <div className="text-start mt-3 ms-3">
            <Breadcrumb className="custom-breadcrumb">
                <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }} >
                    Home
                </Breadcrumb.Item>

                {activeItem && (
                    <Breadcrumb.Item active className="text-capitalize">
                        {formatItem(activeItem)}
                    </Breadcrumb.Item>
                )}
            </Breadcrumb>
        </div>
    );
};

const NavbarComponent = () => {
    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: '#1e88e5', height: 'auto' }}>
                {/* Full width container */}
                <Container fluid className="px-3 py-2 d-flex justify-content-between align-items-center flex-wrap">
                    {/* Left: Logo */}
                    <Navbar.Brand href="#">
                        <img
                            src={skylarklogo} // Replace with actual logo
                            alt="Skylark HR"
                            className="rounded"
                            height="50"
                        />
                    </Navbar.Brand>
                    {/* Menu Items */}
                    <Navbar.Collapse id="navbar-content" className="justify-content-center">
                        <Nav className="d-flex align-items-center gap-4">
                            <Nav.Link href="#" className="text-white">Home</Nav.Link>
                            <Nav.Link href="#" className="text-white">Jobs</Nav.Link>
                            <Nav.Link href="#" className="text-white">Featured <FaStar className="text-warning" /></Nav.Link>
                            <Nav.Link href="#" className="text-white">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/* Navbar Toggle for Mobile */}
                    <Navbar.Toggle aria-controls="navbar-content" className="border-0 text-white" />

                    {/* Right: Post Job, Bell, Profile */}
                    <Navbar.Collapse id="navbar-content" className="justify-content-end">
                        <Nav className="d-flex align-items-center gap-5">
                            <div className="d-none d-md-flex">
                                <FiBell size={35} color="#fff" style={{ cursor: 'pointer' }} />
                            </div>
                            <div
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={profile}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <span className="ms-2 d-none d-lg-inline text-white">Profile Name</span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

const RightSide = () => {
    return (
        <ApplicationStatistics />
    );
}

function CandidateDashboardMain() {
    const [activeItem, setActiveItem] = useState('Dashboard');
    return (
        <>
            <NavbarComponent />
            <BreadcrumbNav activeItem={activeItem} />
            <Container fluid className=" px-3 m-3" style={{ overflowX: 'hidden' }}>
                <Row>
                    {/* Left Sidebar - Filters */}
                    <Col
                        xs={12}
                        md={2}
                        lg={2}
                        className="rounded p-3 mb-3 mb-md-0 shadow-sm"
                        style={{ overflowY: 'auto', backgroundColor: '#87C6F4', minHeight: '100vh' }}
                    >
                        <div className=''>
                            <ul className="list-unstyled m-0 g-5">
                                <li
                                    className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item  ${activeItem === 'Dashboard' ? 'active-item' : ''
                                        }`}
                                    onClick={() => setActiveItem('Dashboard')}
                                >
                                    <FiMenu size={20} className="me-2" />
                                    <span>Dashboard</span>
                                </li>

                                {/* <li className="fw-normal d-flex align-items-center active-item rounded py-2 px-3 mb-2">
                                    <FiMenu size={20} className="me-2" />
                                    <span>Dashboard</span>
                                </li> */}
                                <li
                                    className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Premium Packages' ? 'active-item' : ''
                                        }`}
                                    onClick={() => setActiveItem('Premium Packages')}
                                >
                                    <GrDiamond size={20} className="me-2" />
                                    <span className="text-nowrap">Premium Packages</span>
                                </li>
                                {/* <li className="fontColor424242 fw-normal sidebar-item d-flex align-items-center py-2 px-3 mb-2">
                                    <GrDiamond size={20} className="me-2" />
                                    <span className='text-nowrap'>Premium Packages </span>
                                </li> */}
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Candidate Profile' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Candidate Profile')}>
                                    <CgProfile size={20} className="me-2" />
                                    <span className='text-nowrap'>Candidate Profile</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Applied Jobs' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Applied Jobs')}>
                                    <PiApplePodcastsLogoLight size={20} className="me-2" />
                                    <span>Applied Jobs</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Interview Schedule' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Interview Schedule')}>
                                    <PiCalendarDotsLight size={20} className="me-2" />
                                    <span className='text-nowrap'>Interview Schedule</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Message Inbox' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Message Inbox')}>
                                    <RiWechatLine size={20} className="me-2" />
                                    <span>Message Inbox</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Notification' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Notification')}>
                                    <IoNotificationsOutline size={20} className="me-2" />
                                    <span>Notification</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Resume Builder' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Resume Builder')}>
                                    <CgFileDocument size={20} className="me-2" />
                                    <span>Resume Builder</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Privacy Control' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Privacy Control')}>
                                    <RiLockUnlockLine size={20} className="me-2" />
                                    <span>Privacy Control</span>
                                </li>

                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Find Recruiters' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Find Recruiters')}>
                                    <PiUserCircleGear size={20} className="me-2" />
                                    <span>Find Recruiters</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Logout' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Logout')}>
                                    <FiLogOut size={20} className="me-2" />
                                    <span>Logout</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    {/* Right Column - Job Component */}
                    <Col xs={12} md={10} lg={10} className="d-flex justify-content-center text-center mt-0 ml-0">
                        {activeItem === 'Dashboard' && <RightSide />}
                        {activeItem === 'Candidate Profile' && <CandidateProfile />}
                        {activeItem === 'Applied Jobs' && <AppliedJobs />}
                        {activeItem === 'Interview Schedule' && <InterviewSchedule />}
                        {activeItem === 'Message Inbox' && <ChattingPage />}
                        {activeItem === 'Notification' && <Notification />}
                        {activeItem === 'Privacy Control' && <PrivacyControl />}
                        {activeItem === 'Logout' && <LogoutModal />}
                        {activeItem === 'Premium Packages' && <PricingPlans />}
                        {activeItem === 'Find Recruiters' && <FindRecruiter />}
                    </Col>
                </Row>
            </Container >
        </>
    )
}
export default CandidateDashboardMain



