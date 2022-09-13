import React, { Component } from "react";
import AboutPage from "../../components/about/AboutPage";
import PageHeaderBasic from "../../components/common/PageHeaderBasic";
import PageMeta from "../../components/common/PageMeta";
import TeamEV from "../../components/team/TeamEV";
import SecVerticalSocial from "../../components/vertical-social";
import { VerticalSocial } from "../../data";
import FooterGlobal from "../../layout/Footer/FooterGlobal";
import FooterOne from "../../layout/Footer/FooterOne";
import NavbarEvPages from "../../layout/Header/NavbarEvPages";
import Layout from "../../layout/Layout";

class AboutUs extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title="EV Initiative - eMobility Service Provider & Charge Port Operator" />
        <SecVerticalSocial data={VerticalSocial} />
        <NavbarEvPages />
        <PageHeaderBasic title="About Us" desc="" />
        <AboutPage />
        <TeamEV />
        <FooterOne footerLight />
      </Layout>
    );
  }
}

export default AboutUs;
