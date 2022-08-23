import React from "react";
import SectionTitle from "../common/SectionTitle";

const PromoTwoEV = () => {
  return (
    <>
      <section className="promo-section ptb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <SectionTitle
                title=" Every use-case"
                description=""
                centerAlign
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4">
                <div className="promo-icon mb-32">
                  <i className="fas fa-city text-primary fa-3x"></i>
                </div>
                <div className="promo-info">
                  <h3 className="h5">Public</h3>
                  <p className="mb-0"></p>
                </div>
                {/* <!--pattern start--> */}
                <div className="dot-shape-bg position-absolute z--1 left--40 top--40">
                  <img src="assets/img/shape/dot-big-square.svg" alt="shape" />
                </div>
                {/* <!--pattern end--> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4">
                <div className="promo-icon mb-32">
                  <i className="fas fa-shop text-primary fa-3x"></i>
                </div>
                <div className="promo-info">
                  <h3 className="h5">Retail & Commercial</h3>
                  <p className="mb-0"></p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="promo-single position-relative text-center bg-white custom-shadow rounded-custom p-5 mb-4">
                <div className="promo-icon mb-32">
                  <i className="fas fa-building text-primary fa-3x"></i>
                </div>
                <div className="promo-info">
                  <h3 className="h5">Multifamily</h3>
                  <p className="mb-0"></p>
                </div>
                {/* <!--pattern start--> */}
                <div className="dot-shape-bg position-absolute z--1 right--40 bottom--40">
                  <img src="assets/img/shape/dot-big-square.svg" alt="shape" />
                </div>
                {/* <!--pattern end--> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoTwoEV;
