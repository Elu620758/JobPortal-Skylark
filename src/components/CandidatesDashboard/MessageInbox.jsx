import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button, InputGroup, Dropdown, Badge } from "react-bootstrap";
import { FaChevronDown } from 'react-icons/fa';
import { BsSearch } from "react-icons/bs";

const usersData = [
    {
        name: "Alice",
        img: "https://i.pravatar.cc/45?img=1",
        status: "Available",
        online: true,
        unread: 2,
    },
    {
        name: "Bob",
        img: "https://i.pravatar.cc/45?img=2",
        status: "Busy",
        online: "busy",
        unread: 0,
    },
    {
        name: "Charlie",
        img: "https://i.pravatar.cc/45?img=3",
        status: "Offline",
        online: false,
        unread: 5,
    },
];

const messagesData = [
    { from: "Alice", text: "Hi, how are you?" },
    { from: "You", text: "I'm good, thanks!" },
    { from: "Alice", text: "Want to catch up later?" },
    { from: "You", text: "Sure, sounds good." },
];

const ChattingPage = () => {
    const [users, setUsers] = useState(usersData);
    const [messages, setMessages] = useState(messagesData);
    const [newMessage, setNewMessage] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleSend = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { from: "You", text: newMessage }]);
            setNewMessage("");
        }
    };

    return (
        <Container fluid className="bg-light" style={{ minHeight: "100vh", padding: "1rem" }}>
            <Row className="g-3" style={{ margin: 0 }}>
                {/* Left Sidebar */}
                {(!isMobile || !selectedUser) && (
                    <Col xs={12} md={4} lg={3}>
                        <div className="p-3">
                            <h5 className="mb-3 fw-bold text-start">Message Inbox</h5>
                            <InputGroup className="mb-3">
                                <InputGroup.Text className="bg-light border-0">
                                    <BsSearch />
                                </InputGroup.Text>
                                <Form.Control placeholder="Search Message" className="bg-light border-0" />
                            </InputGroup>

                            {users.map((user, idx) => (
                                <div
                                    key={idx}
                                    className="mb-2 border-0 shadow-sm"
                                    style={{ borderRadius: "12px", cursor: "pointer" }}
                                    onClick={() => setSelectedUser(user)}
                                >
                                    <Card.Body className="d-flex align-items-center justify-content-between py-2 px-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="position-relative">
                                                <img
                                                    src={user.img}
                                                    alt={user.name}
                                                    className="rounded-circle"
                                                    width={45}
                                                    height={45}
                                                />
                                            </div>
                                            <div>
                                                <div className="d-flex align-items-center fw-semibold">
                                                    <span
                                                        className={`me-2 p-1 border border-white rounded-circle ${user.online === true
                                                            ? "bg-success"
                                                            : user.online === "busy"
                                                                ? "bg-warning"
                                                                : "bg-danger"
                                                            }`}
                                                        style={{ width: "10px", height: "10px" }}
                                                    ></span>
                                                    <p className="mb-0">{user.name}</p>
                                                </div>
                                                <div style={{ fontSize: "0.85rem", color: "#424242" }}>
                                                    {user.status}
                                                </div>
                                            </div>
                                        </div>
                                        {user.unread > 0 && (
                                            <Badge
                                                bg="primary"
                                                pill
                                                style={{
                                                    fontSize: "0.75rem",
                                                    padding: "4px 8px",
                                                    minWidth: "24px",
                                                    textAlign: "center",
                                                }}
                                            >
                                                {user.unread}
                                            </Badge>
                                        )}
                                    </Card.Body>
                                </div>
                            ))}
                        </div>
                    </Col>
                )}

                {/* Right Chat Area */}
                {(!isMobile || selectedUser) && (
                    <Col xs={12} md={8} lg={9}>
                        <Row className="align-items-center justify-content-end mb-4">
                            <Col xs="auto" className="d-flex gap-4">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        as="button"
                                        bsPrefix="btn"
                                        className="btn btn-light border rounded d-flex justify-content-between align-items-center gap-3"
                                    >
                                        <span>Status</span> <FaChevronDown size={12} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item style={{ color: "#43a047" }}>Available</Dropdown.Item>
                                        <Dropdown.Item style={{ color: "#e53935" }}>Offline</Dropdown.Item>
                                        <Dropdown.Item style={{ color: "#f0c909" }}>Busy</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        as="button"
                                        bsPrefix="btn"
                                        className="btn btn-light border rounded d-flex justify-content-between align-items-center gap-3"
                                    >
                                        <span>Last 2 months</span> <FaChevronDown size={12} />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Last 2 months</Dropdown.Item>
                                        <Dropdown.Item>Last 4 months</Dropdown.Item>
                                        <Dropdown.Item>Last 6 months</Dropdown.Item>
                                        <Dropdown.Item>Last 8 months</Dropdown.Item>
                                        <Dropdown.Item>Last 5 Years</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>

                        <div className="p-3">
                            {isMobile && selectedUser && (
                                <Button variant="link" onClick={() => setSelectedUser(null)} className="mb-3 p-0 fw-semibold">
                                    ← Back to Inbox
                                </Button>
                            )}

                            {/* Header */}
                            <div className="d-flex align-items-center gap-2 mb-3">
                                <img
                                    src={selectedUser?.img || users[0].img}
                                    alt="user"
                                    className="rounded-circle"
                                    width={50}
                                    height={50}
                                />
                                <div>
                                    <div className="fw-bold">{selectedUser?.name || users[0].name}</div>
                                    <div className="text-muted">Active</div>
                                </div>
                            </div>

                            {/* Chat Box */}
                            <div
                                className="p-3"
                                style={{ height: "400px", overflowY: "auto", background: "#fafafa", borderRadius: "10px" }}
                            >
                                {messages.map((msg, i) => (
                                    <div
                                        key={i}
                                        className={`d-flex flex-column ${msg.from === "You" ? "align-items-end" : "align-items-start"
                                            } mb-3`}
                                    >
                                        {msg.from !== "You" && <small className="fw-semibold mb-1">{msg.from}</small>}
                                        <div className="bg-white shadow-sm rounded p-2" style={{ maxWidth: "70%" }}>
                                            <span style={{ fontSize: "0.95rem", color: "#424242" }}>{msg.text}</span>
                                        </div>
                                        {msg.from === "You" && <small className="mt-1">You</small>}
                                    </div>
                                ))}
                            </div>

                            {/* Message Input */}
                            <InputGroup className="mt-3 w-100">
                                <Form.Control
                                    placeholder="Type a message..."
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                />
                                <div className="ms-2">
                                    <Button
                                        className="px-3 fw-semibold"
                                        style={{ backgroundColor: "#1e88e5" }}
                                        onClick={handleSend}
                                    >
                                        Send
                                    </Button>
                                </div>
                            </InputGroup>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default ChattingPage;