import type { Metadata } from 'next';
import Header from '../../components/common/Header';
import AnimatedHero from './components/AnimatedHero';
import ProjectShowcase from './components/ProjectShowcase';
import ServicesGrid from './components/ServicesGrid';
import TrustSignals from './components/TrustSignals';
import TestimonialsSection from './components/TestimonialsSection';
import QuoteRequestCTA from './components/QuoteRequestCTA';
import Footer from '../../components/common/Footer';


export const metadata: Metadata = {
  title: 'Six Nine Construction - Building Zimbabwe\'s Future | Premier Construction Company',
  description: 'Zimbabwe\'s premier construction innovator delivering USD 2M+ projects with precision, transparency, and unwavering commitment to excellence. Commercial, residential, civil engineering, and mining infrastructure solutions.',
};

export default function Homepage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AnimatedHero />
        <ProjectShowcase />
        <ServicesGrid />
        <TrustSignals />
        <TestimonialsSection />
        <QuoteRequestCTA />
      </main>
      <Footer />
    </>
  );
}