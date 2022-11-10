import React from "react";
import Link from "next/link";
const FeatureImgContentAboutPage = () => {
  return (
    <>
      <section className="why-choose-us ptb-120" id="network-app-ev">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center">
            <div className="col-lg-5 col-12">
              <div className="why-choose-content">
                <div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
                  <i className="fal fa-shield-check fa-2x text-white"></i>
                </div>
                <h2>EV Initiative Network Driver App</h2>
                <p>
                  EV Initiative’s charging solutions - Adding value with
                  technology Network Operation & Management
                </p>
                <ul className="list-unstyled d-flex flex-wrap price-feature-col mt-4 mb-4">
                  <li className="py-1">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    Drivers can keep a balance on their e-wallet app
                  </li>
                  <li className="py-1">
                    <i className="fas fa-check-circle me-2 text-primary"></i>Our
                    network is compatible with all plug-in vehicles
                  </li>
                  <li className="py-1">
                    <i className="fas fa-check-circle me-2 text-primary"></i>A
                    Any driver can simply scan the QR code to start charging on
                    our web-app
                  </li>
                </ul>
                <Link href="/about-us">
                  <a className="read-more-link text-decoration-none">
                    Download Our App <i className="far fa-arrow-right ms-2"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <img
                  src="assets/img/3d-icons/smart-phones.png"
                  className="img-fluid"
                  alt="feature-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgContentAboutPage;
