'use client';

import { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';

interface Certification {
  id: number;
  name: string;
  icon: string;
  description: string;
  verified: boolean;
}

interface Statistic {
  id: number;
  value: string;
  label: string;
  icon: string;
}

const TrustSignals = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const certifications: Certification[] = [
    {
      id: 1,
      name: "ZIMRA Certified",
      icon: "CheckBadgeIcon",
      description: "Tax Clearance ITF263",
      verified: true
    },
    {
      id: 2,
      name: "Incorporated",
      icon: "DocumentCheckIcon",
      description: "Certificate 11284/2019",
      verified: true
    },
    {
      id: 3,
      name: "ISO 9001:2015",
      icon: "ShieldCheckIcon",
      description: "Quality Management",
      verified: true
    },
    {
      id: 4,
      name: "Safety Certified",
      icon: "ExclamationTriangleIcon",
      description: "Zero Incident Record",
      verified: true
    }
  ];

  const statistics: Statistic[] = [
    {
      id: 1,
      value: "USD 2M+",
      label: "Projects Delivered",
      icon: "CurrencyDollarIcon"
    },
    {
      id: 2,
      value: "100%",
      label: "On-Time Completion",
      icon: "ClockIcon"
    },
    {
      id: 3,
      value: "50+",
      label: "Major Projects",
      icon: "BuildingOfficeIcon"
    },
    {
      id: 4,
      value: "9+ Years",
      label: "Industry Experience",
      icon: "CalendarIcon"
    }
  ];

  if (!isHydrated) {
    return (
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Trust & Excellence
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Certified, compliant, and committed to delivering exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white bg-opacity-10 rounded-lg p-6 h-32 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-6 gap-8 h-full">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="clip-hexagon bg-white"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-10 rounded-full mb-4">
            <Icon name="ShieldCheckIcon" size={20} />
            <span className="text-sm font-headline font-semibold">Verified Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
            Trust & Excellence
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Certified, compliant, and committed to delivering exceptional results with full transparency
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={cert.icon as any} size={24} className="text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-headline font-semibold">{cert.name}</h3>
                    {cert.verified && (
                      <Icon name="CheckCircleIcon" size={16} className="text-success" />
                    )}
                  </div>
                  <p className="text-sm opacity-80">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="text-center p-6 bg-white bg-opacity-5 rounded-lg backdrop-blur-sm border border-white border-opacity-10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <Icon name={stat.icon as any} size={32} className="text-accent-foreground" />
              </div>
              <div className="text-4xl font-headline font-bold mb-2">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 text-center">
          <p className="text-lg opacity-90 max-w-3xl mx-auto leading-relaxed">
            Since 2015, Six Nine Construction has maintained an unblemished record of project delivery, regulatory compliance, and client satisfaction. Every project is backed by comprehensive insurance, quality guarantees, and our commitment to building Zimbabwe's future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;