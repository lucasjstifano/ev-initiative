import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const FooterCrypto = ({ footerLight, style, footerGradient }) => {
  return (
    <>
      <footer className="footer-section">
        <div
          className={`footer-top ${
            footerLight ? "footer-light" : "bg-crypto"
          } ${footerGradient ? "bg-gradient" : ""}  text-white ptb-120`}
          style={style}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    <img
                      src="assets/img/brand-logo/EV Initiative Logo Header.png"
                      alt="logo"
                      className="img-fluid logo-white"
                      style={{ height: "80px" }}
                    />
                  </div>
                  <p>
                    Our latest news, articles, and resources, we will sent to
                    your inbox weekly.
                  </p>

                  <form className="newsletter-form position-relative d-block d-lg-flex d-md-flex">
                    <input
                      type="text"
                      className="input-newsletter form-control me-2"
                      placeholder="Enter your email"
                      name="email"
                      required=""
                      autoComplete="off"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      data-wait="Please wait..."
                      className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                    />
                  </form>
                  <div className="ratting-wrap mt-4">
                    <h6 className="mb-0 text-white-50">5/5 Overall rating</h6>
                    <ul className="list-unstyled rating-list list-inline mb-0">
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fas fa-star text-warning"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3 className="text-white-50">Navigation</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link
                            to="/evi-token"
                            className="text-decoration-none"
                          >
                            EVI Token
                          </Link>
                        </li>
                        <li>
                          <HashLink
                            smooth
                            to="/evi-token#evi-benefits"
                            className="text-decoration-none"
                          >
                            Benefits
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            smooth
                            to="/evi-token#evi-presale"
                            className="text-decoration-none"
                          >
                            Presale
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            smooth
                            to="/evi-token#evi-faq"
                            className="text-decoration-none"
                          >
                            FAQs
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            smooth
                            to="/evi-token#evi-roadmap"
                            className="text-decoration-none"
                          >
                            Roadmap
                          </HashLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3 className="text-white-50">EV Initiative</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link to="/" className="text-decoration-none">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/about-ev-initiative"
                            className="text-decoration-none"
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/sponsorship"
                            className="text-decoration-none"
                          >
                            Sponsorship
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/site-hosts"
                            className="text-decoration-none"
                          >
                            Site Hosts
                          </Link>
                        </li>
                        <li>
                          <HashLink
                            smooth
                            to="/#network-app-ev"
                            className="text-decoration-none"
                          >
                            App Download
                          </HashLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3 className="text-white-50">Resources</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link
                            to="/contact-us"
                            className="text-decoration-none"
                          >
                            Contact
                          </Link>
                        </li>
                        <li>
                          <HashLink
                            smooth
                            to="/evi-token#evi-whitepaper"
                            className="text-decoration-none"
                          >
                            Whitepaper
                          </HashLink>
                        </li>
                        <li>
                          <HashLink
                            smooth
                            to="/evi-token#evi-founders"
                            className="text-decoration-none"
                          >
                            Overview
                          </HashLink>
                        </li>
                        <li>
                          <Link
                            to="/privacy-policy"
                            className="text-decoration-none"
                          >
                            Privacy Policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`footer-bottom ${
            footerLight ? "footer-light" : "bg-crypto"
          } ${footerGradient ? "bg-gradient" : ""} text-white py-4`}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  <p className="mb-lg-0 mb-md-0">
                    &copy; 2022 EV Initiative Inc. All Rights Reserved. Designed
                    By{""}
                    <a
                      href="https://www.instagram.com/simpeto/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-decoration-none ms-2"
                    >
                      Simpeto
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-single-col text-start text-lg-end text-md-end">
                  <ul className="list-unstyled list-inline footer-social-list mb-0">
                    <li className="list-inline-item">
                      <a
                        href="https://www.tiktok.com/@ev_initiative"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <i className="fab fa-tiktok"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://www.instagram.com/ev_initiative/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://twitter.com/EV_Initiative"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        href="https://t.me/+J7PBUzXHlUcyM2Ex"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <i className="fab fa-telegram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCrypto;
