import React from "react";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";

const CampaignRolloutOne = ({ cardDark }) => {
  return (
    <>
      <section
        className={`feature-section ptb-120 ${
          cardDark ? "bg-crypto" : "bg-light"
        }`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              {cardDark ? (
                <SectionTitle
                  subtitle="Services"
                  title="Best Services Grow Your Business Value"
                  description="Globally actualize cost effective with resource maximizing
                  leadership skills."
                  centerAlign
                  dark
                />
              ) : (
                <SectionTitle
                  subtitle="Services"
                  title="Best Services Grow Your Business Value"
                  description="Globally actualize cost effective with resource maximizing
                  leadership skills."
                  centerAlign
                />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="campaign-grid">
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                      : "bg-white"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-success-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-file-chart-line icon-sm text-success"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5 text-white">Founders Campaign</h3>
                    <p className="mb-0">
                      Access the NFT platform to hit and stake your NFTs to earn
                      your EV Initiative rewards and benefits.
                    </p>
                    <p className="mb-0">
                      Coin NFTs can be traded in secondary markets.
                    </p>
                  </div>
                  <Link href="/single-service">
                    <a className="link-with-icon text-decoration-none mt-3">
                      View Details <i className="far fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 ${
                    cardDark
                      ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                      : "bg-white"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay="50"
                >
                  <div
                    className="
                      icon-box
                      d-inline-block
                      rounded-circle
                      bg-danger-soft
                      mb-32
                    "
                  >
                    <i className="fal fa-user-friends icon-sm text-danger"></i>
                  </div>
                  <div className="feature-content">
                    <h3 className="h5 text-white">Governance</h3>
                    <p className="mb-0">
                      Access EV Initiative’s decentralized governance and
                      participate in the company’s strategic decisions.
                    </p>
                  </div>
                  <Link href="/single-service">
                    <a className="link-with-icon text-decoration-none mt-3">
                      View Details <i className="far fa-arrow-right"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CampaignRolloutOne;
