import React from "react";
import Link from "next/link";

const NotFoundScreen = () => {
  return (
    <>
      <section className="error-section ptb-120 bg-dark min-vh-100 w-100 d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="error-page-content-wrap">
                <h2 className="error-404 text-primary">404</h2>
                <h1 className="display-5 fw-bold">Page Not Found</h1>
                <p className="lead">
                  Efficiently reinvent next-generation scenarios without focused
                  networks. Collaboratively productize superior technology
                  before robust potentialities.{" "}
                </p>

                <Link href="/">
                  <a className="btn btn-primary mt-4">Go Back Home</a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mt-5 d-none d-md-block d-lg-block">
              <div className="hero-img position-relative circle-shape-images">
                <img
                  src="assets/img/3d-icons/Low Battery-01-1123x1134.png"
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

export default NotFoundScreen;
