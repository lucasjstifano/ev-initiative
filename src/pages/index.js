import Layout from "@layout/Layout";
import AboutHome from "@components/about/AboutHome";
import ContactFormEV from "@components/contact/ContactFormEV";
import CtaEv from "@components/cta/CtaEv";
import CustomerLogoSlider from "@components/customer/CustomerLogoSlider";
import FaqTwo from "@components/faqs/FaqTwo";
import FeatureImgContentFourHome from "@components/feature-img-content/FeatureImgContentFourHome";
import FeatureFiveEV from "@components/features/FeatureFiveEV";
import FeatureImgEV from "@components/features/FeatureImgEV";
import PromoTwoEV from "@components/promo/PromoTwoEV";
import SecVerticalSocial from "@components/vertical-social";
import FooterGlobal from "@layout/Footer/FooterGlobal";
import NavbarEV from "@layout/Header/NavbarEV";
import { VerticalSocial } from "src/data";
import HeroEV from "@components/hero/hero-ev";

export default function Home() {
  return (
    <Layout>
      <SecVerticalSocial data={VerticalSocial} />
      <NavbarEV navDark />
      <HeroEV />
      <CustomerLogoSlider />
      <AboutHome />
      <PromoTwoEV />
      <FeatureImgContentFourHome />
      <FeatureImgEV />
      <FeatureFiveEV />
      <CtaEv />
      <ContactFormEV />
      <FaqTwo />
      <FooterGlobal />
    </Layout>
  );
}
