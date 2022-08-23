import React, { Component } from "react";
import PageMeta from "../../components/common/PageMeta";
import SecVerticalSocial from "../../components/vertical-social";
import { VerticalSocial } from "../../data";
import FooterOne from "../../layout/Footer/FooterOne";
import NavbarEvPages from "../../layout/Header/NavbarEvPages";
import Layout from "../../layout/Layout";

class iFrame extends Component {
  render() {
    return (
      <Layout>
        <PageMeta title="EV Initiative - Driving a Sustainable and Decentralized Future" />
        <NavbarEvPages />
        <script type="module" src="x-frame-bypass.js"></script>
        <iframe
          src="https://search.google.com/local/writereview?placeid=ChIJ9WHZVIRZ04kRjwSwnzHhEnc&source=g.page.m.rc._&laa=merchant-web-dashboard-card"
          width={640}
          height={640}
          title="Iframe Example"
          target="_parent"
          className="shadow"
        ></iframe>
      </Layout>
    );
  }
}

export default iFrame;
