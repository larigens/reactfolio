import React from 'react';
import { Carousel, Container } from 'react-bootstrap';


export default function renderPortfolio() {
    return (
        <>
            <Container id="portfolio" className="d-flex justify-content-center mt-5 pt-3 mb-4">
                <h2 className="display-4 text-center gradient-text fw-bold heading-font mt-2">Portfolio</h2>
            </Container>

            <Carousel id="portfolioCarousel">
                <Carousel.Item>
                    <Container className="justifify-content-start">
                        <h3 className="gradient-text typing-slow ms-5 ps-3">Bugs Diaries</h3>
                        <p className="dark-accent ms-5 ps-3">Blog that allows writers to publish, edit, and manage their articles.</p>
                    </Container>
                    <Container className="text-center">
                        <a href="https://bugs-diaries.herokuapp.com/">
                            <img src="../images/bugs-diaries.png" alt="Project 1" width="90%" />
                        </a>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container className="justifify-content-start w-75 ">
                        <h3 className="gradient-text typing-slow ms-5 ps-3">Paw Pals</h3>
                        <p className="dark-accent ms-5 ps-3">Help find loving homes for animals in need.</p>
                    </Container>
                    <Container className="text-center">
                        <a href="https://pawpals.herokuapp.com/">
                            <img src="../images/pawpals.png" alt="Project 2" width="90%" />
                        </a>
                    </Container>
                </Carousel.Item>

                <Carousel.Item>
                    <Container className="justifify-content-start w-75">
                        <h3 className="gradient-text typing-slow ms-5 ps-3">Carrot Calendar</h3>
                        <p className="dark-accent ms-5 ps-3">Perfect tool for connecting community members worldwide. This calendar was created to meet the needs of <a href="https://www.bobbyrabbits.com/" className="gradient-text fw-semibold">Bobby Rabbits'</a> website.</p>
                    </Container>
                    <Container className="text-center">
                        <a href="https://thebobfather2.github.io/carrotcalendar/">
                            <img src="../images/carrot-calendar.jpeg" alt="Project 3" width="90%" />
                        </a>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </>
    )
}