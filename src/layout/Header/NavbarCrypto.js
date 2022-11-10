import React, { useEffect, useState } from "react";
import Link from "next/link";
import OffCanvasMenu from "./OffCanvasMenu";

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
            <Link href="/">
              <a className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none">
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
              </a>
            </Link>

            <Link href={process.env.PUBLIC_URL + "#offcanvasWithBackdrop"}>
              <a
                className="navbar-toggler position-absolute right-0 border-0"
                role="button"
              >
                <span
                  className="far fa-bars"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasWithBackdrop"
                  aria-controls="offcanvasWithBackdrop"
                ></span>
              </a>
            </Link>

            <div className="collapse navbar-collapse justify-content-end">
              <ul className="nav col-12 col-md-auto justify-content-end main-menu">
                <li className="nav-item dropdown">
                  <Link href={process.env.PUBLIC_URL + "/"}>
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li>
                  <Link
                    // smooth
                    href="/evi-token#evi-benefits"
                  >
                    <a className="nav-link">Benefits</a>
                  </Link>
                </li>
                <li>
                  <Link
                    // smooth
                    to="/evi-token#evi-whitepaper"
                  >
                    <a className="nav-link">Our Vision</a>
                  </Link>
                </li>
                <li>
                  <Link
                    // smooth
                    to="/evi-token#evi-founders"
                  >
                    <a className="nav-link">Overview</a>
                  </Link>
                </li>
                <li>
                  <Link href={process.env.PUBLIC_URL + "/"}>
                    <a className="nav-link">EV Initiative</a>
                  </Link>
                </li>
                <li>
                  <Link href={process.env.PUBLIC_URL + "/contact-us"}>
                    <a className="nav-link">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            {/* <Link href={process.env.PUBLIC_URL + "/evi-token"}>
              <a className="me-3">
                <img
                  src="assets/img/3d-icons/token-edit.gif"
                  alt="crypto"
                  className="img-fluid logo-white"
                  style={{ height: 60 }}
                />
              </a>
            </Link> */}

            <div className="action-btns me-5 me-lg-0 d-none d-md-block d-lg-block">
              {/* <Link href={process.env.PUBLIC_URL + "/login"}>
                <a className="btn btn-link text-decoration-none me-2">
                  Sign In
                </a>
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
