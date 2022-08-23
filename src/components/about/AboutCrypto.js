import React from "react";
import { Link } from "react-router-dom";

const AboutCrypto = () => {
  return (
    <section className="mb-pd-120 ptb-60 bg-crypto" id="evi-benefits">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-12">
            <div className="about-left text-lg-center mb-32 mb-lg-0">
              <img
                src="assets/img/3d-icons/token-edit.gif"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-right">
              <h4 className="text-primary h5 mb-3">How It Works</h4>
              <h2 className="mb-4 text-white-75">From Token to Rewards</h2>
              <p className="text-white-75">
                5 levels of exclusive NFTs offer their holders discounts up to
                32% on the EV Initiative Charging Network when charging their
                vehicles!
              </p>
              <p className="text-white-75">
                The EV Initiative token ($EVI) allows you to acquire limited
                NFTs which can be stored on our platform in order to collect
                important rewards.
              </p>
              <div className="col-lg-12 col-md-12 order-0 order-lg-1 mt-5">
                <ul className="work-process-list list-unstyled">
                  <li className="d-flex align-items-start mb-4">
                    <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                      <i className="fa-regular fa-coins fa-2x"></i>
                    </div>
                    <div className="icon-content">
                      <span className="text-primary h6">Step 1</span>
                      <h3 className="h5 mb-2 text-white-75">
                        Buy $EVI with $BNB/$BUSD
                      </h3>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                      <i className="fa-regular fa-cart-arrow-down fa-2x"></i>
                    </div>
                    <div className="icon-content">
                      <span className="text-primary h6">Step 2</span>
                      <h3 className="h5 mb-2 text-white-75">Mint NFT's</h3>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                      <i className="far fa-layer-group fa-2x"></i>
                    </div>
                    <div className="icon-content">
                      <span className="text-primary h6">Step 3</span>
                      <h3 className="h5 mb-2 text-white-75">Stake NFT's</h3>
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4 mb-lg-0">
                    <div className="process-icon-2 border border-2 rounded-custom bg-white me-4 mt-2">
                      <i className="fa-regular fa-hand-holding-dollar fa-2x"></i>
                    </div>
                    <div className="icon-content">
                      <span className="text-primary h6">Step 4</span>
                      <h3 className="h5 mb-2 text-white-75">
                        Earn $EVI & Discounts!
                      </h3>
                    </div>
                  </li>
                </ul>
              </div>
              <a
                href="https://evinitiative.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="link-with-icon text-decoration-none mt-5 btn btn-primary"
              >
                Connect Wallet
                <i className="fa-solid fa-wallet"></i>
              </a>
              {/* <Link
                to="/about-us"
                className=" link-with-icon text-decoration-none mt-5 btn btn-primary"
              >
                Buy EVI Token
                <i className="fa-brands fa-ethereum"></i>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCrypto;
