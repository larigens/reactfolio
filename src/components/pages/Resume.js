import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import skills from '../../data/skills.json';

export default function Resume() {
    return (
        <Container className='main'>
            <Container id="portfolio" className="d-flex justify-content-center mt-5 pt-3 mb-4">
                <h2 className="display-4 text-center gradient-text fw-bold heading-font mt-2">Skills</h2>
            </Container>
            <Container id="resume" className="mt-5 mb-5">
                <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4 justify-content-center">
                    {skills.map((skill) => (
                        <Col key={skill.name} className="mb-4">
                            <Card className="h-100 background-shades">
                                <Card.Body className="d-flex flex-column justify-content-between">
                                    <Card.Title className="text-center gradient-text fw-bolder fs-5 mb-4">
                                        {skill.name}
                                    </Card.Title>
                                    <ListGroup variant="flush" className="list-group-flush border-0 text-center m-2">
                                        {skill.skills.map((item) => (
                                            <ListGroup.Item key={item} className='dark-accent background-shades border-bottom-0'>{item}</ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container className="mt-auto text-center">
                <Button href="../../pdf/Resume.pdf" download className="gradient shades body-font width-20 no-border fs-5 fw-semibold">
                    <FontAwesomeIcon icon={faDownload} className="fs-3 me-1" /> Resume
                </Button>
            </Container>
        </Container>
    )
}