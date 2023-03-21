import React from 'react';
import { Container } from 'react-bootstrap';
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
            <div class="d-flex justify-content-center contact-container p-2">
                <div class="contact-card ms-2 me-3">
                    {/* Face 1 class has been added for the card that will appear on the front  */}
                    <div class="d-flex justify-content-center align-items-center card-face face1 gradient radius-15">
                        {/* The content inside the first card - icon and title  */}
                        <div class="card-content text-center">
                            <FontAwesomeIcon icon={faTwitter} className="shades fs-1" />
                            <h4 class="shades fs-5 mt-1">Twitter</h4>
                        </div>
                    </div>
                    {/* Face 2 class has been added for the card that will appear on the back  */}
                    <div class="d-flex justify-content-center align-items-center card-face face2 p-1 background-shades radius-15">
                        <div class="card-content text-center">
                            {/* On click it will open the link in the href attribute in a new tab */}
                            <a href="https://twitter.com/coffeebr_eak" target="_blank" rel="noreferrer" type="button" class="light-accent fs-small ps-3 pe-3 pt-2 pb-2 radius-15">
                                Follow Me</a>
                        </div>
                    </div>
                </div>
                <div class="contact-card ms-2 me-3">
                    <div class="d-flex justify-content-center align-items-center card-face face1 gradient radius-15">
                        <div class="card-content text-center">
                            <FontAwesomeIcon icon={faLinkedin} className="shades fs-1" />
                            <h4 class="shades fs-5 mt-1">LinkedIn</h4>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center card-face face2 radius-15">
                        <div class="card-content text-center">
                            <a href="https://www.linkedin.com/in/lari-gui/" target="_blank" rel="noreferrer" type="button" class="light-accent fs-small ps-3 pe-3 pt-2 pb-2 radius-15">
                                Connect With Me</a>
                        </div>
                    </div>
                </div>
                <div class="contact-card ms-2 me-3">
                    <div class="d-flex justify-content-center align-items-center card-face face1 gradient radius-15">
                        <div class="card-content text-center">
                            <FontAwesomeIcon icon={faGithub} className="shades fs-1" />
                            <h4 class="shades fs-5 mt-1">GitHub</h4>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center card-face face2 radius-15">
                        <div class="card-content text-center">
                            <a href="https://github.com/larigens" target="_blank" rel="noreferrer" type="button" class="light-accent fs-small ps-3 pe-3 pt-2 pb-2 radius-15">
                                Follow Me</a>
                        </div>
                    </div>
                </div>
                <div class="contact-card ms-2 me-3">
                    <div class="d-flex justify-content-center align-items-center card-face face1 gradient radius-15">
                        <div class="card-content text-center">
                            <FontAwesomeIcon icon={faEnvelope} className="shades fs-1" />
                            <h4 class="shades fs-5 mt-1">Email</h4>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center card-face face2 radius-15">
                        <div class="card-content text-center">
                            {/* On click it launches the Email Client installed on the user's computer with a default email subject along with my email address */}
                            <a href="mailto:larigens@gmail.com?subject= Feedback" target="_blank" rel="noreferrer" type="button" class="light-accent fs-small ps-3 pe-3 pt-2 pb-2 radius-15">
                                Email Me</a>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="justify-content-center pt-5 mt-5 mb-2">
                <Container className="text-center">
                    <span className="gradient-text" style={styles.span}>&copy;Larissa Guilherme </span>
                </Container>
            </footer>
        </>
    )
}