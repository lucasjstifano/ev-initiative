import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import SectionTitle from "../common/SectionTitle";

const CtaEv = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="cta-subscribe pb-120 pt-120">
        <div className="container">
          <div className="bg-gradient ptb-60 overflow-hidden rounded-custom">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-md-8">
                <div className="subscribe-info-wrap text-center position-relative z-2 p-3">
                  <SectionTitle
                    subtitle="Download The EV Initiative App"
                    title="And Start Charging Today!"
                    description="Use our sophisticated EV Initiative network app to find charging stations, charge your vehicle, and keep a balance on your e-wallet app."
                    dark
                  />

                  <div className="form-block-banner mw-60 m-auto mt-5 btn-stack-mb-pd">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.saascharge.mobile.evinitiative"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mx-sm-3 link-with-icon text-decoration-none mt-3 btn btn-primary-gradient"
                    >
                      Google Play
                      <i className="fa-brands fa-google"></i>
                    </a>

                    <a
                      href="https://apps.apple.com/ca/app/ev-initiative/id1497060430"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mx-sm-2 link-with-icon text-decoration-none mt-3 btn btn-primary-gradient"
                    >
                      Apple Store
                      <i className="fa-brands fa-apple"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ModalVideo
            channel="youtube"
            isOpen={isOpen}
            videoId="hAP2QF--2Dg"
            onClose={() => setOpen(false)}
          />
        </div>
      </section>
    </>
  );
};

export default CtaEv;
