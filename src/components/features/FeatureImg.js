import React from "react";
import { Link } from "react-router-dom";

const FeatureImg = () => {
  return (
    <>
      <section className="image-feature pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-12 order-lg-1">
              <div className="feature-img-content">
                <div className="icon-box rounded-custom bg-dark shadow-sm d-inline-block">
                  <i className="fal fa-fingerprint fa-2x text-white"></i>
                </div>
                <h2>Match Everything to Brand and Style</h2>
                <p>
                  The installation, operation and maintenance of charging
                  stations for electric vehicles require expertise and a
                  substantial financial contribution.
                </p>
                <p>
                  To contribute to the transition to eco-mobility and facilitate
                  the integration of its solution within commercial/retail
                  properties and business centers, EV Initiative Covers 100% of
                  the investments essential to the deployment and management of
                  charging station infrastructures. EV Initiative goes even
                  further by offering a 5% return to our host location
                  co-owners, calculated on the use of charging stations within
                  the space.
                </p>

                <Link
                  to="/about-us"
                  className="read-more-link text-decoration-none d-block mt-4"
                >
                  Learn More About Us{" "}
                  <i className="far fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-0">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <img
                  src="assets/img/screen/widget-12.png"
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

export default FeatureImg;
