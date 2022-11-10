import React from "react";
import Link from "next/link";

const AboutPage = () => {
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
                src="assets/img/web-content/about-page-600.jpg"
                alt="VR"
                className="img-fluid"
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
                <h5 className="h6 text-primary">Our Mission</h5>
                <h2>How we plan to change the world.</h2>
                <p>
                  EV Initiative is on a mission to build the most secure and
                  engaging EV charging network in the world. This mission will
                  take us towards 2030 and beyond.
                </p>
                <p>
                  Our vision for long-term growth involves giving ownership of
                  our network to the drivers/users.
                </p>
                <p>
                  We understand that the next decade belongs to web3 and our
                  charging network will grow within a web3 world.
                </p>
                <p>
                  EV Initiative is the first EV charging network in the Americas
                  to create a Decentralized Autonomous Organization. We’ve
                  entered into the new era of the internet and connected
                  devices.
                </p>
                <Link href="/evi-token">
                  <a className="link-with-icon text-decoration-none mt-3 btn btn-primary">
                    EVI Token
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
