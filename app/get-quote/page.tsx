import type { Metadata } from 'next';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import QuotePageInteractive from './components/QuotePageInteractive';

export const metadata: Metadata = {
  title: 'Get Quote - Six Nine Construction',
  description:
    'Request a free construction quote for your residential, commercial, or industrial project. Get detailed estimates within 24-48 hours from Zimbabwe\'s premier construction company.',
};

export default function GetQuotePage() {
  return (
    <>
      <Header />
      <QuotePageInteractive />
      <Footer />
    </>
  );
}