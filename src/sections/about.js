import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function renderAbout() {

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
                    <Col md={11} className="me-2 mb-3">
                        <Row className="flex-nowrap">
                            <Col className="card-text me-2 pb-3">
                                <p className="justify dark-accent fs-medium">
                                    Raised on the coast of Brazil, I relocated to the US in 2020 and since then, technology has been my calling.
                                    I believe that <span className="gradient-text">coding</span> was destined to choose me, as I take pleasure in
                                    learning new tricks and tools that simplify both my work and daily life. My journey as a software engineer
                                    commenced from this passion for problem-solving and creating aesthetically pleasing outcomes.
                                </p>
                            </Col>
                        </Row>
                        <Row className="flex-nowrap">
                            <Col className="card-text me-2 pb-3">
                                <p className="justify dark-accent fs-medium">
                                    In my pursuit of honing my craft, I challenge myself to constantly improve, and welcome any feedback or advice that could help me reach my goals.
                                    Currently, I'm working on a personal project, Bugs Diaries, a website that allows writers to publish, edit, and manage their articles
                                    about the latest information on technology trends, best practices, and emerging technologies. My aim is to inspire future programmers by passing on the knowledge.
                                    The site also has a commenting system that enables readers to interact with authors, ask questions, and share their thoughts.
                                </p>
                            </Col>
                        </Row>
                        <Row className="flex-nowrap">
                            <Col className="card-text me-2 pb-3">
                                <p className="justify dark-accent fs-medium">
                                    During my leisure time, I like to play video games and workout to <span className="gradient-text"> de-stress </span> after hours of <span className="gradient-text">de-bugging</span> hah
                                </p>
                            </Col>
                        </Row>
                        <Row className="d-flex justify-content-center ms-4 me-4 mb-3 mt-4">
                            <Col className="fs-4 card-text me-2 mt-3 gradient-text fs-medium" style={styles.cardTextSpc}>
                                Create. Code. Design. Debug. Play. Workout. Have Fun !important;
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card>
        </Container>
    )
}