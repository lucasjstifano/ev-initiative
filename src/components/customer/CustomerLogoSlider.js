import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);
const CustomerLogoSlider = () => {
  const swiperOption = {
    loop: true,
    speed: 700,
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      991: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  };

  return (
    <section className="cyber-brand-logo pt-80">
      <div className="container">
        <div className="row">
          <div className="brand-logo-slider">
            <Swiper {...swiperOption}>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <img
                    src="assets/img/brand-logo/hilton-logo.png"
                    alt="logo "
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <img src="assets/img/brand-logo/media-logo.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <img src="assets/img/brand-logo/teal-logo.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <img src="assets/img/brand-logo/ocpp-logo.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <img src="assets/img/brand-logo/lisgar-logo.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <img src="assets/img/brand-logo/evton-logo.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <img src="assets/img/brand-logo/coldev-logo.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <img src="assets/img/brand-logo/oca-logo.png" alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="cyber-brand-logo text-center">
                  <img
                    src="assets/img/brand-logo/coillers-logo.png"
                    alt="logo"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogoSlider;
