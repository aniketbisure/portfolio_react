import React from 'react'

function Header() {
  return (
    <>
    <div className="preloader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>

        <div className="preloader-heading">
            <div className="load-text">
                <span>L</span>
                <span>o</span>
                <span>a</span>
                <span>d</span>
                <span>i</span>
                <span>n</span>
                <span>g</span>
            </div>
        </div>
    </div>
    <div className="progress-wrap" id="scrollUp">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
    </div>
    <header className="tj-header-area header-absolute">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex flex-wrap align-items-center">

                    <div className="logo-box">
                        <a href="index.html">
                            <img src="assets/img/logo.png" alt=""/>
                        </a>
                    </div>

                    <div className="header-info-list d-none d-md-inline-block">
                        <ul className="ul-reset">
                            <li><a href="mailto:bisureaniket@gmail.com">bisureaniket@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="header-menu">
                        <nav>
                            <ul>
                                <li><a href="#intro">Home</a></li>
                                <li><a href="#services-section">Works</a></li>
                                <li><a href="#resume-section">Resume</a></li>
                                <li><a href="#skills-section">Skills</a></li>
                                <li><a href="#contact-section">Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-button">
                        <a href="#contact-section" className="btn tj-btn-primary">Hire me!</a>
                    </div>

                    <div className="menu-bar d-lg-none">
                        <button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <header className="tj-header-area header-2 header-sticky sticky-out">
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex flex-wrap align-items-center">

                    <div className="logo-box">
                        <a href="index.html">
                            <img src="assets/img/logo.png" alt=""/>
                        </a>
                    </div>

                    <div className="header-info-list d-none d-md-inline-block">
                        <ul className="ul-reset">
                            <li><a href="mailto:mail@gerolddesign.com">bisureaniket@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="header-menu">
                        <nav>
                            <ul>
                                <li><a href="#intro">Home</a></li>
                                <li><a href="#services-section">Works</a></li>
                                <li><a href="#resume-section">Resume</a></li>
                                <li><a href="#skills-section">Skills</a></li>
                                <li><a href="#contact-section">Contact</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-button">
                        <a href="#contact-section" className="btn tj-btn-primary">Hire me!</a>
                    </div>

                    <div className="menu-bar d-lg-none">
                        <button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</>
  )
}

export default Header
