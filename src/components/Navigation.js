import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faNode, faReact, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch, faCode, faBug, faBookOpen, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Row, Col, Collapse } from "react-bootstrap";
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './Portfolio';

export default function Navigation({ currentPage }) {
    // Here we set the state variables using `useState`
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showAbout, setShowAbout] = useState(false);

    const handleClick = () => { setShowAbout(!showAbout) };

    switch (currentPage) {
        case 'Portfolio':
            return <Portfolio />
        case 'Contact':
            return <Contact fullName={fullName} setFullName={setFullName} email={email} setEmail={setEmail} message={message} setMessage={setMessage} />
        case 'Resume':
            return Resume()
        default:
            return renderHome()
    }

    function renderHome() {
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
                    <Container>{About()}</Container>
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
