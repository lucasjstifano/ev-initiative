import React from "react";
import { Link } from "react-router-dom";

const FeatureImgFounders = () => {
  return (
    <>
      <section
        className="image-feature bg-crypto pt-120 pb-120"
        id="evi-founders"
      >
        <div className="container ">
          <div className="row justify-content-between align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-5 col-12 order-lg-1">
              <div className="feature-img-content ">
                <div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block ">
                  <i className="fa-regular fa-circle-bolt fa-2x text-white "></i>
                </div>
                <h2 className="text-white-75">Founders live forever</h2>
                <ul className="list-unstyled d-flex flex-wrap price-feature-col mt-4 mb-4">
                  <p className="text-white-75">
                    The next phase of our journey is on us. We will take the
                    initiative to build the most robust and engaging EV charging
                    network on earth.
                  </p>
                  <p className="text-white-75">
                    Our founders are the changemakers who will be at the
                    epicenter of this project. The EV Initiative Founders & Coin
                    document, will lay the groundwork for our journey.
                  </p>
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
                    src="assets/img/3d-icons/whitepaper-founders.png"
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

export default FeatureImgFounders;
