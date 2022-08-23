import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import HeroTitleCrypto from "../../components/common/HeroTitleCrypto";

// ** Third Party Imports
import toast from "react-hot-toast";

const HeroCrypto = () => {
  const [submitting, setSubmitting] = useState("Subscribe");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmitting("Subscribing");

    emailjs
      .sendForm(
        "service_oebog49",
        "template_hbe2laq",
        form.current,
        "9W-xgroL596bRE0WK"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success(
            "Thanks for subscribing! Check your email weekly for EV Initiative updates.",
            {
              style: {
                borderRadius: "10px",
              },
              duration: 6000,
            }
          );
          setSubmitting("Subscribed!");
        },
        (error) => {
          console.log(error.text);
          console.log("message NOT sent");
          toast.error(
            "Sorry, there was an issue subscribing. Please try again."
          );
        }
      );

    e.target.reset();
  };

  return (
    <>
      <section className=" ptb-120 text-white-75 bg-crypto">
        <div className="container d-flex flex-direction-column align-content-center justify-content-center">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 col-md-10">
              <div className=" hero-content-wrap mt-5 mt-lg-0 mt-xl-0">
                <HeroTitleCrypto
                  title="EVI Token to launch after 1,000 plugs are live on The EVI Charging Network"
                  desc="Subscribe to our waitlist to recive updates on our EVI token pre-sale and launch."
                />
                <div
                  className="action-btn mt-5 align-items-center d-block d-sm-flex d-lg-flex d-md-flex"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <form
                    className="newsletter-form position-relative d-block d-lg-flex d-md-flex mb-5"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <input
                      type="email"
                      className="input-newsletter form-control me-2"
                      placeholder="Enter your email"
                      name="email"
                      required=""
                      autoComplete="off"
                    />
                    <input
                      type="submit"
                      value={submitting}
                      className="btn btn-primary mt-3 mt-lg-0 mt-md-0"
                    />
                  </form>
                  {/* <a
                    href="/assets/pdf/EV Initiative-Whitepaper.pdf"
                    target="_blank"
                    className="btn btn-primary me-3"
                  >
                    Download Whitepaper
                  </a>
                  <a
                    href="https://evinitiative.io/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-decoration-none d-inline-flex align-items-center watch-now-btn mt-3 mt-lg-0 mt-md-0"
                  >
                    <i className="fa-solid fa-coins"></i>Buy EVI Token{" "}
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 mt-5">
              <div className="hero-img position-relative circle-shape-images">
                <img
                  src="assets/img/3d-icons/charger-edit.gif"
                  alt="hero img"
                  className="img-fluid position-relative z-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCrypto;
