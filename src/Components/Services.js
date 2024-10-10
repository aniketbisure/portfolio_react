import React from 'react'

function Services() {
  return (
    <>
      <section className="services-section" id="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center">
                <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">
                  My Project's
                </h2>
                {/* <p className=" wow fadeInUp" data-wow-delay=".4s">I put my ideas and thus your wishes in the
                                form
                                of a unique web project that inspires you
                                and you customers.</p> */}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="services-widget position-relative">
                <div
                  className="service-item current d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">01</span>
                    <h3 className="service-title">Web Development</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      I have successfully created dynamic and responsive
                      websites using HTML, CSS, and JavaScript, showcasing my
                      ability to implement modern web development practices and
                      deliver engaging user experiences.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper"
                    className="service-link modal-popup"
                  ></button>
                </div>
                <div
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">02</span>
                    <h3 className="service-title">desktop assistant</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      I developed a sophisticated desktop assistant using
                      Python, showcasing my ability to integrate various
                      libraries and APIs to enhance user productivity.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper1"
                    className="service-link modal-popup"
                  ></button>
                </div>
                <div
                  className="service-item d-flex flex-wrap align-items-center wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="left-box d-flex flex-wrap align-items-center">
                    <span className="number">03</span>
                    <h3 className="service-title">student attendance app</h3>
                  </div>
                  <div className="right-box">
                    <p>
                      I developed an Android-based student attendance
                      application, streamlining attendance tracking and
                      management with an intuitive user interface and real-time
                      data synchronization.
                    </p>
                  </div>
                  <i className="flaticon-up-right-arrow"></i>
                  <button
                    data-mfp-src="#service-wrapper2"
                    className="service-link modal-popup"
                  ></button>
                </div>
                <div
                  className="active-bg wow fadeInUp"
                  data-wow-delay=".5s"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="service-wrapper"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        {/* <div className="popup_modal_img">
          <h6 className="subtitle">
            Link to view website :-
            <a href="https://ycis.ac.in/"> https://ycis.ac.in/</a>
          </h6>
        </div> */}

        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="service_details_content">
                  <div className="service_info">
                    <h6 className="subtitle">Web Development</h6>
                    <h2 className="title">
                      Yashwantrao Chavan Institute of Science(Satara)
                    </h2>
                    <div className="desc">
                      <p>
                        I developed a website tailored to meet specific college
                        requirements, incorporating features such as course
                        management, student information systems, and event
                        scheduling.
                      </p>

                      <h3 className="title">key features of website</h3>
                      <div className="desc"></div>
                      <ul>
                        <li>
                          Overview of the college with announcements, news, and
                          upcoming events.
                        </li>
                        <li>
                          Information about the college's history, mission, and
                          vision
                        </li>
                        <li>
                          Details on the application process, eligibility
                          criteria, and deadlines.
                        </li>
                        <li>
                          Information on various courses, departments, and
                          faculties.
                        </li>
                        <li>
                          Insights into campus life, extracurricular activities,
                          and student organizations.
                        </li>
                        <li>
                          Descriptions of campus facilities like libraries,
                          labs, and sports complexes.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="tj_main_sidebar">
                  <div className="sidebar_widget services_list">
                    <div className="widget_title">
                      <h3 className="title">technology used</h3>
                    </div>
                    <ul>
                      <li className="active">
                        <button>
                          <i className="fa-brands fa-html5 fa-sm"></i>
                          HTML
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="fa-brands fa-css3-alt"></i>
                          CSS
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="fa-brands fa-js"></i>
                          JS
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="fa-brands fa-bootstrap"></i>
                          BOOTSTRAP
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="fa-brands fa-php"></i>
                          PHP
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="service-wrapper1"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        {/* <div className="popup_modal_img">
          <img src="./assets/img/services/modal-img.jpg" alt="" />
        </div> */}

        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="service_details_content">
                  <div className="service_info">
                    <h2 className="title">Desktop Assistant System</h2>
                    <div className="desc">
                      <p>
                        I developed a desktop assistant system using Python,
                        incorporating voice recognition and natural language
                        processing to perform tasks such as setting reminders,
                        answering queries, and controlling applications. The
                        assistant features a user-friendly interface built with
                        Tkinter, enhancing user interaction and productivity.
                      </p>
                    </div>

                    <h3 className="title">key features</h3>
                    <ul>
                      <li>Voice Recognition</li>
                      <li>Natural Language Processing</li>
                      <li>Task Automation</li>
                      <li>Text-to-Speech</li>
                      <li>User-Friendly Interface</li>
                      <li>Integration with APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="tj_main_sidebar">
                  <div className="sidebar_widget services_list">
                    <div className="widget_title">
                      <h3 className="title">technology used</h3>
                    </div>
                    <ul>
                      <li className="active">
                        <button>
                          <i className="fa-brands fa-python"></i>
                          Python
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="fa-solid fa-microphone"></i>
                          Voice Recognition
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="fa-solid fa-microchip"></i>
                          Natural Language Processing
                        </button>
                      </li>
                      <li>
                        <button>
                          <i className="flaticon-web-design"></i>
                          GUI Frameworks
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="service-wrapper2"
        className="popup_content_area zoom-anim-dialog mfp-hide"
      >
        {/* <div className="popup_modal_img">
          <img src="./assets/img/services/modal-img.jpg" alt="" />
        </div> */}

        <div className="popup_modal_content">
          <div className="service_details">
            <div className="row">
              <div className="col-lg-7 col-xl-8">
                <div className="service_details_content">
                  <div className="service_info">
                    <h2 className="title">student attendance app</h2>
                    <div className="desc">
                      <p>
                        I developed a student attendance application using
                        Android, which allows for easy tracking and management
                        of student attendance records. The app includes features
                        like real-time attendance marking, reporting, and
                        notifications for absentees, ensuring efficient and
                        accurate attendance management
                      </p>
                    </div>

                    <h3 className="title">key features</h3>
                    <ul>
                      <li>Real-Time Attendance Marking</li>
                      <li>Reporting and Analytics</li>
                      <li>Notifications</li>
                      <li>User Authentication</li>
                      <li>Attendance History</li>
                      <li>Customizable Settings</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-4">
                <div className="tj_main_sidebar">
                  <div className="sidebar_widget services_list">
                    <div className="widget_title">
                      <h3 className="title">technology used</h3>
                    </div>
                    <ul>
                      <li className="active">
                        <button>
                        <i className="fa-brands fa-java"></i>
                           JAVA
                        </button>
                      </li>
                      <li>
                        <button>
                        <i className="fa-brands fa-android"></i>
                         IDE :- Android Studio
                        </button>
                      </li>
                      <li>
                        <button>
                        <i className="fa fa-database"></i>
                        Firebase / SQLite 
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
