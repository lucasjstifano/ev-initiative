import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import HeroTitle from "../../components/common/HeroTitle";

const HeroOne = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="hero-section ptb-120 text-white bg-gradient hero-img-ev">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-10">
              <div className="hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <HeroTitle
                  title="Driving a Sustainable and Decentralised Future"
                  desc="The primary utility of the EVI token is to allow investors to mint the NFT seats for rewards."
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
                  <Link to="/request-for-demo" className="btn btn-primary me-3">
                    Request For Demo
                  </Link>
                  <Link
                    to="#"
                    className="text-decoration-none d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
                    onClick={() => setOpen(true)}
                  >
                    <i className="fas fa-play"></i> Watch Demo{" "}
                  </Link>
                </div>
                <div className="row justify-content-lg-start mt-60">
                  <h6 className="text-white-70 mb-2">Our Top Partners:</h6>
                  <div className="col-4 col-sm-3 my-2">
                    <img
                      src="assets/img/brand-logo/Marriott-International-Logo.png"
                      alt="client"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-4 col-sm-3 my-2">
                    <img
                      src="assets/img/brand-logo/Marriott-International-Logo.png"
                      alt="client"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-4 col-sm-3 my-2">
                    <img
                      src="assets/img/brand-logo/Marriott-International-Logo.png"
                      alt="client"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mt-5">
              <div className="hero-img hero-img-ev position-relative circle-shape-images">
                <ul className="position-absolute animate-element parallax-element circle-shape-list">
                  <li className="layer" data-depth="0.03">
                    <img
                      src="assets/img/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-0 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.02">
                    <img
                      src="assets/img/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-1 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.04">
                    <img
                      src="assets/img/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-2 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.04">
                    <img
                      src="assets/img/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-3 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <img
                      src="assets/img/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-4 hero-1"
                    />
                  </li>
                  <li className="layer" data-depth="0.03">
                    <img
                      src="assets/img/shape/circle-1.svg"
                      alt="shape"
                      className="circle-shape-item type-5 hero-1"
                    />
                  </li>
                </ul>

                <img
                  src="assets/img/3d-icons/white_EV_no_bg.png"
                  alt="hero img"
                  className="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroOne;
