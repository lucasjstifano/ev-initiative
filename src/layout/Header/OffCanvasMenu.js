import React from "react";
import Link from "next/link";

const OffCanvasMenu = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasWithBackdrop"
      >
        <div className="offcanvas-header d-flex align-items-center mt-4">
          <Link href="/">
            <a className="d-flex align-items-center mb-md-0 text-decoration-none">
              <img
                src="assets/img/brand-logo/EV Initiative Logo Header.png"
                alt="logo"
                className="img-fluid ps-2"
                style={{ height: 60 }}
              />
            </a>
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
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about-ev-initiative">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li>
              <Link href="/hardware">
                <a className="nav-link">Hardware</a>
              </Link>
            </li>
            <li>
              <Link href="/apps">
                <a className="nav-link">Apps</a>
              </Link>
            </li>
            <li>
              <Link href="/site-hosts">
                <a className="nav-link">Site Hosts</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          <div className="action-btns mt-4 ps-3">
            <Link href="/login">
              <a className="btn btn-outline-primary me-2">Sign In</a>
            </Link>
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
