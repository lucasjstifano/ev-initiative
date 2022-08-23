import React from "react";

const ContactBox = () => {
  return (
    <>
      <section className="contact-promo pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                <span className="fad fa-comment-alt-lines fa-3x text-primary"></span>
                <div className="contact-promo-info mb-4">
                  <h5>Chat with us</h5>
                  <p>
                    We've got live Social Experts waiting to help you{" "}
                    <strong>Monday to Friday</strong> from
                    <strong> 9am to 5pm EST.</strong>
                  </p>
                </div>
                <a
                  href="https://t.me/+J7PBUzXHlUcyM2Ex"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="btn btn-link mt-auto"
                >
                  Chat with us
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                <span className="fad fa-envelope fa-3x text-primary"></span>
                <div className="contact-promo-info mb-4">
                  <h5>Email Us</h5>
                  <p>
                    Simply drop us an email at{" "}
                    <strong>info@evinitiative.com </strong>
                    and you'll receive a reply within 48 hours.
                  </p>
                </div>
                <a
                  href="mailto:info@evinitiative.com"
                  className="btn btn-primary mt-auto"
                >
                  Email Us
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
                <span className="fad fa-phone fa-3x text-primary"></span>
                <div className="contact-promo-info mb-4">
                  <h5>Give us a call</h5>
                  <p>
                    Give us a ring! Our Experts are standing by{" "}
                    <strong>Monday to Friday</strong> from
                    <strong> 9am to 5pm EST</strong> to speak with you.
                  </p>
                </div>
                <a href="tel:(289)839-1253" className="btn btn-link mt-auto">
                  (289) 839-1253
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactBox;
