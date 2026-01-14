import type { Metadata } from 'next';
import Header from '../../components/common/Header';
import ServicesInteractive from './components/ServicesInteractive';
import Footer from '../../components/common/Footer';


export const metadata: Metadata = {
  title: 'Services - Six Nine Construction',
  description: 'Comprehensive construction solutions including residential, commercial, and industrial construction, civil engineering, engineering consultancy, and plant hire services across Zimbabwe.',
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ServicesInteractive />
      </main>
      <Footer />
    </>
  );
}