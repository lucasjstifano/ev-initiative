import React from "react";
import Link from "next/link";

// ** Third Party Imports
import SubscribeForm from "@components/forms/SubscribeForm";

const FooterGlobal = ({ footerLight, style, footerGradient }) => {
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

                  <SubscribeForm />

                  {/* <div className="ratting-wrap mt-4">
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
                  </div> */}
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <div
                        className="mb-4 col-lg-11"
                        data-aos="fade-up"
                        data-aos-delay="50"
                      >
                        <div className="contact-info">
                          <h6 className="text-white-70">
                            Toronto{" "}
                            <i className="fas mx-2 fa-location-dot text-primary"></i>
                          </h6>
                          <p style={{ fontSize: "14px" }}>
                            3080 Yonge Street Suite #6060 Toronto, Ontario M4N
                            3N1
                          </p>
                          <a
                            href="tel:(415)231-59687"
                            className="read-more-link text-decoration-none"
                          >
                            <i className="far fa-phone me-2"></i> (289) 839-1253
                          </a>
                        </div>
                      </div>
                      <div
                        className="col-lg-11"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <div className="contact-info">
                          <h6 className="text-white-70">
                            California{" "}
                            <i className="fas mx-2 fa-location-dot text-primary"></i>
                          </h6>
                          <p style={{ fontSize: "14px" }}>
                            2108 N ST STE <br /> 4103 Sacramento, CA 95816
                          </p>
                          <a
                            href="tel:(415)231-59687"
                            className="read-more-link text-decoration-none"
                          >
                            <i className="far fa-phone me-2"></i> (408) 940-4735
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3 className="text-white-50">Navigation</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link href="/">
                            <a className="text-decoration-none">Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/about-ev-initiative">
                            <a className="text-decoration-none">About Us</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/hardware">
                            <a className="text-decoration-none">Hardware</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/apps" className="text-decoration-none">
                            <a className="text-decoration-none">Apps</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/site-hosts">
                            <a className="text-decoration-none">Site Hosts</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#cloud-management">
                            <a className="text-decoration-none">
                              Cloud Management
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3 className="text-white-50">Resources</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        <li>
                          <Link href="/contact-us">
                            <a className="text-decoration-none">Contact</a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href="/evi-token">
                            <a className="text-decoration-none">Crypto</a>
                          </Link>
                        </li> */}
                        <li>
                          <a
                            href="https://taplink.cc/evinitiative"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-decoration-none"
                          >
                            TappLink
                          </a>
                        </li>
                        <li>
                          <Link href="/#network-app-ev">
                            <a className="text-decoration-none">App Download</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/#ev-faq">
                            <a className="text-decoration-none">FAQs</a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/privacy-policy">
                            <a className="text-decoration-none">
                              Privacy Policy
                            </a>
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
                      href="https://www.simpeto.com"
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
                        href="https://www.linkedin.com/company/ev-initiative/about/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
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

export default FooterGlobal;
