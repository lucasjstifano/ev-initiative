import React, { Component } from "react";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HeroOne from "./HeroOne";
import FeatureImgContentFour from "../../components/feature-img-content/FeatureImgContentFour";
import FeatureImg from "../../components/features/FeatureImg";
import PageMeta from "../../components/common/PageMeta";
import TestimonialOne from "../../components/testimonial/TestimonialOne";
import WorkProcess from "../../components/work-process/WorkProcess";
import PriceOne from "../../components/prices/PriceOne";
import FaqOne from "../../components/faqs/FaqOne";
import IntegrationOne from "../../components/integration/IntegrationOne";
import CtaOne from "../../components/cta/CtaOne";
import FooterOne from "../../layout/Footer/FooterOne";
import FeatureOne from "../../components/features/FeatureOne";
import ContactFormThree from "../../components/contact/ContactFormThree";
import CyberFaq from "../../components/faqs/CyberFaq";
import CyberService from "../../components/services/CyberService";
import CyberAbout from "../../components/about/CyberAbout";
import CustomerLogoSlider from "../../components/customer/CustomerLogoSlider";
import FaqTwo from "../../components/faqs/FaqTwo";
import AboutHome from "../../components/about/AboutHome";
import FeatureImgContentFourHome from "../../components/feature-img-content/FeatureImgContentFourHome";
import WorkProcessFour from "../../components/work-process/WorkProcessFour";
import WorkProcessRoadmap from "../../components/work-process/WorkProcessRoadmap";
import CtaEv from "../../components/cta/CtaEv";
import ContactFormEV from "../../components/contact/ContactFormEV";
import TestimonialEV from "../../components/testimonial/TestimonialEV";
import FeatureImgEV from "../../components/features/FeatureImgEV";

class HomeSassOne extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title="Quiety - Software &amp; IT Solutions HTML Template" />
        <Navbar navDark />
        <HeroOne />
        <CustomerLogoSlider />
        <AboutHome />
        <CyberService />
        <FeatureImgContentFourHome />
        <WorkProcessRoadmap />
        <FeatureImgEV />
        {/* <FeatureOne /> */}
        <TestimonialEV hasSubtitle />
        <CtaEv />
        {/* <WorkProcess /> */}
        {/* <PriceOne paddingTop="pt-60 pb-120" haspriceTitleWithHeader /> */}
        {/* <IntegrationOne /> */}
        <ContactFormEV />
        <FaqTwo />
        <FooterOne footerLight />
      </Layout>
    );
  }
}

export default HomeSassOne;
