import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnRight } from '@fortawesome/free-solid-svg-icons';
import { projects } from '../data/projects'

export default function Project() {
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
                {projects.map((project, index) => (
                    <Carousel.Item key={index}>
                        <Container className="justifify-content-start">
                            <h3 className="gradient-text fw-bold typing-slow ms-5 ps-4">{project.title}</h3>
                            <p className="light-accent fw-semibold ms-5 ps-4">{project.description}</p>
                            <FontAwesomeIcon icon={faArrowsTurnRight} className="fs-5 ms-5 ps-4 light-accent" />
                            <a href={project.repository} className="light-accent fw-bold ms-1 gradient-hv"> Check GitHub Repository </a>
                        </Container>
                        <Container className="text-center mt-3">
                            <a href={project.link}>
                                <img src={project.image} alt="Project 1" width="90%" style={styles.imgRound} />
                            </a>
                        </Container>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}
