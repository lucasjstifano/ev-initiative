import React from "react";
import { Link } from "react-router-dom";
const FeatureImgContentWhitepaper = () => {
  return (
    <>
      <section className="why-choose-us ptb-120 bg-crypto" id="evi-whitepaper">
        <div className="container">
          <div className="row justify-content-lg-between align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-5 col-12">
              <div className="why-choose-content">
                <div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block">
                  <i className="fa-regular fa-brain-circuit fa-2x text-white"></i>
                </div>
                <h2 className="text-white-75">EV Initiative’s Vision</h2>
                <p className="text-white-75 mb-4">
                  Please read our whitepaper to understand how we are bringing
                  utility to our token & NFTs.
                </p>
                <h4 className="text-white-75">The future is now</h4>
                <ul className="list-unstyled d-flex flex-wrap price-feature-col mt-2 mb-4">
                  <li className="py-1 text-white-75">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    EV Initiative’s model and ecosystem
                  </li>
                  <li className="py-1 text-white-75">
                    <i className="fas fa-check-circle me-2 text-primary"></i>
                    Tokenomics of the EVI token and details of our business
                    model
                  </li>
                  <li className="py-1 text-white-75">
                    <i className="fas fa-check-circle me-2 text-primary"></i>5
                    levels of NFTs to be minted and their various advantages
                  </li>
                </ul>
                <a
                  href="/assets/pdf/EV Initiative-Whitepaper.pdf"
                  target="_blank"
                  className="link-with-icon text-decoration-none btn btn-primary-gradient me-3"
                >
                  Download Whitepaper <i className="fas fa-download"></i>
                </a>
                <a
                  href="https://evinitiative.io/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-decoration-none d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
                >
                  <i className="fa-solid fa-coins"></i>Buy EVI Token{" "}
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <a
                  href="/assets/pdf/EV Initiative-Whitepaper.pdf"
                  target="_blank"
                >
                  <img
                    src="assets/img/3d-icons/whitepaper-crypto.png"
                    className="img-fluid"
                    alt="feature-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureImgContentWhitepaper;
