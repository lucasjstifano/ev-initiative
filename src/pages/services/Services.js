import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import CtaTwo from '../../components/cta/CtaTwo';
import FeatureTwo from '../../components/features/FeatureTwo';
import TestimonialTwo from '../../components/testimonial/TestimonialTwo';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';

const Services = () => {
  return (
    <Layout>
      <Navbar classOption='navbar-light' />
      <PageHeader
        title='We are Development Experts'
        desc='Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise.'
      />
      <FeatureTwo />
      <TestimonialTwo bgWhite/>
      <CtaTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Services;
