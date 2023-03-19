import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faNode, faReact, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch, faCode, faBug, faBookOpen, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Row, Col, Collapse } from "react-bootstrap";
import renderAbout from '../pages/about';
import renderPortfolio from '../pages/portfolio';
import renderContact from '../pages/contact';

export default function Navigation({ currentPage }) {
    const [showAbout, setShowAbout] = useState(false);
    const handleClick = () => {
        setShowAbout(!showAbout);
    };
    if (currentPage === "Portfolio") {
        return (renderPortfolio())
    }
    // else if (currentPage === "Contact") {
    //     // Here we set the state variables using `useState`
    //     const [fullName, setfullName] = useState("");
    //     const [email, setEmail] = useState("");
    //     const [message, setMessage] = useState("");
    //     const [id, setId] = useState(0);
    //     const handleInputChange = (e) => {
    //         // Getting the value and name of the input which triggered the change
    //         const { name, value } = e.target;
    //         if (name === 'fullName') {
    //             setfullName(value)
    //         }
    //         else if (name === 'email') {
    //             setEmail(value)
    //         }
    //         else if (name === 'message') {
    //             setMessage(value)
    //         }
    //     };

    //     const handleIncrease = () => {
    //         setId((prevId) => {
    //             localStorage.setItem("myMessages", prevId.toString());
    //             return prevId + 1;
    //         });
    //     };

    //     const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    //     const handleFormSubmit = (e) => {
    //         // Preventing the default behavior of the form submit (which is to refresh the page)
    //         e.preventDefault();
    //         if (!emailRegex.test(email)) {
    //             alert("Please enter a valid email address");
    //             return;
    //         }
    //         handleIncrease();
    //         // Alert the user their message was submited successfully, and clear the inputs/textarea
    //         alert(`Thank you for your message ${fullName}!`);
    //         setfullName('');
    //         setEmail('');
    //         setMessage('')
    //     };
    //     return (renderContact(fullName, email, message))
    // }
    else {
        return (
            <Container className="pt-4">
                <Container className="justify-content-start mt-5 pt-5 mb-5 pb-4">
                    <Row className="justify-content-start mt-3 pt-2">
                        <Col md={12} className="ms-5 ps-4">
                            <Row className="justify-content-center align-items-center">
                                <Col md={3} className="text-end">
                                    <img src="../images/avatar.png" alt="female smiling" className="img-fluid" />
                                </Col>
                                <Col md={9} className="align-items-center">
                                    <Row className="me-5">
                                        <h1 className="display-5 gradient-text typing fw-light">
                                            Hi, I am <span className="gradient-text heading-font fw-semibold">Larissa!</span>
                                        </h1>
                                    </Row>
                                    <Row className="text-justify w-75">
                                        <p className="light-accent fs-5">
                                            I am an aspiring Software Developer living in Atlanta, GA and currently studying Full-Stack Web Development at Georgia Tech.
                                        </p>
                                    </Row>
                                    <Row className="justify-content-start text-justify w-75 mt-5">
                                        <Button size="lg" className="ms-2 gradient no-border" onClick={handleClick}>
                                            Read more <FontAwesomeIcon icon={faBookOpen} className="ms-2" />
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Collapse in={showAbout}>
                    <Container>{renderAbout()}</Container>
                </Collapse>
                <Container className="ms-4 pt-5">
                    <Row className="mt-5 pt-5 mb-1">
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faHtml5} className="fs-2 me-5 pe-5 light-accent" />
                        </Col>
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faCss3Alt} className="fs-2 me-5 pe-5  main-brand" />
                        </Col>
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faSquareJs} className="fs-2 me-5 pe-5 dark-accent" />
                        </Col>
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faNode} className="fs-2 me-5 pe-5 light-accent" />
                        </Col>
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faDatabase} className="fs-2 me-5 pe-5 main-brand" />
                        </Col>
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faReact} className="fs-2 me-5 pe-5 dark-accent" />
                        </Col>
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faGithub} className="fs-2 me-5 pe-5 light-accent" />
                        </Col>
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faCodeBranch} className="fs-2 me-5 pe-5 main-brand" />
                        </Col>
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faCode} className="fs-2 me-5 pe-5 dark-accent" />
                        </Col>
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faBug} className="fs-2 me-5 pe-5 light-accent" />
                        </Col>
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faGit} className="fs-2 me-5 pe-5 main-brand" />
                        </Col>
                        <Col md={1} className="text-center">
                            <FontAwesomeIcon icon={faLaptopCode} className="fs-2 me-5 pe-5 dark-accent" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}