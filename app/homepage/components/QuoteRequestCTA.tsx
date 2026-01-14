'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';

interface QuickStat {
  id: number;
  label: string;
  value: string;
}

const QuoteRequestCTA = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const quickStats: QuickStat[] = [
    { id: 1, label: "Response Time", value: "24 Hours" },
    { id: 2, label: "Free Consultation", value: "Always" },
    { id: 3, label: "Detailed Estimates", value: "Guaranteed" }
  ];

  if (!isHydrated) {
    return (
      <section className="py-20 bg-gradient-to-br from-secondary to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a detailed quote within 24 hours
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-primary text-primary-foreground relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse-subtle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-20 rounded-full mb-6 backdrop-blur-sm">
            <Icon name="SparklesIcon" size={20} />
            <span className="text-sm font-headline font-semibold">Free Project Consultation</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>

          {/* Subheading */}
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Get a detailed, transparent quote within 24 hours. No obligations, no hidden costs—just honest construction expertise.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {quickStats.map((stat) => (
              <div key={stat.id} className="flex items-center space-x-2">
                <Icon name="CheckCircleIcon" size={20} className="text-success" />
                <span className="text-sm">
                  <span className="font-semibold">{stat.label}:</span> {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <Link
              href="/get-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-md font-headline font-semibold text-lg shadow-construction-lg hover:shadow-construction transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center animate-pulse-subtle"
            >
              <Icon name="DocumentTextIcon" size={24} />
              <span>Get Free Quote Now</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-md font-headline font-semibold text-lg shadow-construction hover:shadow-construction-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Icon name="RectangleStackIcon" size={24} />
              <span>View Our Work</span>
            </Link>
          </div>

          {/* Contact Options */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm">
            <a
              href="tel:+263123456789"
              className="flex items-center space-x-2 hover:text-accent transition-colors duration-200"
            >
              <Icon name="PhoneIcon" size={18} />
              <span>+263 123 456 789</span>
            </a>
            <a
              href="mailto:info@sncconstruction.co.zw"
              className="flex items-center space-x-2 hover:text-accent transition-colors duration-200"
            >
              <Icon name="EnvelopeIcon" size={18} />
              <span>info@sncconstruction.co.zw</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestCTA;