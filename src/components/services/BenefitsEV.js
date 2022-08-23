import React from "react";
import { Link } from "react-router-dom";

const BenefitsEV = () => {
  return (
    <section id="benefits-ev" className="cyber-features pt-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-10">
            <div className="section-heading text-center mb-120 d-flex flex-column align-items-center">
              <h5 className="h6 text-primary">Services</h5>
              <h2
                className="d-flex justify-content-center mb-5"
                style={{ maxWidth: "900px" }}
              >
                EV Initiative seeks prime locations to become Sites Host
              </h2>
              <p>
                Site must easily be publicly accessible; for example;
                hospitality, retail, commercial, attractions, casinos, fast
                dining near highway off-ramps.
              </p>
              <p>
                EV Initiative presents the first 100% ZERO COST solution to
                deploy public Electric Vehicle Charging Stations - we manage the
                ongoing operation, remit electricity costs back to the site, and
                provide the property management with dashboard access and
                oversight.
              </p>
              <p>
                <strong>
                  Work with EV Initiative to deliver Future-ready solutions to
                  your site. Become a changemaker and leader in the EV Movement.
                </strong>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white process-card shadow-hover rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-bolt-lightning"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Fast Charging</h3>
                <p>
                  EV fast and ultra-fast charging stations charge an electric
                  vehicle's battery directly, reducing charging time, and
                  accelerating the energy transition.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white process-card shadow-hover rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-sack-dollar"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Generate Income</h3>
                <p>
                  Businesses need ways to attract customers while also boosting
                  the value of each transaction. Transforming your location into
                  an EV charging destination can do just that.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white process-card shadow-hover rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4 ">
                <i className="far fa-hourglass-end"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Future Proof</h3>
                <p>
                  Our chargers are designed to protect and extend the lifespan
                  of your investment. As the EV industry porgresses with future
                  innovations, so do we.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white process-card shadow-hover rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-door-open"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Attract Customers</h3>
                <p>
                  Drivers look for businesses where they can charge their
                  vehicles while shopping or running other errands. With
                  charging stations located at your business, you’ll attract EV
                  drivers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white process-card shadow-hover rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-map-location"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">App Visability</h3>
                <p>
                  All EV Initiative charging stations are Cloud-connected and
                  visible on station locators as well as Google Maps to bring EV
                  drivers directly to your location.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cyber-single-service bg-white process-card shadow-hover rounded-custom mb-30">
              <div className="feature-icon pb-5 rounded bg-primary-soft text-primary mb-4">
                <i className="far fa-bullhorn"></i>
              </div>
              <div className="cyber feature-info-wrap">
                <h3 className="h5">Ad Opportunities</h3>
                <p>
                  With each charging station comes an opportunity to advertise.
                  A station host could advertise its own products or services,
                  or sell advertising space to another organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsEV;
