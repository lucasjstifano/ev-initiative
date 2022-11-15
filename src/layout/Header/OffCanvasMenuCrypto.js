import React from "react";
import Link from "next/link";

const OffCanvasMenuCrypto = () => {
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
              <Link href="/evi-token">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li>
              <Link to="/evi-token#evi-benefits">
                <a className="nav-link">Benefits</a>
              </Link>
            </li>
            <li>
              <Link to="/evi-token#evi-whitepaper">
                <a className="nav-link">Our Vision</a>
              </Link>
            </li>
            <li>
              <Link href="/evi-token#evi-founders">
                <a className="nav-link">Overview</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="nav-link">EV Initiative</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <li>
              <Link
                href="https://evinitiative.shop/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <a className="nav-link">Shop</a>
              </Link>
            </li>
            <li>
              <Link href="/contact-us">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
          <div className="action-btns mt-4 ps-3">
            {/* <Link href="/login">
              <a className="btn btn-outline-primary me-2">Sign In</a>
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
