import React from "react";
import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <section
      title="about-us-ev"
      className="counter-with-video pt-120 pb-120"
      id="about-us-ev"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="cyber-about-img text-center mb-30 mb-lg-0">
              <img
                src="assets/img/web-content/EV Proposal Photos NEW LOGO CROP.png"
                alt="VR"
                className="img-fluid"
                style={{ width: "500px" }}
              />
              <div className="row g-0">
                <div className="col-lg-5">
                  <div className="sheild-img">
                    <img
                      src="assets/img/web-content/ev-logo-bl-bg.jpg"
                      alt="Sheild"
                      className="img-fluid d-none d-lg-block"
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="pe-2">
                    <div className="cyber-about-count-box d-md-flex bg-white p-4 mt-3">
                      <div className="pe-3">
                        <h2>10K+</h2>
                      </div>
                      <div>
                        <h5 className="h6">Charging Stations</h5>
                        <p className="mb-0">By 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pt-5">
              <div className="section-heading mb-5">
                <h5 className="h6 text-primary">Why EV Initiative</h5>
                <h2>
                  We provide a full-stack interoperable software solution for
                  smart EV charging
                </h2>
                <p>
                  EV Initiative provides a full stack software solution that is
                  open, interoperable and future proof.
                </p>
                <p>
                  The EV Initiative operating system includes direct EV roaming
                  via OCPI and integration with roaming hubs like Hubject and
                  GIREVE, payments and billing modules, OpenADR, Plug & Charge
                  and much more.
                </p>
                <p>
                  Our software makes it easy to connect any OCPP-compliant
                  charge point to our software and integrate any external system
                  via our robust API.
                </p>
                <Link
                  to="/about-ev-initiative"
                  className="link-with-icon text-decoration-none mt-3 btn btn-primary"
                >
                  Learn More
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
