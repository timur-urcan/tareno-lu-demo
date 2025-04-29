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

export default function LangPage({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  return (
    <main>
      <Navbar lang={lang} />
      <HeroSection lang={lang} />
      <AnimateOnScroll animation="fade-up">
        <AboutSection lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <AssetManagementSection lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <TestimonialsSection lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <ServicesSection lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <CaseStudiesSection lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <NewsInsightsSection lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <NewsletterCTA lang={lang} />
      </AnimateOnScroll>
      <AnimateOnScroll animation="fade-up">
        <ContactSection lang={lang} />
      </AnimateOnScroll>
      <Footer lang={lang} />
      <ChatbotSimulation lang={lang} />
    </main>
  );
}
