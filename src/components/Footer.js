import React from 'react';
import { Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    const styles = {
        span: {
            letterSpacing: "3px"
        }
    };

    return (
        <>
            <footer className="justify-content-center mt-5 mb-2">
                <Container className="d-flex flex-wrap contact-container pb-4 pt-3">
                    <Col md={3} className="contact-card">
                        {/* Face 1 className has been added for the card that will appear on the front  */}
                        <Container className="d-flex align-items-center card-face face1 gradient radius-100">
                            {/* The content inside the first card - icon and title  */}
                            <Container className="card-content text-center">
                                <FontAwesomeIcon icon={faTwitter} className="shades fs-2" />
                            </Container>
                        </Container>
                        {/* Face 2 className has been added for the card that will appear on the back  */}
                        <Container className="d-flex justify-content-center align-items-center card-face face2 p-1 background-shades radius-100">
                            <Container className="card-content text-center">
                                {/* On click it will open the link in the href attribute in a new tab */}
                                <a href="https://twitter.com/coffeebr_eak" target="_blank" rel="noreferrer" type="button" className="light-accent fs-small pt-2 pb-2 gradient-hv">
                                    Follow Me</a>
                            </Container>
                        </Container>
                    </Col>
                    <Col md={3} className="contact-card">
                        <Container className="d-flex align-items-center card-face face1 gradient radius-100">
                            <Container className="card-content text-center">
                                <FontAwesomeIcon icon={faLinkedin} className="shades fs-2" />
                            </Container>
                        </Container>
                        <Container className="d-flex justify-content-center align-items-center card-face face2 radius-100">
                            <Container className="card-content text-center me-1">
                                <a href="https://www.linkedin.com/in/lari-gui/" target="_blank" rel="noreferrer" type="button" className="light-accent fs-small pt-2 pb-2 gradient-hv text-center">
                                    Connect</a>
                            </Container>
                        </Container>
                    </Col>
                    <Col md={3} className="contact-card">
                        <Container className="d-flex align-items-center card-face face1 gradient radius-100">
                            <Container className="card-content text-center">
                                <FontAwesomeIcon icon={faGithub} className="shades fs-2" />
                            </Container>
                        </Container>
                        <Container className="d-flex justify-content-center align-items-center card-face face2 radius-100">
                            <Container className="card-content text-center">
                                <a href="https://github.com/larigens" target="_blank" rel="noreferrer" type="button" className="light-accent fs-small pt-2 pb-2 gradient-hv">
                                    Follow Me</a>
                            </Container>
                        </Container>
                    </Col>
                    <Col md={3} className="contact-card">
                        <Container className="d-flex align-items-center card-face face1 gradient radius-100">
                            <Container className="card-content text-center">
                                <FontAwesomeIcon icon={faEnvelope} className="shades fs-2" />
                            </Container>
                        </Container>
                        <Container className="d-flex justify-content-center align-items-center card-face face2 radius-100">
                            <Container className="card-content text-center">
                                {/* On click it launches the Email Client installed on the user's computer with a default email subject along with my email address */}
                                <a href="mailto:larigens@gmail.com?subject= Feedback" target="_blank" rel="noreferrer" type="button" className="light-accent fs-small pt-2 pb-2 gradient-hv">
                                    Email Me</a>
                            </Container>
                        </Container>
                    </Col>
                </Container>
                <Container className="text-center">
                    <span className="gradient-text" style={styles.span}>&copy;Larissa Guilherme </span>
                </Container>
            </footer>
        </>
    )
}