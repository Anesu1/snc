'use client';

import { useState } from 'react';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface TeamMember {
  name: string;
  position: string;
  expertise: string;
  bio: string;
  image: string;
  imageAlt: string;
  credentials: string[];
  email: string;
  phone: string;
}

interface LeadershipTeamSectionProps {
  teamMembers: TeamMember[];
}

const LeadershipTeamSection = ({ teamMembers }: LeadershipTeamSectionProps) => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Leadership Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the experts driving Zimbabwe's construction excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-construction hover:shadow-construction-lg transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedMember(selectedMember === index ? null : index)}
            >
              <div className="relative h-80 overflow-hidden">
                <AppImage
                  src={member.image}
                  alt={member.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-headline font-bold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.position}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Icon name="BriefcaseIcon" size={20} className="text-accent" />
                  <span className="text-sm font-semibold text-primary">{member.expertise}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {member.bio}
                </p>
                
                {selectedMember === index && (
                  <div className="space-y-4 animate-in fade-in duration-300">
                    <div className="border-t border-border pt-4">
                      <h4 className="text-sm font-headline font-semibold text-foreground mb-2">
                        Professional Credentials
                      </h4>
                      <ul className="space-y-2">
                        {member.credentials.map((credential, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Icon name="CheckCircleIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                            <span>{credential}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t border-border pt-4 space-y-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Icon name="EnvelopeIcon" size={16} />
                        <span>{member.email}</span>
                      </a>
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors"
                      >
                        <Icon name="PhoneIcon" size={16} />
                        <span>{member.phone}</span>
                      </a>
                    </div>
                  </div>
                )}
                
                <button
                  className="mt-4 text-sm font-semibold text-accent hover:text-primary transition-colors flex items-center gap-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMember(selectedMember === index ? null : index);
                  }}
                >
                  {selectedMember === index ? 'Show Less' : 'View Full Profile'}
                  <Icon
                    name="ChevronDownIcon"
                    size={16}
                    className={`transition-transform duration-300 ${
                      selectedMember === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeamSection;