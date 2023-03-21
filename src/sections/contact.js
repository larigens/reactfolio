import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default function renderContact({ fullName, setfullName, email, setEmail, message, setMessage, id, setId }) {
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        if (name === 'fullName') {
            setfullName(value)
        }
        else if (name === 'email') {
            setEmail(value)
        }
        else if (name === 'message') {
            setMessage(value)
        }
    };

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }
        else if (!fullName || !email || !message) {
            alert("Please fill in all required fields");
            return;
        }
        else {
            // Alert the user their message was submited successfully, and clear the inputs/textarea
            alert(`Thank you for your message ${fullName}!`);
            setfullName('');
            setEmail('');
            setMessage('')
        }
    };
    return (
        <>
            <Container className="d-flex justify-content-center mt-5 pt-3 mb-4">
                <h2 className="display-4 text-center gradient-text fw-bold heading-font mt-2">Contact Me</h2>
            </Container>
            <Container className='justify-content-center'>
                <Form id="contact" name="newMessage" method="post" action="newMessage" className="card-body cardbody-color p-lg-2">
                    <Form.Group className="mb-4">
                        <Form.Control
                            value={fullName}
                            name="fullName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Control
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            as="textarea"
                            rows={6}
                            required
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-center mt-1">
                        <Button type="button" className="gradient light no-border ps-3 pe-3 d-flex justify-content-center radius-15 flex-nowrap mb-2 mt-4 width-20" onClick={handleFormSubmit}>
                            Submit
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    )
}