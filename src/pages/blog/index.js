import React from "react";
import PageHeaderBasic from "@components/common/PageHeaderBasic";
import PageMeta from "@components/common/PageMeta";
import ContactFormEV from "@components/contact/ContactFormEV";
import FeatureImgContentFourHome from "@components/feature-img-content/FeatureImgContentFourHome";
import FeatureImgEV from "@components/features/FeatureImgEV";
import FooterOne from "@layout/Footer/FooterOne";
import NavbarEvPages from "@layout/Header/NavbarEvPages";
import Layout from "@layout/Layout";

const BlogHome = () => {
  return (
    <Layout>
      <PageMeta title="EV Initiative - eMobility Service Provider & Charge Port Operator" />
      <NavbarEvPages />
      <PageHeaderBasic title="Out Blog" desc="" />
      <FeatureImgContentFourHome />
      <FeatureImgEV />
      <ContactFormEV />
      <FooterOne footerLight />
    </Layout>
  );
};

export default BlogHome;
