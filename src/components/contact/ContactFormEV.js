import React from "react";
import SectionTitle from "../common/SectionTitle";
import ContactsFormSuccess from "./ContactsFormSuccess";

const ContactFormEV = () => {
  return (
    <>
      <section className="contact-us ptb-120 position-relative overflow-hidden">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-5 col-md-12">
              <SectionTitle
                subtitle="Get Connected"
                title="Let’s make this as easy as possible."
                description="Fill out our contact form and one of our Experts will get back to you within 1-2 business days."
              />
              <div className="row justify-content-between pb-5">
                <div
                  className="col-sm-6 mb-4 mb-md-0 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div className="icon-box d-inline-block rounded-circle bg-primary-soft">
                    <i className="fas fa-location-dot fa-2x text-primary"></i>
                  </div>
                  <div className="contact-info">
                    <h5>Toronto</h5>
                    <p>
                      3080 Yonge Street Suite #6060 Toronto, Ontario M4N 3N1
                    </p>
                    <a
                      href="tel:(415)231-59687"
                      className="read-more-link text-decoration-none"
                    >
                      <i className="far fa-phone me-2"></i> (289) 839-1253
                    </a>
                  </div>
                </div>
                <div
                  className="col-sm-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="icon-box d-inline-block rounded-circle bg-primary-soft">
                    <i className="fas fa-location-dot fa-2x text-primary"></i>
                  </div>
                  <div className="contact-info">
                    <h5>California</h5>
                    <p>2108 N ST STE 4103 Sacramento, CA 95816</p>
                    <a
                      href="tel:(415)231-59687"
                      className="read-more-link text-decoration-none"
                    >
                      <i className="far fa-phone me-2"></i> (408) 940-4735
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <ContactsFormSuccess />
          </div>
        </div>
        <div
          className="bg-gradient position-absolute bottom-0 h-25 bottom-0 left-0 right-0 z--1 py-5"
          style={{
            background:
              " url('img/shape/dot-dot-wave-shape.svg')no-repeat center top",
          }}
        ></div>
      </section>
    </>
  );
};
export default ContactFormEV;
