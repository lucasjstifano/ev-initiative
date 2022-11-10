import React from "react";
import Link from "next/link";

const FeatureFiveEV = () => {
  return (
    <>
      <section className="app-two-feature ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="section-heading text-center">
                <h2>From Planning to Implementation</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-three me-3 mb-4 mb-md-0">
                      <i className="far fa-file-edit"></i>
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">Project Planning</h3>
                      <p>
                        Our team will make it as easy as possible for you to get
                        your chargers in the ground.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-three me-3 mb-4 mb-md-0">
                      <i className="far fa-regular fa-boxes"></i>
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">Equipment Supply</h3>
                      <p>
                        EV Initiative distributes a variety of charging
                        equipment.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-three me-3 mb-4 mb-md-0">
                      <i className="far fa-screwdriver-wrench"></i>
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">Installation</h3>
                      <p>
                        Our team ensures your deployment is performed by one of
                        our certified electricians. We can collaborate with a
                        group that you trust.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="app-two-single-feature d-md-flex align-items-start mb-30">
                    <div className="app-two-single-feature-icon box-three me-3 mb-4 mb-md-0">
                      <i className="far fa-toolbox"></i>
                    </div>
                    <div className="app-two-single-feature-content">
                      <h3 className="h5">Ongoing Management</h3>
                      <p>
                        We provide a fully managed service; access control for
                        drivers, payments, reporting, and routine maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureFiveEV;
