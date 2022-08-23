import React from "react";
import PageMeta from "../../components/common/PageMeta";
import PasswordResetScreen from "../../components/onboard/PasswordResetScreen";
import Layout from "../../layout/Layout";

const PasswordReset = () => {
  return (
    <Layout>
      <PageMeta title="EV Initiative - Driving a Sustainable and Decentralized Future" />
      <PasswordResetScreen />
    </Layout>
  );
};

export default PasswordReset;
