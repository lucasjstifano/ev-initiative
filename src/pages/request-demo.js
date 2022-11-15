import React from "react";
import PageMeta from "@components/common/PageMeta";
import ContactsForm from "@components/contact/ContactsForm";
import FooterSocial from "@layout/Footer/FooterSocial";
import Layout from "@layout/Layout";

const RequestDemo = () => {
  return (
    <Layout>
      <PageMeta title="Request for Deomo - Software &amp; IT Solutions HTML Template" />
      <section className="sign-up-in-section bg-crypto ptb-120">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <ContactsForm />
          </div>
        </div>
      </section>
      <FooterSocial />
    </Layout>
  );
};

export default RequestDemo;
