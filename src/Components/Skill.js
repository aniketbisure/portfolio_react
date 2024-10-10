import React from 'react'

function Skill() {
  return (
    <>
    <section className="skills-section" id="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center">
                            <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Skills</h2>
                            <p className=" wow fadeInUp" data-wow-delay=".4s">We turn your visions into reality with precision and creativity, ensuring your web presence stands out and captivates your audience</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="skills-widget d-flex flex-wrap justify-content-center align-items-center">
                            <div className="skill-item wow fadeInUp" data-wow-delay=".3s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/img/icons/HTML5_logo_and_wordmark.svg.png" alt=""/>
                                    </div>
                                    <div className="number">92%</div>
                                </div>
                                <p>HTML : 5</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".4s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/img/icons/logo-css-3-1536.png" alt=""/>
                                    </div>
                                    <div className="number">80%</div>
                                </div>
                                <p>CSS : 3</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".5s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/img/icons/R.png" alt=""/>
                                    </div>
                                    <div className="number">85%</div>
                                </div>
                                <p>JS ES6</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".6s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="assets/img/icons/wp.svg" alt=""/>
                                    </div>
                                    <div className="number">90%</div>
                                </div>
                                <p>WordPess</p>
                            </div>
                            <div className="skill-item wow fadeInUp" data-wow-delay=".7s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="https://pngimg.com/uploads/php/php_PNG43.png" alt=""/>
                                    </div>
                                    <div className="number">89%</div>
                                </div>
                                <p>PHP</p>
                            </div>
                            {/* <div className="skill-item wow fadeInUp" data-wow-delay=".8s">
                                <div className="skill-inner">
                                    <div className="icon-box">
                                        <img src="https://www.pngkey.com/png/full/383-3838923_open-mongodb-icon.png" alt=""/>
                                    </div>
                                    <div className="number">80%</div>
                                </div>
                                <p>Mongodb</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Skill
