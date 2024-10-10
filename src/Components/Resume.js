import React from 'react'

function Resume() {
  return (
    <>
    <section className="resume-section" id="resume-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="section-header wow fadeInUp" data-wow-delay=".3s">
                            <h2 className="section-title">My Education</h2>
                        </div>

                        <div className="resume-widget">
                            <div className="resume-item wow fadeInLeft" data-wow-delay=".4s">
                                <div className="time">
                                    2024 - Graduation (73.05 %)
                                </div>
                                <h3 className="resume-title">Software Development</h3>
                                <div className="institute">
                                    Yashwantrao Chavan Institue of Science of Satara,Maharashtra.
                                </div>
                            </div>
                            <div className="resume-item wow fadeInLeft" data-wow-delay=".5s">
                                <div className="time">
                                    2021 - HSC (85.50 %)
                                </div>
                                <h3 className="resume-title">HSC</h3>
                                <div className="institute">
                                    Parents’ Association English School and Junior College of Science, Satara.
                                </div>
                            </div>
                            <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
                                <div className="time">
                                    2019 - SSC (79.40 %)
                                </div>
                                <h3 className="resume-title">SSC</h3>
                                <div className="institute">
                                Annasaheb Kalyani Vidyalaya ,Satara.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="section-header wow fadeInUp" data-wow-delay=".4s">
                            <h2 className="section-title">My Internship</h2>
                        </div>

                        <div className="resume-widget">
                            <div className="resume-item wow fadeInRight" data-wow-delay=".5s">
                                <div className="time">
                                    2023 - 2024
                                </div>
                                <h3 className="resume-title"> Php Web Developer</h3>
                                <div className="institute">
                                    Yashwantrao Chavan Institue of Science of Satara Maharashtra.<br/>
                                
                                </div>
                            </div>
                            <div className="resume-item wow fadeInRight" data-wow-delay=".6s">
                                <div className="time">
                                    January 1,2024 - February 1,2024
                                </div>
                                <h3 className="resume-title">Web Development Internship</h3>
                                <div className="institute">
                                    OCTANET SERVICES PVT LTD.
                                </div>
                            </div>
                            <div className="resume-item wow fadeInRight" data-wow-delay=".7s">
                                <div className="time">
                                    15 July 2024 - 15 August 2024
                                </div>
                                <h3 className="resume-title">ReactJS Developer</h3>
                                <div className="institute">
                                  CodSoft PVT LTD.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Resume
