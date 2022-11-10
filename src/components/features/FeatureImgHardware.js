import React from "react";
import Link from "next/link";

const FeatureImgHardware = () => {
  return (
    <>
      <section className="image-feature  pt-120 pb-120" id="sponsorship-ev">
        <div className="container ">
          <div className="row justify-content-between align-items-center ">
            <div className="col-lg-5 col-12 order-lg-1">
              <div className="feature-img-content ">
                <div className="icon-box rounded-custom bg-primary shadow-sm d-inline-block ">
                  <i className="fal fa-charging-station fa-2x text-white "></i>
                </div>
                <h2>
                  We Supply, Install and Operate Electric Vehicle Service
                  Equipment
                </h2>
                <ul className="list-unstyled d-flex flex-wrap price-feature-col mt-4 mb-4">
                  <p>
                    The software behind The EVI Charging Network integrates with
                    dozens of charging hardware through open standards protocols
                    (OCPP) & OCPI.
                  </p>
                  <p>
                    We are committed to supporting reliable technology and
                    hardware to ensure a premium driving experience.
                  </p>
                </ul>
                <Link href="/contact-us">
                  <a className="link-with-icon text-decoration-none mt-3 btn btn-primary">
                    Contact Us
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-12 order-lg-0">
              <div className="feature-img-holder mt-4 mt-lg-0 mt-xl-0">
                <img
                  src="assets/img/web-content/ev-open-public.jpg"
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

export default FeatureImgHardware;
