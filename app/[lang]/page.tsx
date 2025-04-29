import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import AssetManagementSection from '../../components/AssetManagementSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import ServicesSection from '../../components/ServicesSection';
import CaseStudiesSection from '../../components/CaseStudiesSection';
import NewsInsightsSection from '../../components/NewsInsightsSection';
import NewsletterCTA from '../../components/NewsletterCTA';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/Footer';
import AnimateOnScroll from '../../components/AnimateOnScroll';
import ChatbotSimulation from '../../components/ChatbotSimulation';

interface PageProps {
  params: {
    lang: string;
  };
}

export default async function LangPage({ params }: PageProps) {
  const lang = params.lang;
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AnimateOnScroll animation="fade-up">
        <AboutSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <AssetManagementSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <TestimonialsSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <ServicesSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <CaseStudiesSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <NewsInsightsSection />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <NewsletterCTA />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <ContactSection />
      </AnimateOnScroll>
      <Footer />
      <ChatbotSimulation />
    </main>
  );
}
