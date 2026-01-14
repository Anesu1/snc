import type { Metadata } from 'next';


import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import AboutInteractive from './components/AboutInteractive';

export const metadata: Metadata = {
  title: 'About Us - Six Nine Construction',
  description: 'Learn about Six Nine Construction\'s founding story, vision, mission, leadership team, company culture, and certifications. Building Zimbabwe\'s future since 2019 with proven track record and unwavering commitment to excellence.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <AboutInteractive />
      </main>
      <Footer />
    </>
  );
}