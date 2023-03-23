import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Button, Container, Row, Col } from "react-bootstrap";

export default function Home({ handleClick }) {
    return (
        <Container className="justify-content-start mt-5 pt-5 mb-5 pb-4">
            <Row className="justify-content-start mt-3 pt-2">
                <Col md={12} className="ms-5 ps-4">
                    <Row className="justify-content-center align-items-center">
                        <Col md={3} className="text-end">
                            <img src="../../images/avatar.png" alt="female smiling" className="img-fluid" />
                        </Col>
                        <Col md={9} className="align-items-center">
                            <Row className="me-5">
                                <h1 className="display-5 gradient-text typing fw-light">
                                    Hi, I am <span className="gradient-text heading-font fw-semibold">Larissa!</span>
                                </h1>
                            </Row>
                            <Row className="text-justify w-75">
                                <p className="light-accent fs-5">
                                    I am an aspiring Software Developer living in Atlanta, GA and currently studying Full-Stack Web Development at Georgia Tech.
                                </p>
                            </Row>
                            <Row className="justify-content-start text-justify w-75 mt-5">
                                <Button size="lg" className="ms-2 gradient no-border" onClick={handleClick}>
                                    Read more <FontAwesomeIcon icon={faBookOpen} className="ms-2" />
                                </Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}