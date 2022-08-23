import React, { Component } from "react";
import PageHeaderBasic from "../components/common/PageHeaderBasic";
import PageMeta from "../components/common/PageMeta";
import SecVerticalSocial from "../components/vertical-social";
import { VerticalSocial } from "../data";
import NavbarEvPages from "../layout/Header/NavbarEvPages";
import Layout from "../layout/Layout";
import FooterOne from "../layout/Footer/FooterOne";
import PrivacyPolicyDetail from "../components/integration/PrivacyPolicyDetail";

class PrivacyPolicy extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title="EV Initiative - Driving a Sustainable and Decentralized Future" />
        <SecVerticalSocial data={VerticalSocial} />
        <NavbarEvPages />
        <PageHeaderBasic title="Privacy Policy" desc="" />
        <PrivacyPolicyDetail />
        <FooterOne footerLight />
      </Layout>
    );
  }
}

export default PrivacyPolicy;
