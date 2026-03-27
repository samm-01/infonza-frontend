import Navbar from "../components/navbar";
import HeroHome from "../components/hero-home";
import TrustBar from "../components/trust-bar";
import ServicesOverview from "../components/services-overview";
import ProcessSection from "../components/process-section";
import CaseStudiesPreview from "../components/case-studies-preview";
import Testimonials from "../components/testimonials";
import CTABanner from "../components/cta-banner";
import Footer from "../components/footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroHome />
        <TrustBar />
        <ServicesOverview />
        <ProcessSection />
        <CaseStudiesPreview />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
