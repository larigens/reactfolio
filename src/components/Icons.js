import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faNode, faReact, faGithub, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch, faCode, faBug, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from "react-bootstrap";


export default function Icons() {
    return (
        <Container className="ms-4 pt-5">
            <Row className="mt-5 pt-5">
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faHtml5} className="fs-2 me-5 pe-5 light-accent" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faCss3Alt} className="fs-2 me-5 pe-5  main-brand" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faSquareJs} className="fs-2 me-5 pe-5 dark-accent" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faNode} className="fs-2 me-5 pe-5 light-accent" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faDatabase} className="fs-2 me-5 pe-5 main-brand" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faReact} className="fs-2 me-5 pe-5 dark-accent" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faGithub} className="fs-2 me-5 pe-5 light-accent" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faCodeBranch} className="fs-2 me-5 pe-5 main-brand" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faCode} className="fs-2 me-5 pe-5 dark-accent" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faBug} className="fs-2 me-5 pe-5 light-accent" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faGit} className="fs-2 me-5 pe-5 main-brand" />
                </Col>
                <Col xs={6} sm={4} md={2} className="text-center mb-2">
                    <FontAwesomeIcon icon={faLaptopCode} className="fs-2 me-5 pe-5 dark-accent" />
                </Col>
            </Row>
        </Container>
    )
}