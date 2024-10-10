import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_48an6qs', 'template_o4yhoxx', form.current, {
            publicKey: '2l6XKixXcLhy_k1Ts',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };
  return (
    <>
            <section className="contact-section" id="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7 order-2 order-md-1">
                            <div className="contact-form-box wow fadeInLeft" data-wow-delay=".3s">
                                <div className="section-header">
                                    <h2 className="section-title">Let’s work together!</h2>
                                    {/* <p>I design and code beautifully simple things and i love what i do. Just simple like
                                        that!
                                    </p> */}
                                </div>
    
                                <div className="tj-contact-form">
                                    <form  ref={form}action="index.html" onSubmit={sendEmail}>
                                        <div className="row gx-3">
                                            <div className="col-sm-6">
                                                <div className="form_group">
                                                    <input type="text" name="fname" id="fname" placeholder="First name"
                                                        autoComplete='off'/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form_group">
                                                    <input type="text" name="lname" id="lname" placeholder="Last name"
                                                        autoComplete="off"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form_group">
                                                    <input type="email" name="email" id="email" placeholder="Email address"
                                                        autoComplete="off"/>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form_group">
                                                    <input type="tel" name="phone" id="phone" placeholder="Phone number"
                                                        autoComplete="off"/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form_group">
                                                    <textarea name="message" id="message" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form_btn">
                                                    <button type="submit" className="btn tj-btn-primary">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
    
                        <div className="col-lg-5 offset-lg-1 col-md-5  d-flex flex-wrap align-items-center  order-1 order-md-2">
                            <div className="contact-info-list">
                                <ul className="ul-reset">
                                    <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                                        data-wow-delay=".4s">
                                        <div className="icon-box">
                                            <i className="flaticon-phone-call"></i>
                                        </div>
                                        <div className="text-box">
                                            <p>Phone</p>
                                            <a href="tel:0123456789">+91 7588244575 / 9763023224</a>
                                        </div>
                                    </li>
                                    <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                                        data-wow-delay=".5s">
                                        <div className="icon-box">
                                            <i className="flaticon-mail-inbox-app"></i>
                                        </div>
                                        <div className="text-box">
                                            <p>Email</p>
                                            <a href="mailto:bisureaniket@gmail.com">bisureaniket@gmail.com</a>
                                        </div>
                                    </li>
                                    <li className="d-flex flex-wrap align-items-center position-relative wow fadeInRight"
                                        data-wow-delay=".6s">
                                        <div className="icon-box">
                                            <i className="flaticon-location"></i>
                                        </div>
                                        <div className="text-box">
                                            <p>Address</p> 
                                            <a href="https://maps.app.goo.gl/QLeGLokpPVMUeqXt9" target='new'>11/30, Kalpataru Colony Rd, Shramasafalya Colony, Varkhade, Karve Nagar, Pune, Maharashtra 411052</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default Contact
