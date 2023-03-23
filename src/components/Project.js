import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsTurnRight, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Project({ project }) {
    const styles = {
        imgRound: {
            borderRadius: "15px"
        }
    }

    return (
        <>
                <Container className="justifify-content-start">
                    <h3 className="gradient-text fw-bold typing-slow ms-5 ps-4">{project.title}</h3>
                    <p className="light-accent fw-semibold ms-5 ps-4">{project.description}</p>
                    <FontAwesomeIcon icon={faArrowsTurnRight} className="fs-5 ms-5 ps-4 light-accent" />
                    <a href={project.repository} target="_blank" rel="noreferrer" className="light-accent fw-bold ms-1 gradient-hv"> Check GitHub Repository </a>
                </Container>
                <Container className="text-center mt-3">
                    <a href={project.link} target="_blank" rel="noreferrer" >
                        <img src={project.image} alt="Project 1" width="90%" style={styles.imgRound} />
                    </a>
                </Container>
                <Container className="justifify-content-center mt-4">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="fs-5 ms-5 ps-4 light-accent" />
                    <a href={project.link} target="_blank" rel="noreferrer" className="light-accent fw-bold ms-2 gradient-hv"> Check out Website </a>
                </Container>
        </>
    )
}