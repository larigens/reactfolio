import React from 'react';
import Navigation from '../components/Navigation';

export default function renderContact(fullName, email, message) {
    return (
        <>
            <form id="contact" name="newMessage" method="post" action="newMessage" className="card-body cardbody-color p-lg-2">
                <div className="form-outline mb-4">
                    <input className="form-control form-control-lg"
                        value={Navigation.fullName}
                        name="fullName"
                        onChange={Navigation.handleInputChange}
                        type="text"
                        placeholder="Name"
                        required
                    />
                </div>
                <div className="form-outline mb-4">
                    <input className="form-control form-control-lg"
                        value={Navigation.email}
                        name="email"
                        onChange={Navigation.handleInputChange}
                        type="email"
                        placeholder="Email Address"
                        required
                    />
                </div>
                <div className="form-outline mb-4">
                    <textarea className="fs-small form-control form-control-lg"
                        value={Navigation.message}
                        name="message"
                        onChange={Navigation.handleInputChange}
                        type="text"
                        rows="6"
                        required
                    ></textarea>
                </div>
                <div className="d-flex justify-content-center mt-1">
                    <button type="button" className="gradient light-shades btn ps-3 pe-3 d-flex justify-content-center flex-nowrap mb-2 mt-4 width-20"
                        onClick={Navigation.handleFormSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    )
}