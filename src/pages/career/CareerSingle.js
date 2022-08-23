import React from 'react';
import JobDetails from '../../components/career/JobDetails';
import JobHeader from '../../components/career/JobHeader';
import RelatedJobs from '../../components/career/RelatedJobs';
import PageMeta from '../../components/common/PageMeta';
import CtaTwo from '../../components/cta/CtaTwo';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';

const CareerSingle = () => {
  return (
    <Layout>
      <PageMeta />
      <Navbar />
      <JobHeader />
      <JobDetails />
      <RelatedJobs />
      <CtaTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default CareerSingle;
