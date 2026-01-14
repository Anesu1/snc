'use client';

import { useState } from 'react';
import Icon from '../../../components/ui/AppIcon';

interface Certification {
  title: string;
  number: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  status: string;
  description: string;
  icon: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-success text-success-foreground';
      case 'pending':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent display of regulatory compliance, safety protocols, and quality assurance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-construction hover:shadow-construction-lg transition-all duration-300 overflow-hidden"
            >
              <div className="bg-primary p-6 text-white">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white bg-opacity-20 flex items-center justify-center">
                    <Icon name={cert.icon as any} size={24} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(cert.status)}`}>
                    {cert.status}
                  </span>
                </div>
                <h3 className="text-xl font-headline font-bold mb-2">{cert.title}</h3>
                <p className="text-sm opacity-90">{cert.issuer}</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Certificate Number:</span>
                    <span className="font-mono font-semibold text-foreground">{cert.number}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Issue Date:</span>
                    <span className="font-semibold text-foreground">{cert.issueDate}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Expiry Date:</span>
                    <span className="font-semibold text-foreground">{cert.expiryDate}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {cert.description}
                </p>
                
                {selectedCert === index && (
                  <div className="border-t border-border pt-4 animate-in fade-in duration-300">
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                  </div>
                )}
                
                <button
                  onClick={() => setSelectedCert(selectedCert === index ? null : index)}
                  className="w-full py-2 px-4 bg-muted hover:bg-primary hover:text-white rounded-md text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Icon name="DocumentTextIcon" size={16} />
                  {selectedCert === index ? 'Show Less' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-card p-8 rounded-lg shadow-construction">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-success bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                <Icon name="ShieldCheckIcon" size={32} className="text-success" />
              </div>
              <h4 className="text-lg font-headline font-bold text-foreground mb-2">
                Safety Protocols
              </h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive safety measures on every project site
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckBadgeIcon" size={32} className="text-primary" />
              </div>
              <h4 className="text-lg font-headline font-bold text-foreground mb-2">
                Quality Assurance
              </h4>
              <p className="text-sm text-muted-foreground">
                Rigorous quality control at every construction phase
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                <Icon name="DocumentCheckIcon" size={32} className="text-accent" />
              </div>
              <h4 className="text-lg font-headline font-bold text-foreground mb-2">
                Insurance & Bonding
              </h4>
              <p className="text-sm text-muted-foreground">
                Full coverage and bonding for client protection
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-warning bg-opacity-10 flex items-center justify-center mx-auto mb-4">
                <Icon name="ClipboardDocumentCheckIcon" size={32} className="text-warning" />
              </div>
              <h4 className="text-lg font-headline font-bold text-foreground mb-2">
                Regulatory Compliance
              </h4>
              <p className="text-sm text-muted-foreground">
                Full adherence to Zimbabwe construction regulations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;