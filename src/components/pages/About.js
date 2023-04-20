import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function About() {

    const styles = {
        card: {
            flex: "1",
            flexGrow: "1",
        },
        cardTextSpc: {
            letterSpacing: "5.2px"
        }
    };

    return (
        <Container id="about" className="d-flex justify-content-center mt-5 pt-3 mb-2">
            <Card className="mt-4 m-3 p-1 background-shades" style={styles.card}>
                <Card.Body className="m-1">
                    <Card.Title className="display-4 text-center gradient-text fw-semibold heading-font mt-2">About Me</Card.Title>
                </Card.Body>
                <Row className="d-flex justify-content-center ms-2 mb-2">
                    <Col xs={12} md={11} className="me-2 mb-3">
                        <Row>
                            <Col className="card-text me-2 pb-3">
                                <p className="justify light-accent fs-medium">
                                    I recently found my true calling in technology. With an innate aptitude for coding, I take great pleasure in continually acquiring new knowledge and mastering the latest tools and techniques to streamline both my work and personal life. My journey as a software engineer began with a passion for creative problem-solving and a dedication to crafting aesthetically pleasing outcomes. I firmly believe that my affinity for coding is more than mere happenstance, and I approach every project with a commitment to excellence that is fueled by my innate passion for the field.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="card-text me-2 pb-3">
                                <p className="justify light-accent fs-medium">
                                In my unrelenting pursuit of honing my craft, I continually challenge myself to improve and readily welcome constructive feedback and advice that can aid me in achieving my objectives. At present, I am deeply immersed in a personal project called Bugs Diaries, which is a website that empowers writers to publish, edit, and manage their articles on the latest information regarding technology trends, emerging technologies, and best practices. My ultimate goal is to inspire future programmers by sharing my knowledge and expertise with others. To foster engagement, the site also features a dynamic commenting system that facilitates interaction between authors and readers, enabling the latter to ask questions and share their thoughts.                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="card-text me-2 pb-3">
                                <p className="justify light-accent fs-medium">
                                    During my leisure time, I like to play video games and workout to <span className="gradient-text"> de-stress </span> after hours of <span className="gradient-text">de-bugging</span> hah
                                </p>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center ms-4 me-4 mb-3 mt-4">
                            <Col xs={12} className="fs-4 card-text me-2 mt-3 gradient-text fs-medium text-center" style={styles.cardTextSpc}>
                                Create. Code. Design. Debug. Play. Workout. Have Fun !important;
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}