import React, { useRef, useState } from "react";

// ** Third Party Imports
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const SubscribeForm = () => {
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
    <div>
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
    </div>
  );
};

export default SubscribeForm;
