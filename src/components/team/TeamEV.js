import React from "react";
import Link from "next/link";

const TeamEV = () => {
  return (
    <>
      <section id="our-team" className="team-section pt-60 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="section-heading text-center">
                <h5 className="h6 text-primary">Our Team</h5>
                <h2>Meet The Changemakers Powering The Initiative</h2>
                <p>
                  Bringing over 30 years of combined experience to the table.
                  1,000+ EV charger deployments across USA, Canada, and abroad.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="team-single-wrap mb-5">
                <div className="team-img rounded-custom">
                  <img
                    src="assets/img/team/aaron-team.png"
                    alt="team"
                    className="img-fluid position-relative"
                  />
                  <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/in/aaron-zeraldo-01546416a/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-info mt-4 text-center">
                  <h5 className="h6 mb-1">Aaron Zeraldo</h5>
                  <p className="text-muted small mb-4">Partner</p>
                  <div className="text-start">
                    <p>
                      <h6>Initiatives:</h6> Direct sales, big-ticket project
                      development sales, targeted online marketing &
                      advertising, ICP marketing campaigns, industrial service
                      and contract sales, web3 creator, Dirt Bikes & Golf,
                      growing the EVI Charging Network to a prominent scale.
                    </p>
                    <ul className="list-unstyled d-flex flex-wrap price-feature-col mt-4 mb-4">
                      <li className="py-1">
                        <i className="fas fa-check-circle me-2 text-primary"></i>
                        Network connections: 1,600+
                      </li>
                      <li className="py-1">
                        <i className="fas fa-check-circle me-2 text-primary"></i>
                        4-years in the EV energy ecosystem
                      </li>
                      <li className="py-1">
                        <i className="fas fa-check-circle me-2 text-primary"></i>
                        7-years in the Crypto Blockchain space
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="team-single-wrap mb-5">
                <div className="team-img rounded-custom">
                  <img
                    src="assets/img/team/warren-team.png"
                    alt="team"
                    className="img-fluid position-relative"
                  />
                  <ul className="list-unstyled team-social-list d-flex flex-column mb-0">
                    <li className="list-inline-item">
                      <a
                        href="https://www.linkedin.com/in/warren-navarro/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-info mt-4 text-center">
                  <h5 className="h6 mb-1">Warren Navarro</h5>
                  <p className="text-muted small mb-4">Partner</p>
                  <div className="text-start">
                    <p>
                      <h6>Initiatives:</h6> Direct experience deploying hundreds
                      EV charging stations, startup/scaleup experience, history
                      of sustainability projects, EV and sustainability tech
                      nerd, web3 creator, Muay Thai & Community, growing The EVI
                      Charging Network to an extraordinary scale.
                    </p>
                    <ul className="list-unstyled d-flex flex-wrap price-feature-col mt-4 mb-4">
                      <li className="py-1">
                        <i className="fas fa-check-circle me-2 text-primary"></i>
                        Network connections: 2,700+
                      </li>
                      <li className="py-1">
                        <i className="fas fa-check-circle me-2 text-primary"></i>
                        7-years in the EV energy ecosystem
                      </li>
                      <li className="py-1">
                        <i className="fas fa-check-circle me-2 text-primary"></i>
                        Active participation in multiple EV startups
                      </li>
                      <li className="py-1">
                        <i className="fas fa-check-circle me-2 text-primary"></i>
                        “EV industry expert”
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamEV;
