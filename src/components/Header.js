import React, { useState } from 'react';
import { Container, Navbar, Nav, Modal, Button } from 'react-bootstrap';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    // useState Hooks
    const [currentPage, setCurrentPage] = useState("Home"); // To keep track of what page  should be displayed. 
    const [show, setshow] = useState(false); // To keep track of whether the modal should be displayed or not. 
    const handleShow = () => setshow(true);
    const handleClose = () => setshow(false);

    return (
        <>
            <header>
                <Navbar expand="lg" className="p-2">
                    <Container fluid>
                        <Navbar.Brand className="fw-semibold gradient-text heading-font fs-3" href="/" onClick={() => setCurrentPage("Home")}> Larissa Guilherme </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="me-auto mb-2 mb-lg-0">
                                <Nav.Link className="nav-link light-shades gradient-hv mt-2 fs-5 fw-semibold" href="#About" onClick={() => setCurrentPage("About")}>About Me</Nav.Link>
                                <Nav.Link className="nav-link light-shades gradient-hv mt-2 fs-5 fw-semibold" href="#Portfolio" onClick={() => setCurrentPage("Portfolio")}>Portfolio</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto mb-2 mb-lg-0 justify-content-end">
                                <Nav.Link className="nav-link light-shades gradient-hv mt-2 fs-5 fw-semibold" href="#Contact" onClick={() => setCurrentPage("Contact")}>Contact Me</Nav.Link>
                                {/* OnClick it will call the function handleShow which sets showModal to true and displays the modal */}
                                <Nav.Link className="nav-link light-shades gradient-hv mt-2 fs-5 fw-semibold" href="#Resume" onClick={handleShow}>Resume</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Modal show={show} onHide={handleClose} aria-labelledby="download-modal">
                    <Modal.Header closeButton className="background-shades no-border">
                        <Modal.Title className="gradient-text fw-bold heading-font fs-4">
                            <FontAwesomeIcon icon={faFile} className="dark-accent fs-3 me-1" /> My Resume
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="pt-4 text-center background-shades no-border">
                        <p className="light-accent body-font fs-5">Thank you for considering me!</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center background-shades no-border pb-4">
                        <Button href="../pdf/Resume.pdf" download className="gradient main-brand body-font no-border width-20 fs-5 fw-semibold">
                            <FontAwesomeIcon icon={faDownload} className="fs-3 me-1" />
                        </Button>
                    </Modal.Footer>
                </Modal>
            </header>
            <main className="mb-5 pb-5">
                <Navigation currentPage={currentPage} />
            </main>
        </>
    )
}