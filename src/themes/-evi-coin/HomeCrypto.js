import React, { Component } from "react";
import AboutCrypto from "../../components/about/AboutCrypto";
import PageMeta from "../../components/common/PageMeta";
import FeatureImgContentWhitepaper from "../../components/feature-img-content/FeatureImgContentWhitepaper";
import CampaignRolloutOne from "../../components/features/CampaignRolloutOne";
import FeatureImgFounders from "../../components/features/FeatureImgFounders";
import TabFaq from "../../components/tabs/TabFaq";
import TeamCrypto from "../../components/team/TeamCrypto";
import SecVerticalSocial from "../../components/vertical-social";
import {
  VerticalSocial,
  FQAInfo,
  DocElementTitle,
  timelineInfo,
} from "../../data";
import FooterCrypto from "../../layout/Footer/FooterCrypto";
import NavbarCrypto from "../../layout/Header/NavbarCrypto";
import Layout from "../../layout/Layout";
import HeroCrypto from "./HeroCrypto";
import SecFAQTimeline from "../../components/SecFAQ_Timeline";
import SecOurRoadmap from "../../components/SecOurRoadmap";
import FooterGlobal from "../../layout/Footer/FooterGlobal";
import FooterSmall from "../../layout/Footer/FooterSmall";
import NavbarEV from "../../layout/Header/NavbarEV";

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
