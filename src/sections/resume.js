import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { skills } from '../data/skills';

export default function renderResume() {
    return (
        <>
            <Container id="portfolio" className="d-flex justify-content-center mt-5 pt-3 mb-4">
                <h2 className="display-4 text-center gradient-text fw-bold heading-font mt-2">Skills</h2>
            </Container>
            <Container id="resume" className="mt-5 mb-5">
                <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4 justify-content-center">
                    {skills.map((skill) => (
                        <Col className="d-flex mb-5">
                            <Card className="flex-fill" style={{ width: '100%' }}>
                                <Card.Body>
                                    <Card.Title className="text-center gradient-text fw-bolder fs-5">
                                        {skill.name}
                                    </Card.Title>
                                </Card.Body>
                                <ListGroup variant="flush" className="background-shades list-group-flush border-0 text-center m-2">
                                    {skill.skillsArr.map((item) => (
                                        <ListGroup.Item className='dark-accent border-bottom-0'>{item}</ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container >
            <Container className="mt-auto text-center">
                {/* OnClick it will call the function handleShow which sets showModal to true and displays the modal */}
                <Button href="../pdf/Resume.pdf" download className="gradient shades body-font width-20 no-border fs-5 fw-semibold">
                    <FontAwesomeIcon icon={faDownload} className="fs-3 me-1" /> Resume
                </Button>
            </Container>
        </>
    )
}