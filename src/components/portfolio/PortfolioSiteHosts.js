import React from "react";

const PortfolioSiteHosts = () => {
  return (
    <section className="portfolio ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h2>EV Charging Stations</h2>
              <p>
                EV Initiative manages the ongoing network operation,
                maintenance, and customer service of the stations.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-all"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
            >
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mb-5">
                  <div className="single-portfolio-item mb-30">
                    <div className="portfolio-item-img">
                      <img
                        src="assets/img/portfolio/portfolio3.jpg"
                        alt="portfolio "
                        className="img-fluid"
                      />
                      <div className="portfolio-info">
                        <span className="text-decoration-none text-white h4">
                          Use Cases:
                        </span>
                        <div className="categories">
                          <span>Multifamily, Office, Commercial</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pe-2">
                    <div
                      className="cyber-about-count-box bg-white p-4 mt-5 mb-3"
                      style={{ height: "155px" }}
                    >
                      <h3 className="text-decoration-none text-primary mt-2">
                        Static
                      </h3>
                      <p className="h5">32A | 7kW</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mb-5">
                  <div className="single-portfolio-item mb-30">
                    <div className="portfolio-item-img">
                      <img
                        src="assets/img/portfolio/portfolio1.jpg"
                        alt="portfolio "
                        className="img-fluid"
                      />
                      <div className="portfolio-info">
                        <span className="text-decoration-none text-white h4">
                          Use Cases:
                        </span>
                        <div className="categories">
                          <span>
                            Multifamily, Office, Hospitality, Commercial, Fleet
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pe-2">
                    <div
                      className="cyber-about-count-box bg-white p-4 mt-5 mb-3"
                      style={{ height: "155px" }}
                    >
                      <h3 className="text-decoration-none text-primary mt-2">
                        Thor
                      </h3>
                      <span className="h5">48A | 11kw</span>
                      <br />
                      <span className="h5">80A | 19kw</span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mb-5">
                  <div className="single-portfolio-item mb-30">
                    <div className="portfolio-item-img">
                      <img
                        src="assets/img/portfolio/portfolio2.jpg"
                        alt="portfolio "
                        className="img-fluid"
                      />
                      <div className="portfolio-info">
                        <span className="text-decoration-none text-white h4">
                          Use Cases:
                        </span>
                        <div className="categories">
                          <span>Commercial, Fleet, Dealerships</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pe-2">
                    <div
                      className="cyber-about-count-box bg-white p-4 mt-5 mb-3"
                      style={{ height: "155px" }}
                    >
                      <h3 className="text-decoration-none text-primary mt-2">
                        Surge
                      </h3>
                      <span className="h5">30kw</span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 col-sm-12 mt-5 mb-5">
                  <div className="single-portfolio-item mb-30">
                    <div className="portfolio-item-img">
                      <img
                        src="assets/img/portfolio/portfolio4.jpg"
                        alt="portfolio "
                        className="img-fluid"
                      />

                      <div className="portfolio-info">
                        <span className="text-decoration-none text-white h4">
                          Use Cases:
                        </span>
                        <div className="categories">
                          <span>
                            Commercial, Fleet, Destination, Fast Dining, Grocery
                            and Retail
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pe-2">
                    <div
                      className="cyber-about-count-box bg-white p-4 mt-5 mb-3"
                      style={{ height: "155px" }}
                    >
                      <h3 className="text-decoration-none text-primary mt-2">
                        Black Lightning
                      </h3>
                      <span className="h5">
                        60kW, 90kW, 120kW,
                        <br />
                        150kW, 180kW
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSiteHosts;
