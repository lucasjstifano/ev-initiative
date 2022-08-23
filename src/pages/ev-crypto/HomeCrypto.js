import React, { Component } from "react";
import PageMeta from "../../components/common/PageMeta";
import SecVerticalSocial from "../../components/vertical-social";
import { VerticalSocial } from "../../data";
import FooterGlobal from "../../layout/Footer/FooterGlobal";
import NavbarEV from "../../layout/Header/NavbarEV";
import Layout from "../../layout/Layout";
import HeroCrypto from "./HeroCrypto";

class HomeCrypto extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title="EV Initiative - Driving a Sustainable and Decentralized Future" />
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
        <FooterGlobal />
      </Layout>
    );
  }
}

export default HomeCrypto;
