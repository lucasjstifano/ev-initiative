import React, { Component } from "react";
import PageMeta from "@components/common/PageMeta";
import SecVerticalSocial from "@components/vertical-social";
import FooterGlobalCrypto from "@layout/Footer/FooterGlobalCrypto";
import NavbarEV from "@layout/Header/NavbarEV";
import Layout from "@layout/Layout";
import { VerticalSocial } from "src/data";
import HeroCrypto from "@components/hero/hero-crypto";

class HomeCrypto extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title="EV Initiative - eMobility Service Provider & Charge Port Operator" />
        <SecVerticalSocial data={VerticalSocial} />
        <NavbarEV navDark />
        <HeroCrypto />
        {/* <AboutCrypto /> */}
        {/* <FeatureImgContentWhitepaper /> */}
        {/* <FeatureImgFounders /> */}
        {/* <TeamCrypto /> */}
        {/* <SecFAQTimeline FQAInfo={FQAInfo} DocElementTitle={DocElementTitle} /> */}
        {/* <CampaignRolloutOne cardDark /> */}
        {/* <SecOurRoadmap data={timelineInfo} />
        <TabFaq /> */}
        <FooterGlobalCrypto />
      </Layout>
    );
  }
}

export default HomeCrypto;
