import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <>
            <footer className="p-2 mt-5 text-center">
                <p className="fs-smaller dark-shades text-center">Made with
                    <FontAwesomeIcon icon={faBug} className="me-1 ms-1" /> by
                    <span className="gradient-text fw-semibold"> Larissa Guilherme</span>
                </p>
            </footer>
        </>
    )
}

export default Footer;