import React from "react";
import PageHeaderBasic from "../components/common/PageHeaderBasic";
import PageMeta from "../components/common/PageMeta";
import ContactBox from "../components/contact/ContactBox";
import ContactFormTwo from "../components/contact/ContactFormTwo";
import FeatureImgContentFourHome from "../components/feature-img-content/FeatureImgContentFourHome";
import FooterGlobal from "../layout/Footer/FooterGlobal";
import FooterOne from "../layout/Footer/FooterOne";
import NavbarEvPages from "../layout/Header/NavbarEvPages";
import Layout from "../layout/Layout";

const Contact = () => {
  return (
    <Layout>
      <PageMeta title="EV Initiative - Driving a Sustainable and Decentralized Future" />
      <NavbarEvPages />
      <PageHeaderBasic title="Contact Us" desc="" />
      <FeatureImgContentFourHome />
      <ContactBox />
      <ContactFormTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Contact;
