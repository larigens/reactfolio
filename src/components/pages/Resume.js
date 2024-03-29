import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faEye } from '@fortawesome/free-solid-svg-icons';
import { skills } from '../../data/skills.js';
import resume from '../../assets/pdf/Resume.docx';

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
                                    <Card.Title className="text-center light-shades fw-bolder fs-5 mb-4">
                                        {skill.name}
                                    </Card.Title>
                                    <ListGroup variant="flush" className="list-group-flush border-0 text-center m-2">
                                        <Container className='background-main radius-15'>
                                        {skill.skills.map((item) => (
                                            <ListGroup.Item as="li" key={item} className='no-border background-main'>{item}</ListGroup.Item>
                                        ))}
                                        </Container>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Container className="mt-auto text-center">
                <Button href={resume} download className="background-gradient light body-font width-20 no-border fs-5 fw-semibold m-3">
                    <FontAwesomeIcon icon={faDownload} className="fs-4 me-1" /> Resume
                </Button>
                <Button href="https://bold.pro/my/lari-gui" target="_blank" rel="noreferrer" download className="background-gradient light body-font width-20 no-border fs-5 fw-semibold m-3">
                    <FontAwesomeIcon icon={faEye} className="fs-4 me-1" /> Resume
                </Button>
            </Container>
        </Container>
    )
}