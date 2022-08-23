import React from 'react';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import PageMeta from '../../components/common/PageMeta';
import FooterOne from '../../layout/Footer/FooterOne';
import CtaTwo from '../../components/cta/CtaTwo';
import OpenJobs from '../../components/career/OpenJobs';
import CareerPromo from '../../components/career/CareerPromo';
import PageHeader from '../../components/common/PageHeader';

const Career = () => {
  return (
    <Layout>
      <PageMeta title='Career - Software &amp; IT Solutions HTML Template' />
      <Navbar />
      <PageHeader
        title='Career'
        desc='Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise.'
      />
      <OpenJobs />
      <CareerPromo />
      <CtaTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Career;
