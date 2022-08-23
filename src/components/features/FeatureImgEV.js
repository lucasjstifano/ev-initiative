import React from "react";
import { Link } from "react-router-dom";

const FeatureImgEV = () => {
  return (
    <>
      <section className="image-feature  pt-60 pb-120" id="cloud-management">
        <div className="container ">
          <div className="row justify-content-between align-items-center ">
            <div className="col-lg-5 col-12 order-lg-1">
              <div className="feature-img-content ">
                <div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block ">
                  <i className="fal fa-cloud fa-2x text-white "></i>
                </div>
                <h2>EV Initiative Cloud Management</h2>
                <ul className="list-unstyled d-flex flex-wrap price-feature-col mt-4 mb-4">
                  <li className="py-1">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    EV Initiative’s back-office dashboard provides complete
                    real-time oversight of the chargers on your property
                  </li>
                  <li className="py-1">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    Track usage, electricity, revenue, and more.
                  </li>
                  <li className="py-1">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    Future-ready to power a growing variety of open-standard
                    equipment. No risk of vendor lock.
                  </li>
                </ul>
                <a
                  href="https://evinitiative.network/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-with-icon text-decoration-none mt-3 btn btn-primary-gradient"
                >
                  Sign In
                  <i className="fas fa-user"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-0">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <img
                  src="assets/img/web-content/ev-dashboard.png"
                  className="img-fluid img-radius shadow-lg"
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

export default FeatureImgEV;
