import React from "react";
import PageHeaderBasic from "../components/common/PageHeaderBasic";
import PageMeta from "../components/common/PageMeta";
import ContactBox from "../components/contact/ContactBox";
import ContactFormEV from "../components/contact/ContactFormEV";
import ContactFormTwo from "../components/contact/ContactFormTwo";
import FeatureImgContentFourHome from "../components/feature-img-content/FeatureImgContentFourHome";
import FeatureImgEV from "../components/features/FeatureImgEV";
import FooterGlobal from "../layout/Footer/FooterGlobal";
import FooterOne from "../layout/Footer/FooterOne";
import NavbarEvPages from "../layout/Header/NavbarEvPages";
import Layout from "../layout/Layout";

const Apps = () => {
  return (
    <Layout>
      <PageMeta title="EV Initiative - Driving a Sustainable and Decentralized Future" />
      <NavbarEvPages />
      <PageHeaderBasic title="Applications" desc="" />
      <FeatureImgContentFourHome />
      <FeatureImgEV />
      <ContactFormEV />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Apps;
