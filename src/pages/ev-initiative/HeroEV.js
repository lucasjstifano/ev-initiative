import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import { HashLink } from "react-router-hash-link";
import Typist from "react-text-typist";

const HeroEV = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="hero-section ptb-120 bg-dark hero-img-ev">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0 ptb-120">
                <h1 className="fw-bold display-5" data-aos="fade-up">
                  The Most{" "}
                  <Typist
                    sentences={[
                      "Interoperable",
                      "Capable",
                      "Scalable",
                      "Secure",
                      "Accessable",
                      "Cost Effective",
                    ]}
                    loop={true}
                  />
                  <br /> EV Charging Operating System
                </h1>
                <div
                  className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <HashLink
                    smooth
                    to="/site-hosts"
                    className="btn btn-primary me-3"
                  >
                    Become a Host!
                  </HashLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mt-5">
              <div className="hero-img">
                <img
                  src="assets/img/3d-icons/white_EV_no_bg.png"
                  alt="hero img"
                  className="img-fluid z-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroEV;
