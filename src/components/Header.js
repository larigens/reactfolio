import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, setCurrentPage }) {
    return (
        <>
            <header className="background-gradient">
                <nav className="navbar navbar-expand-lg p-2">
                    <div className="container-fluid">
                        <a className="navbar-brand fw-semibold gradient-text heading-font" href="/"> Larissa Guilherme <i
                            className="fa fa-bug gradient-text ms-1" aria-hidden="true"></i></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link light-shades gradient-hv mt-2 fs-5" href="#about" onClick={() => setCurrentPage("About")} >About Me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link light-shades gradient-hv mt-2 fs-5" href="#portfolio" onClick={() => setCurrentPage("Portfolio")}>Portfolio</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-end">
                                <li className="nav-item">
                                    <a className="nav-link light-shades mt-2 gradient-hv fs-5" href="#contact" onClick={() => setCurrentPage("Contact")}>Contact Me</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link light-shades mt-2 gradient-hv fs-5" href="#resume" onClick={() => setCurrentPage("Resume")}>Resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <>
                    <Navigation currentPage={currentPage} />
                </>
            </main>
        </>
    )
}

export default Header;