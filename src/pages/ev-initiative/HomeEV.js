import React, { Component } from "react";
import AboutHome from "../../components/about/AboutHome";
import PageMeta from "../../components/common/PageMeta";
import ContactFormEV from "../../components/contact/ContactFormEV";
import CtaEv from "../../components/cta/CtaEv";
import CustomerLogoSlider from "../../components/customer/CustomerLogoSlider";
import FaqTwo from "../../components/faqs/FaqTwo";
import FeatureImgContentFourHome from "../../components/feature-img-content/FeatureImgContentFourHome";
import FeatureFiveEV from "../../components/features/FeatureFiveEV";
import FeatureImgEV from "../../components/features/FeatureImgEV";
import PromoTwoEV from "../../components/promo/PromoTwoEV";
import SecVerticalSocial from "../../components/vertical-social";
import { VerticalSocial } from "../../data";
import FooterGlobal from "../../layout/Footer/FooterGlobal";
import NavbarEV from "../../layout/Header/NavbarEV";
import Layout from "../../layout/Layout";
import HeroEV from "./HeroEV";

class HomeEV extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title="EV Initiative - eMobility Service Provider & Charge Port Operator" />
        <SecVerticalSocial data={VerticalSocial} />
        <NavbarEV navDark />
        <HeroEV />
        <CustomerLogoSlider />
        <AboutHome />
        <PromoTwoEV />
        <FeatureImgContentFourHome />
        <FeatureImgEV />
        <FeatureFiveEV />
        {/* <TestimonialTwo /> */}
        <CtaEv />
        <ContactFormEV />
        <FaqTwo />
        <FooterGlobal />
      </Layout>
    );
  }
}

export default HomeEV;
