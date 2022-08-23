import React, { Component } from "react";
import PageHeaderBasic from "../../components/common/PageHeaderBasic";
import PageMeta from "../../components/common/PageMeta";
import ContactFormEV from "../../components/contact/ContactFormEV";
import BenefitsEV from "../../components/services/BenefitsEV";
import SecVerticalSocial from "../../components/vertical-social";
import { VerticalSocial } from "../../data";
import FooterOne from "../../layout/Footer/FooterOne";
import NavbarEvPages from "../../layout/Header/NavbarEvPages";
import Layout from "../../layout/Layout";

class SiteHosts extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title="EV Initiative - Driving a Sustainable and Decentralized Future" />
        <SecVerticalSocial data={VerticalSocial} />
        <NavbarEvPages />
        <PageHeaderBasic title="Site Hosts" desc="" />
        <BenefitsEV />
        <ContactFormEV />
        <FooterOne footerLight />
      </Layout>
    );
  }
}

export default SiteHosts;