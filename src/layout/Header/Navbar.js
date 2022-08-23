import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OffCanvasMenu from "./OffCanvasMenu";

const Navbar = ({ navDark }) => {
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
            navDark ? "navbar-dark" : "navbar-light"
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

            <div className="collapse navbar-collapse justify-content-center">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={process.env.PUBLIC_URL + "/"}
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Home
                  </Link>
                  <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                    <div className="dropdown-grid rounded-custom width-full">
                      <div className="dropdown-grid-item">
                        <h6 className="drop-heading">Different Demos</h6>
                        <Link to="/" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            1
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Saas Company 1</div>
                            <p>
                              It's for <strong>SaaS Software</strong> Company
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-sass-two" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            2
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Saas Company 2</div>
                            <p>
                              Modern <strong>Saas agency</strong>
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-desktop-app" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            3
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Desktop App</div>
                            <p>
                              <strong>Web Software</strong> Company
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-app-landing" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            4
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">App Landing</div>
                            <p>
                              App and <strong>Software</strong> Landing
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-soft-app" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            5
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">
                              Software Application
                            </div>
                            <p>
                              IT solutions and <strong>SaaS Application</strong>
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-startup" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            6
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Startup Agency</div>
                            <p>
                              Different type of <strong>Agency</strong>&lrm;
                            </p>
                          </div>
                        </Link>
                      </div>
                      <div className="dropdown-grid-item radius-right-side bg-light">
                        <h6 className="drop-heading">Different Demos</h6>

                        <Link
                          to="/home-data-analysis"
                          className="dropdown-link"
                        >
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            7
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Data Analysis</div>
                            <p>
                              Software &amp; <strong>Data Analysis</strong>&lrm;
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-app-two" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            8
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">App Landing Two</div>
                            <p>
                              App and <strong>Software</strong> Landing
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-nine" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            9
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">IT Solution</div>
                            <p>
                              <strong>Software</strong> & IT solutions, Saas
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-ten" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            10
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Cyber Security</div>
                            <p>
                              <strong>Cyber Security</strong> landing page
                            </p>
                          </div>
                        </Link>
                        <Link to="/home-eleven" className="dropdown-link">
                          <span className="demo-list bg-primary rounded text-white fw-bold">
                            11
                          </span>
                          <div className="dropdown-info">
                            <div className="drop-title">Crypto Currency</div>
                            <p>
                              <strong>Crypto Currency</strong> landing page
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/about-us"}
                    className="nav-link"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/services"}
                    className="nav-link"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={process.env.PUBLIC_URL + "/pricing"}
                    className="nav-link"
                  >
                    Pricing
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Company
                  </a>
                  <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                    <div className="dropdown-grid rounded-custom width-full">
                      <div className="dropdown-grid-item">
                        <h6 className="drop-heading">Useful Links</h6>
                        <Link to="/contact-us" className="dropdown-link px-0">
                          <span className="me-2">
                            <i className="far fa-address-book"></i>
                          </span>
                          <div className="drop-title">Contact Us</div>
                        </Link>
                        <Link
                          to="/single-service"
                          className="dropdown-link px-0"
                        >
                          <span className="me-2">
                            <i className="far fa-server"></i>
                          </span>
                          <div className="drop-title">Services Single</div>
                        </Link>
                        <Link to="/blogs" className="dropdown-link">
                          <span className="me-2">
                            <i className="far fa-th-large"></i>
                          </span>
                          <div className="drop-title">Our Latest News</div>
                        </Link>
                        <Link to="/blog-single" className="dropdown-link">
                          <span className="me-2">
                            <i className="far fa-bars"></i>
                          </span>
                          <div className="drop-title">News Details</div>
                        </Link>
                        <Link to="/career" className="dropdown-link px-0">
                          <span className="me-2">
                            <i className="far fa-graduation-cap"></i>
                          </span>
                          <div className="drop-title">Career</div>
                        </Link>
                        <Link
                          to="/career-single"
                          className="dropdown-link px-0"
                        >
                          <span className="me-2">
                            <i className="far fa-user-graduate"></i>
                          </span>
                          <div className="drop-title">Career Single</div>
                        </Link>
                        <Link to="/integrations" className="dropdown-link">
                          <span className="me-2">
                            <i className="far fa-rocket-launch"></i>
                          </span>
                          <div className="drop-title">Integrations</div>
                        </Link>
                        <Link
                          to="/integration-single"
                          className="dropdown-link px-0"
                        >
                          <span className="me-2">
                            <i className="far fa-paper-plane"></i>
                          </span>
                          <div className="drop-title">Integration Single</div>
                        </Link>
                      </div>
                      <div className="dropdown-grid-item radius-right-side bg-light">
                        <h6 className="drop-heading">Utility Pages </h6>

                        <Link to="/help-center" className="dropdown-link">
                          <span className="me-2">
                            <i className="far fa-life-ring"></i>
                          </span>
                          <div className="drop-title">Help Center</div>
                        </Link>
                        <Link
                          to="/help-center-single"
                          className="dropdown-link"
                        >
                          <span className="me-2">
                            <i className="far fa-headset"></i>
                          </span>
                          <div className="drop-title">Help Details</div>
                        </Link>
                        <Link to="/request-for-demo" className="dropdown-link">
                          <span className="me-2">
                            <i className="far fa-laptop-code"></i>
                          </span>
                          <div className="drop-title">Request for Demo</div>
                        </Link>
                        <Link to="/login" className="dropdown-link">
                          <span className="me-2">
                            <i className="far fa-sign-in"></i>
                          </span>
                          <div className="drop-title">User Login</div>
                        </Link>
                        <Link to="/signup" className="dropdown-link">
                          <span className="me-2">
                            <i className="far fa-user-plus"></i>
                          </span>
                          <div className="drop-title">User SignUp</div>
                        </Link>
                        <Link to="/password-reset" className="dropdown-link">
                          <span className="me-2">
                            <i className="far fa-trash-undo"></i>
                          </span>
                          <div className="drop-title">Recovery Account</div>
                        </Link>
                        <Link to="/error" className="dropdown-link">
                          <span className="me-2">
                            <i className="far fa-exclamation-triangle"></i>
                          </span>
                          <div className="drop-title">404 Page</div>
                        </Link>
                        <Link
                          to={process.env.PUBLIC_URL + "/coming-soon"}
                          className="dropdown-link"
                        >
                          <span className="me-2">
                            <i className="far fa-clock"></i>
                          </span>
                          <div className="drop-title">Coming Soon</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="action-btns text-end me-5 me-lg-0 d-none d-md-block d-lg-block">
              <Link
                to={process.env.PUBLIC_URL + "/login"}
                className="btn btn-link text-decoration-none me-2"
              >
                Sign In
              </Link>
              <Link
                to={process.env.PUBLIC_URL + "/request-for-demo"}
                className="btn btn-primary"
              >
                Get Started
              </Link>
            </div>
            <OffCanvasMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
