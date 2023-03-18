import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    const styles = {
        span: {
            letterSpacing: "3px"
        }
    };

    return (
        <footer className="justify-content-center pt-5 mt-5 mb-2">
            <Container>
                <Row>
                    <Col className="text-center">
                        <span className="gradient-text" style={styles.span}>&copy;Larissa Guilherme </span>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}