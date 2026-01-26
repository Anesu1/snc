"use client"
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-lg leading-relaxed mb-4">
          At Six Nine Construction, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
        <p className="text-textSecondary mb-4">
          We may collect personal information such as your name, email address, phone number, and any other details you provide when you contact us or use our services.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-textSecondary mb-4">
          Your information is used to provide and improve our services, communicate with you, and comply with legal obligations. We do not share your information with third parties without your consent.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
        <p className="text-textSecondary mb-4">
          You have the right to access, update, or delete your personal information. Please contact us if you have any concerns or requests regarding your data.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="text-textSecondary mb-4">
          If you have any questions about this Privacy Policy, please contact us at support@sixnineconstruction.com.
        </p>
      </main>
      <Footer />
    </div>
  );
}