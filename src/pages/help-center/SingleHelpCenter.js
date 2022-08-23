import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import SingleSupportDetails from '../../components/help-center/SingleSupportDetails';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';

const SingleHelpCenter = () => {
  return (
    <Layout>
      <PageMeta />
      <Navbar />
      <SingleSupportDetails />
    </Layout>
  );
};

export default SingleHelpCenter;
