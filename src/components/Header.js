import React from 'react';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSquareJs, faNode, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCodeBranch, faCode, faBug } from '@fortawesome/free-solid-svg-icons';

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
                    {currentPage === "Home" ? (
                        <>
                            <div className="d-flex justify-content-center mt-5 pt-5">
                                <h1 className="display-5 text-center gradient-text typing fw-light"> Hi, I am <span
                                    className="gradient-text heading-font fw-bold">Larissa!</span> </h1>
                            </div>
                            <div className="text-center mb-5 mt-3">
                                <img src="../images/avatar.png" alt="female smiling" width="300px" height="300px" />
                            </div>

                            <div className="d-flex mt-5 pt-5 mb-3 justify-content-center">
                                <p className="gradient-text text-center fs-5">
                                    I am an aspiring software engineer living in Atlanta, GA and currently studying full-stack web
                                    development at Georgia Tech.
                                </p>
                            </div>

                            <div className="d-flex mt-5 mb-5 justify-content-center">
                                <a href="/about" className="background-gradient light-hv gradient-text fs-3 btn p-3 width-20"> Read more<i
                                    className="fa fa-book ms-2"></i> </a>
                            </div>

                            <section className="d-flex justify-content-center pt-5 mb-4 pb-3">
                                <FontAwesomeIcon icon={faHtml5} className="fs-3 me-4 ms-4 light-accent" />
                                <FontAwesomeIcon icon={faCss3Alt} className="fs-3 me-4 ms-4 main-brand" />
                                <FontAwesomeIcon icon={faSquareJs} className="fs-3 me-4 ms-4 dark-accent" />
                                <FontAwesomeIcon icon={faNode} className="fs-3 me-4 ms-4 light-accent" />
                                <FontAwesomeIcon icon={faDatabase} className="fs-3 me-4 ms-4 main-brand" />
                                <FontAwesomeIcon icon={faReact} className="fs-3 me-4 ms-4 dark-accent" />
                                <FontAwesomeIcon icon={faCodeBranch} className="fs-3 me-4 ms-4 light-accent" />
                                <FontAwesomeIcon icon={faCode} className="fs-3 me-4 ms-4 main-brand" />
                                <FontAwesomeIcon icon={faBug} className="fs-3 me-4 ms-4 dark-accent" />
                            </section>
                        </>
                    ) : (
                        <Navigation currentPage={currentPage} />
                    )}
                </>
            </main>
        </>
    )
}

export default Header;