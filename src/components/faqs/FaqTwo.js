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
                subtitle="FUTURE"
                title="Upcoming Features"
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
                      OCPP 2.0.1
                    </button>
                  </h5>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="faq-1"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      OCPP 2.0.1 incorporates improvements for things found in
                      the first implementations of OCPP 2.0 during Plugfests and
                      in the field. Improvements have been made in the area of
                      security, ISO 15118, Smart Charging and the extensibility
                      of OCPP. A better explanation of the Device Model has been
                      added as well as several other improvements.
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
                      eRoaming
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
                        EV Initiaitve’s eRoaming allows the interconnection of
                        charging station operators/networks (CSO) with eMobility
                        providers (EMP) selling services to EV drivers. The EV
                        service platform does manage the authorisation protocol
                        and financial clearing between charging station
                        operators (CSO) and eMobility providers (EMP). This open
                        solution will be open to any other charging station
                        networks (CSO) or any EV driver eMobility providers
                        (EMP). The solution is based on the international Open
                        Charge Point Interface (OCPI) used by major EV charging
                        networks and connection to major hubs Hubject and
                        Gireve.
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
                      ISO15118 Plug & Charge
                    </button>
                  </h5>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="faq-3"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        ISO15118 is a standard for vehicle-to-grid
                        communication, specifying the ways the vehicles
                        communicate with charging devices. The standard also
                        defines preconditions for identification with the cable
                        or via Wi-Fi, enabling the charging device and the
                        back-end service to identify the car and its owner when
                        the vehicle is plugged in.
                      </p>
                      <p>
                        Developing a smooth customer experience is our passion,
                        which is why removing one step from the charging event
                        process sounded tempting.
                      </p>
                      <p>
                        We took the ISO15118 standard instructions and made them
                        into a fully functioning product: Plug & Charge by EV
                        Initiative.
                      </p>
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
