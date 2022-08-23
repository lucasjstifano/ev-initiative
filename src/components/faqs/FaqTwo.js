import React from "react";
import SectionTitle from "../common/SectionTitle";

const FaqTwo = () => {
  return (
    <>
      <section className="faq-section ptb-120 bg-light" id="ev-faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-12">
              <SectionTitle
                subtitle="FAQ"
                title="Frequently Asked Questions"
                description=""
                centerAlign
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-7 col-12">
              <div className="accordion faq-accordion" id="accordionExample">
                <div className="accordion-item border border-2 active">
                  <h5 className="accordion-header" id="faq-1">
                    <button
                      className="accordion-button accordion-button-ev"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                    >
                      For site hosts, how Many Charging Stations Does EV
                      Initiative Typically Deploy Initially?
                    </button>
                  </h5>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="faq-1"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      On most Deployments EV Initiative instals 2 to 4 charging
                      points to begin with. We always take into consideration
                      the addition of EV charging stations down the road. As
                      soon as EV Initiative observes utilisation rate over 30
                      days greater than 20%, it is in the interest of EV
                      Initiative and the co-ownership to develop the
                      infrastructure in order to add new charging points.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border border-2">
                  <h5 className="accordion-header" id="faq-2">
                    <button
                      className="accordion-button collapsed accordion-button-ev"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                    >
                      What is the term of the contract?
                    </button>
                  </h5>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-2"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        The contract extends for a period of 10 years from the
                        date of commissioning or evolution of the charging
                        station infrastructure, the time for EV Initiative to
                        amortise the infrastructure, then it is automatically
                        renewed for successive periods of 5 years.
                      </p>
                      <p>
                        Level 2's start at 60-months and DCFC start at
                        120-months
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item border border-2">
                  <h5 className="accordion-header" id="faq-3">
                    <button
                      className="accordion-button collapsed accordion-button-ev"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                    >
                      Who decides where to locate the charging stations at a
                      host location?
                    </button>
                  </h5>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-3"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The exact locations for the installation of the charging
                      station infrastructures are included in the appendix to
                      the contract binding EV Initiative to the owner/co-owners
                      of the designated space.
                    </div>
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

export default FaqTwo;
