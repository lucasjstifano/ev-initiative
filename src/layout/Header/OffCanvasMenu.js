import React from "react";
import { Link } from "react-router-dom";

const OffCanvasMenu = () => {
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-ev-initiative" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/hardware" className="nav-link">
                Hardware
              </Link>
            </li>
            <li>
              <Link to="/apps" className="nav-link">
                Apps
              </Link>
            </li>
            <li>
              <Link to="/site-hosts" className="nav-link">
                Site Hosts
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="action-btns mt-4 ps-3">
            {/* <Link to="/login" className="btn btn-outline-primary me-2">
              Sign In
            </Link> */}
            <a
              href="https://evinitiative.network/"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary"
            >
              Dashboard Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenu;
