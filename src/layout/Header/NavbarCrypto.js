import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffCanvasMenu from "./OffCanvasMenu";
import { HashLink } from "react-router-hash-link";

const NavbarCrypto = ({ navDark }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".main-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <header
        className={`main-header ${navDark ? "position-absolute" : ""} w-100 `}
      >
        <nav
          className={`navbar navbar-expand-xl ${
            navDark ? "navbar-dark" : "navbar-crypto-light"
          } sticky-header ${scroll > headerTop ? "affix" : ""}`}
        >
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <img
                src="assets/img/brand-logo/EV Initiative Logo Header.png"
                alt="logo"
                className="img-fluid logo-white"
                style={{ height: 60 }}
              />
              <img
                src="assets/img/brand-logo/EV Initiative Logo Header.png"
                alt="logo"
                className="img-fluid logo-color"
                style={{ height: 60 }}
              />
            </Link>

            <Link
              className="navbar-toggler position-absolute right-0 border-0"
              to={process.env.PUBLIC_URL + "#offcanvasWithBackdrop"}
              role="button"
            >
              <span
                className="far fa-bars"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              ></span>
            </Link>

            <div className="collapse navbar-collapse justify-content-end">
              <ul className="nav col-12 col-md-auto justify-content-end main-menu">
                <li className="nav-item dropdown">
                  <Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>
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
            </div>
            <Link to={process.env.PUBLIC_URL + "/evi-token"} className="me-3">
              <img
                src="assets/img/3d-icons/token-edit.gif"
                alt="crypto"
                className="img-fluid logo-white"
                style={{ height: 60 }}
              />
            </Link>

            <div className="action-btns me-5 me-lg-0 d-none d-md-block d-lg-block">
              {/* <Link
                to={process.env.PUBLIC_URL + "/login"}
                className="btn btn-link text-decoration-none me-2"
              >
                Sign In
              </Link> */}
              <a
                href="https://evinitiative.io/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-primary"
              >
                Get Started
              </a>
            </div>
            <OffCanvasMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavbarCrypto;

/* <HashLink smooth to="/#sponsorship-ev" className="nav-link">
  Sponsorship
</HashLink>; */
