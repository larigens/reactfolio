// import Project from './Project'
import React, { useState } from 'react';

export default function Navigation({ currentPage }) {
    let currentSection;
    // Here we set the state variables using `useState`
    const [fullName, setfullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [id, setId] = useState(0);

    const styles = {
        card: {
            flex: "1",
            flexGrow: "1"
        },
        cardText: {
            textAlign: "justify"
        },
        cardTextSpc: {
            letterSpacing: "10px"
        }
    };

    if (currentPage === "About") {
        currentSection =
            <div id="about" className="d-flex justify-content-center mt-5 pt-3 mb-5 ms-3 me-3">
                <div className="card mt-4 m-3 p-1" style={styles.card}>
                    <div className="card-body m-1">
                        <h2 className="card-title display-4 text-center gradient-text fw-bold heading-font mt-2">About Me</h2>
                        <p className="card-subtitle ms-4 mt-3 mb-1 pb-2 border-bottom border-2 gradient-text fs-5"> Software Developer
                        </p>
                    </div>
                    <div className="d-flex justify-content-start ms-4 me-4 mb-2">
                        <div className="d-flex flex-column ms-4 me-4 mb-3">
                            <div className="justify-content-start flex-nowrap">
                                <p className="card-text me-2 dark-accent pb-3" style={styles.cardText}>
                                    Raised on the coast of Brazil, I relocated to the US in 2020 and since then, technology has been my calling. I
                                    believe that <span className="gradient-text">coding</span> was destined to choose me, as I take pleasure in
                                    learning new tricks and tools that simplify both my work and daily life. My journey as a software engineer
                                    commenced from this passion for problem-solving and creating aesthetically pleasing outcomes.
                                </p>
                            </div>
                            <div className="justify-content-start flex-nowrap">
                                <p className="card-text me-2 dark-accent pb-3" style={styles.cardText}>
                                    In my pursuit of honing my craft, I challenge myself to constantly improve, and welcome any feedback or advice
                                    that could help me reach my goals. Currently, I'm working on a personal project, Bugs Diaries, a website that
                                    allows writers to publish, edit, and manage their articles about the latest information on technology trends,
                                    best practices, and emerging technologies. My aim is to inspire future programmers by passing on the knowledge.
                                    The site also has a commenting system that enables readers to interact with authors, ask questions, and share
                                    their thoughts.
                                </p>
                            </div>
                            <div className="justify-content-start flex-nowrap">
                                <p className="card-text me-2 dark-accent pb-3" style={styles.cardText}>
                                    During my leisure time, I like to play video games and workout to de-stress after hours of de-bugging hah
                                </p>
                            </div>
                            <div className="d-flex justify-content-center ms-4 me-4 mb-3 mt-4">
                                <p className="fs-4 card-text me-2 mt-3 gradient-text" style={styles.cardTextSpc.cardText}>
                                    Create. Code. Design. Debug. Play. Workout. Have Fun !important;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
    else if (currentPage === "Portfolio") {
        currentSection =
            <>
                <div id="portfolio" className="d-flex justify-content-center mt-5 pt-3 mb-5">
                    <h2 className="display-4 text-center gradient-text fw-bold heading-font mt-2">Portfolio</h2>
                </div>
                <div id="myCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
                        <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="text-center">
                                <a href="https://bugs-diaries.herokuapp.com/">
                                    <img src="/images/bugs-diaries.png" alt="Project 1" width="90%" />
                                </a>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="gradient-text">Bugs Diaries</h3>
                                <p className="dark-accent">Bugs Diaries allows writers to publish, edit, and manage their articles with
                                    ease. They can
                                    format their content using a variety of styling options. The site also has a commenting system
                                    that enables readers to interact with authors, ask questions, and share their thoughts.

                                    This blog site is constantly updated with new content, ensuring that developers always have
                                    access to the latest information on technology trends, best practices, and emerging
                                    technologies. With its rich collection of articles, the Bugs Diaries site is an invaluable tool
                                    for anyone looking to stay informed and stay ahead in the ever-evolving world of technology.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="text-center">
                                <a href="https://pawpals.herokuapp.com/">
                                    <img src="/images/pawpals.png" alt="Project 2" width="90%" />
                                </a>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="gradient-text">Paw Pals</h3>
                                <p className="dark-accent">Welcome to the Paw Pals! Our mission is to help find loving homes for animals in
                                    need. Whether
                                    you're looking for a cuddly cat, a playful pup, or a quirky rabbit, you'll find your perfect
                                    match here. Our extensive database of available pets includes detailed information on the breed,
                                    age, personality, and more to help you find the right fit for your family.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="text-center">
                                <a href="https://thebobfather2.github.io/carrotcalendar/">
                                    <img src="/images/carrot-calendar.jpeg"
                                        alt="Project 3" width="90%" />
                                </a>
                            </div>
                            <div className="carousel-caption">
                                <h3 className="gradient-text">Carrot Calendar</h3>
                                <p className="dark-accent"> Our new calendar is the perfect tool for connecting community members worldwide,
                                    no matter where
                                    they're located. This calendar was created to meet the needs of <a
                                        href="https://www.bobbyrabbits.com/">Bobby Rabbits'</a> website.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </>
    }
    else if (currentPage === "Contact") {
        const handleInputChange = (e) => {
            // Getting the value and name of the input which triggered the change
            const { name, value } = e.target;
            if (name === 'fullName') {
                setfullName(value)
                return
            }
            else if (name === 'email') {
                setEmail(value)
                return
            }
            else if (name === 'message') {
                setMessage(value)
                return
            }
        };

        const handleIncrease = () => {
            setId(id + 1);
            localStorage.setItem('myMessages', id);
        };

        const handleFormSubmit = (e) => {
            // Preventing the default behavior of the form submit (which is to refresh the page)
            e.preventDefault();
            handleIncrease();
            // Alert the user their message was submited successfully, and clear the inputs/textarea
            alert(`Thank you for your message ${fullName}!`);
            setfullName('');
            setEmail('');
            setMessage('')
        };

        currentSection =
            <>
                <form id="contact" name="newMessage" method="post" action="newMessage" className="card-body cardbody-color p-lg-2">
                    <div className="form-outline mb-4">
                        <input className="form-control form-control-lg"
                            value={fullName}
                            name="fullName"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <input className="form-control form-control-lg"
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                    </div>
                    <div className="form-outline mb-4">
                        <textarea className="fs-small form-control form-control-lg"
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="text"
                            rows="6"
                            required
                        ></textarea>
                    </div>
                    <div className="d-flex justify-content-center mt-1">
                        <button type="button" className="gradient light-shades btn ps-3 pe-3 d-flex justify-content-center flex-nowrap mb-2 mt-4 width-20"
                            onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </div>
                </form>
            </>
    }
    else if (currentPage === "Resume") {
        currentSection =
            <div id="resume" className="d-flex justify-content-center mt-4 mb-4">
                <a href="../pdf/Resume.pdf" download>Download my Resume!</a>
            </div>
    }

    return (
        <>
            {currentSection}
        </>
    )

}
