import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const OffCanvasMenuCrypto = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasWithBackdrop"
      >
        <div className="offcanvas-header d-flex align-items-center mt-4">
          <Link
            to="/"
            className="d-flex align-items-center mb-md-0 text-decoration-none"
          >
            <img
              src="assets/img/brand-logo/EV Initiative Logo Header.png"
              alt="logo"
              className="img-fluid ps-2"
              style={{ height: 60 }}
            />
          </Link>
          <button
            type="button"
            className="close-btn text-danger"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="far fa-close"></i>
          </button>
        </div>
        <div className="offcanvas-body">
          <ul className="nav col-12 col-md-auto justify-content-center main-menu">
            <li>
              <Link to="/evi-token" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <HashLink
                smooth
                to="/evi-token#evi-benefits"
                className="nav-link"
              >
                Benefits
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/evi-token#evi-whitepaper"
                className="nav-link"
              >
                Our Vision
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/evi-token#evi-founders"
                className="nav-link"
              >
                Overview
              </HashLink>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/"} className="nav-link">
                EV Initiative
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to={process.env.PUBLIC_URL + "/contact-us"}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="action-btns mt-4 ps-3">
            {/* <Link to="/login" className="btn btn-outline-primary me-2">
              Sign In
            </Link> */}
            <a
              href="https://taplink.cc/evinitiative"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenuCrypto;
