"use client"
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-muted text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <button
          onClick={() => window.history.back()}
          className="mb-6 text-accent font-semibold hover:underline"
        >
          &larr; Back
        </button>
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to Six Nine Construction. By using our website and services, you agree to the following terms and conditions. Please read them carefully.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Our Services</h2>
        <p className="text-textSecondary mb-4">
          Our services are provided for lawful purposes only. You agree not to use our services for any illegal or unauthorized activities.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
        <p className="text-textSecondary mb-4">
          All content on this website, including text, images, and designs, is the property of Six Nine Construction and is protected by copyright laws. Unauthorized use is prohibited.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-textSecondary mb-4">
          Six Nine Construction is not liable for any damages resulting from the use of our website or services. This includes direct, indirect, incidental, and consequential damages.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
        <p className="text-textSecondary mb-4">
          We reserve the right to update these terms at any time. Continued use of our services constitutes your acceptance of the updated terms.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-textSecondary mb-4">
          If you have any questions about these Terms of Service, please contact us at support@sixnineconstruction.com.
        </p>
      </main>
      <Footer />
    </div>
  );
}