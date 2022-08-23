import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import HeroTitle from "../../components/common/HeroTitle";
import { HashLink } from "react-router-hash-link";

const HeroEV = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="hero-section ptb-120 text-white bg-dark hero-img-ev hero-gradient">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0 ptb-120">
                <HeroTitle
                  title="eMobility Service Provider & Charge Port Operator"
                  descClass="text-white"
                />
                <div
                  className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId="hAP2QF--2Dg"
                    onClose={() => setOpen(false)}
                  />
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
