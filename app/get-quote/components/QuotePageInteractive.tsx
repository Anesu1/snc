'use client';

import { useState, useEffect } from 'react';
import QuoteFormSteps from './QuoteFormSteps';

import ProjectTestimonials from './ProjectTestimonials';
import EmergencyContact from './EmergencyContact';
import Icon from '../../../components/ui/AppIcon';
import TrustSignals from './TrustSignals';

interface QuoteFormData {
  projectType: 'residential' | 'commercial' | 'industrial' | '';
  projectCategory: string;
  projectName: string;
  projectDescription: string;
  location: string;
  siteAddress: string;
  projectScope: string;
  estimatedBudget: string;
  preferredStartDate: string;
  expectedDuration: string;
  urgency: 'standard' | 'urgent' | 'emergency';
  requiresSiteVisit: boolean;
  siteVisitDate: string;
  siteVisitTime: string;
  additionalServices: string[];
  specialRequirements: string;
  clientType: 'individual' | 'business' | 'government';
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  alternatePhone: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
}

const QuotePageInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<QuoteFormData | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleFormSubmit = (data: QuoteFormData) => {
    setSubmittedData(data);
    setIsSubmitted(true);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNewQuote = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="h-20" />
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-muted rounded-lg w-3/4" />
              <div className="h-64 bg-muted rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="h-20" />

      {!isSubmitted ? (
        <>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary to-secondary text-primary-foreground py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
                  <Icon name="DocumentTextIcon" size={18} />
                  <span>Free Project Estimation</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4 leading-tight">
                  Get Your Construction Quote
                </h1>
                <p className="text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
                  Tell us about your project and receive a detailed, transparent quote within 24-48
                  hours. No hidden fees, no surprises—just honest construction expertise.
                </p>
              </div>
            </div>
          </section>

          {/* Trust Signals */}
          <section className="py-8 bg-muted">
            <div className="container mx-auto px-4">
              <TrustSignals />
            </div>
          </section>

          {/* Quote Form */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <QuoteFormSteps onSubmit={handleFormSubmit} />
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-12 bg-muted">
            <div className="container mx-auto px-4">
              <ProjectTestimonials />
            </div>
          </section>

          {/* Emergency Contact */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <EmergencyContact />
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-lg p-8 md:p-12 shadow-construction text-center">
                <div className="w-20 h-20 rounded-full bg-success bg-opacity-10 flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircleIcon" size={48} className="text-success" />
                </div>

                <h2 className="text-3xl font-headline font-bold text-foreground mb-4">
                  Quote Request Submitted Successfully!
                </h2>

                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Thank you for choosing Six Nine Construction. We have received your project
                  details and our team will review your requirements carefully.
                </p>

                <div className="bg-muted rounded-lg p-6 mb-8 text-left">
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-4">
                    What Happens Next?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-headline font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Initial Review</p>
                        <p className="text-sm text-muted-foreground">
                          Our team will review your project details within 2-4 hours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-headline font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Detailed Assessment</p>
                        <p className="text-sm text-muted-foreground">
                          We'll prepare a comprehensive quote with cost breakdown
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-headline font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-foreground">Quote Delivery</p>
                        <p className="text-sm text-muted-foreground">
                          Receive your detailed quote via {submittedData?.preferredContact} within
                          24-48 hours
                        </p>
                      </div>
                    </div>
                    {submittedData?.requiresSiteVisit && (
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-headline font-bold">
                          4
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Site Visit Scheduled</p>
                          <p className="text-sm text-muted-foreground">
                            We'll confirm your site visit on {submittedData.siteVisitDate} at{' '}
                            {submittedData.siteVisitTime}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-primary bg-opacity-5 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-headline font-semibold text-foreground mb-3">
                    Your Reference Number
                  </h3>
                  <p className="text-3xl font-mono font-bold text-primary mb-2">
                    SNC-{new Date().getFullYear()}-
                    {Math.floor(Math.random() * 10000)
                      .toString()
                      .padStart(4, '0')}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Please save this reference number for future correspondence
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={handleNewQuote}
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-headline font-semibold hover:shadow-construction-lg transition-all duration-300"
                  >
                    <Icon name="PlusIcon" size={20} />
                    <span>Submit Another Quote</span>
                  </button>
                  <a
                    href="/homepage"
                    className="inline-flex items-center justify-center space-x-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-headline font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Icon name="HomeIcon" size={20} />
                    <span>Return to Homepage</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default QuotePageInteractive;