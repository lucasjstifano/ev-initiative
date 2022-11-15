import React, { Component } from "react";
import PageHeaderBasic from "@components/common/PageHeaderBasic";
import PageMeta from "@components/common/PageMeta";
import SecVerticalSocial from "@components/vertical-social";
import NavbarEvPages from "@layout/Header/NavbarEvPages";
import Layout from "@layout/Layout";
import FooterOne from "@layout/Footer/FooterOne";
import PrivacyPolicyDetail from "@components/integration/PrivacyPolicyDetail";
import { VerticalSocial } from "src/data";

class PrivacyPolicy extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title="EV Initiative - eMobility Service Provider & Charge Port Operator" />
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
