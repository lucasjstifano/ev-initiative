import React from "react";
import { Link } from "react-router-dom";

const PageHeaderBasic = ({ title, desc, integration, blogtags }) => {
  return (
    <>
      <section className="page-header bg-gradient position-relative overflow-hidden ptb-120 bg-dark">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-8 col-12">
              <div className="company-info-wrap align-items-center">
                <div className="company-overview">
                  <h1 className="display-5 fw-bold">{title}</h1>
                  <p className="lead mb-0">{desc}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeaderBasic;
