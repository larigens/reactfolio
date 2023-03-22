import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Navigation from './Navigation';

export default function Header() {
    // useState Hooks to keep track of what page  should be displayed. 
    const [currentPage, setCurrentPage] = useState("Home");

    return (
        <>
            <header>
                <Navbar expand="lg" className="p-2">
                    <Container fluid>
                        <Navbar.Brand className="fw-semibold gradient-text heading-font fs-3" href="/" onClick={() => setCurrentPage("Home")}> Larissa Guilherme </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarSupportedContent" />
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="me-auto mb-2 mb-lg-0">
                                <Nav.Link className={`nav-link light-shades gradient-hv mt-2 fs-5 fw-semibold ${currentPage === "About" || currentPage === "Home" ? "gradient-text" : ""}`} href="#About" onClick={() => setCurrentPage("About")}>About Me</Nav.Link>
                                <Nav.Link className={`nav-link light-shades gradient-hv mt-2 fs-5 fw-semibold ${currentPage === "Portfolio" ? "gradient-text" : ""}`} href="#Portfolio" onClick={() => setCurrentPage("Portfolio")}>Portfolio</Nav.Link>
                            </Nav>
                            <Nav className="ms-auto mb-2 mb-lg-0 justify-content-end">
                                <Nav.Link className={`nav-link light-shades gradient-hv mt-2 fs-5 fw-semibold ${currentPage === "Contact" ? "gradient-text" : ""}`} href="#Contact" onClick={() => setCurrentPage("Contact")}>Contact Me</Nav.Link>
                                <Nav.Link className={`nav-link light-shades gradient-hv mt-2 fs-5 fw-semibold ${currentPage === "Resume" ? "gradient-text" : ""}`} href="#Resume" onClick={() => setCurrentPage("Resume")}>Resume</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <main className="mb-5 pb-5">
                <Navigation currentPage={currentPage} />
            </main>
        </>
    )
}