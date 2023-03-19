import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnRight } from '@fortawesome/free-solid-svg-icons';

export default function renderPortfolio() {

    const styles = {
        imgRound: {
            borderRadius: "15px"
        }
    }
    return (
        <>
            <Container id="portfolio" className="d-flex justify-content-center mt-5 pt-3 mb-4">
                <h2 className="display-4 text-center gradient-text fw-bold heading-font mt-2">Portfolio</h2>
            </Container>

            <Carousel id="portfolioCarousel">
                <Carousel.Item>
                    <Container className="justifify-content-start">
                        <h3 className="gradient-text fw-bold typing-slow ms-5 ps-4">Bugs Diaries</h3>
                        <p className="light-accent fw-semibold ms-5 ps-4">Blog that allows writers to publish, edit, and manage their articles.</p>
                        <FontAwesomeIcon icon={faArrowsTurnRight} className="fs-5 ms-5 ps-4 light-accent" />
                        <a href="https://github.com/larigens/bugs-diaries" className="light-accent fw-bold ms-1 gradient-hv"> Check GitHub Repository </a>
                    </Container>
                    <Container className="text-center mt-3">
                        <a href="https://bugs-diaries.herokuapp.com/">
                            <img src="../images/bugs-diaries.png" alt="Project 1" width="90%" style={styles.imgRound} />
                        </a>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container className="justifify-content-start">
                        <h3 className="gradient-text fw-bold typing-slow ms-5 ps-4">Paw Pals</h3>
                        <p className="light-accent fw-semibold ms-5 ps-4">Help find loving homes for animals in need.</p>
                        <FontAwesomeIcon icon={faArrowsTurnRight} className="fs-5 ms-5 ps-4 light-accent" />
                        <a href="https://github.com/thebobfather2/pawpals" className="light-accent fw-bold ms-1 gradient-hv"> Check GitHub Repository </a>
                    </Container>
                    <Container className="text-center mt-3">
                        <a href="https://pawpals.herokuapp.com/">
                            <img src="../images/pawpals.png" alt="Project 2" width="90%" style={styles.imgRound} />
                        </a>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container className="justifify-content-start">
                        <h3 className="gradient-text fw-bold typing-slow ms-5 ps-4">Carrot Calendar</h3>
                        <p className="light-accent fw-semibold ms-5 ps-4">Perfect tool for connecting community members worldwide. This calendar was created to meet the needs of <a href="https://www.bobbyrabbits.com/" className="gradient-text fw-bold">Bobby Rabbits'</a> website.</p>
                        <FontAwesomeIcon icon={faArrowsTurnRight} className="fs-5 ms-5 ps-4 light-accent" />
                        <a href="https://github.com/thebobfather2/carrotcalendar" className="light-accent fw-bold ms-1 gradient-hv"> Check GitHub Repository </a>
                    </Container>
                    <Container className="text-center mt-3">
                        <a href="https://thebobfather2.github.io/carrotcalendar/">
                            <img src="../images/carrot-calendar.png" alt="Project 3" width="90%" style={styles.imgRound} />
                        </a>
                    </Container>
                </Carousel.Item>


                <Carousel.Item>
                    <Container className="justifify-content-start">
                        <h3 className="gradient-text fw-bold typing-slow ms-5 ps-4">Noter</h3>
                        <p className="light-accent fw-semibold ms-5 ps-4">PWA that allows you to create notes or code snippets with or without an internet connection.</p>
                        <FontAwesomeIcon icon={faArrowsTurnRight} className="fs-5 ms-5 ps-4 light-accent" />
                        <a href="https://github.com/larigens/noter" className="light-accent fw-bold ms-1 gradient-hv"> Check GitHub Repository </a>
                    </Container>
                    <Container className="text-center mt-3">
                        <a href="https://noter-coder.herokuapp.com/">
                            <img src="../images/noter.png" alt="Project 4" width="90%" style={styles.imgRound} />
                        </a>
                    </Container>
                </Carousel.Item>


                <Carousel.Item>
                    <Container className="justifify-content-start">
                        <h3 className="gradient-text fw-bold typing-slow ms-5 ps-4">Voyage</h3>
                        <p className="light-accent fw-semibold ms-5 ps-4">Weather app for travelers who want to keep up with the local weather wherever they are.</p>
                        <FontAwesomeIcon icon={faArrowsTurnRight} className="fs-5 ms-5 ps-4 light-accent" />
                        <a href="https://github.com/larigens/voyage" className="light-accent fw-bold ms-1 gradient-hv"> Check GitHub Repository </a>
                    </Container>
                    <Container className="text-center mt-3">
                        <a href="https://larigens.github.io/voyage/">
                            <img src="../images/voyage.png" alt="Project 5" width="90%" style={styles.imgRound} />
                        </a>
                    </Container>
                </Carousel.Item>


                <Carousel.Item>
                    <Container className="justifify-content-start">
                        <h3 className="gradient-text fw-bold typing-slow ms-5 ps-4">Chronos</h3>
                        <p className="light-accent fw-semibold ms-5 ps-4">This scheduling tool allows users to track their work schedule, including meetings and personal commitments, as well as view upcoming deadlines.</p>
                        <FontAwesomeIcon icon={faArrowsTurnRight} className="fs-5 ms-5 ps-4 light-accent" />
                        <a href="https://github.com/larigens/chronos" className="light-accent fw-bold ms-1 gradient-hv"> Check GitHub Repository </a>
                    </Container>
                    <Container className="text-center mt-3">
                        <a href="https://larigens.github.io/chronos/">
                            <img src="../images/chronos.png" alt="Project 6" width="90%" style={styles.imgRound} />
                        </a>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </>
    )
}