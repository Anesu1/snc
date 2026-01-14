'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';

interface Service {
  id: number;
  name: string;
  icon: string;
  description: string;
  features: string[];
  link: string;
}

const ServicesGrid = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      name: "Commercial Construction",
      icon: "BuildingOffice2Icon",
      description: "Large-scale commercial projects from retail complexes to office buildings",
      features: ["Retail Centers", "Office Buildings", "Industrial Facilities"],
      link: "/services#commercial"
    },
    {
      id: 2,
      name: "Residential Projects",
      icon: "HomeModernIcon",
      description: "Premium residential developments and custom home construction",
      features: ["Luxury Homes", "Housing Complexes", "Renovations"],
      link: "/services#residential"
    },
    {
      id: 3,
      name: "Civil Engineering",
      icon: "WrenchScrewdriverIcon",
      description: "Comprehensive civil engineering and infrastructure solutions",
      features: ["Road Construction", "Drainage Systems", "Site Development"],
      link: "/services#civil"
    },
    {
      id: 4,
      name: "Mining Infrastructure",
      icon: "CubeIcon",
      description: "Specialized construction for mining operations and facilities",
      features: ["Access Roads", "Processing Plants", "Support Structures"],
      link: "/services#mining"
    },
    {
      id: 5,
      name: "Engineering Consultancy",
      icon: "ClipboardDocumentCheckIcon",
      description: "Expert engineering consultation and project management services",
      features: ["Project Planning", "Technical Design", "Quality Assurance"],
      link: "/services#consultancy"
    },
    {
      id: 6,
      name: "Plant Hire & Earthmoving",
      icon: "TruckIcon",
      description: "Modern equipment fleet through Dreamcast partnership",
      features: ["Excavators", "Bulldozers", "Dump Trucks"],
      link: "/services#plant-hire"
    }
  ];

  if (!isHydrated) {
    return (
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              Comprehensive construction solutions across all sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-card rounded-lg p-6 shadow-construction h-64 animate-pulse">
                <div className="w-12 h-12 bg-muted rounded-lg mb-4"></div>
                <div className="h-6 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-3 bg-muted rounded"></div>
                  <div className="h-3 bg-muted rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary bg-opacity-10 rounded-full mb-4">
            <Icon name="WrenchScrewdriverIcon" size={20} className="text-primary" />
            <span className="text-sm font-headline font-semibold text-primary">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Comprehensive construction solutions across all sectors with proven expertise in delivering complex projects
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.link}
              className="group bg-card rounded-lg p-6 shadow-construction hover:shadow-construction-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:bg-opacity-100 transition-all duration-300">
                  <Icon
                    name={service.icon as any}
                    size={24}
                    className="text-primary group-hover:text-accent-foreground transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-headline font-bold text-primary group-hover:text-accent transition-colors duration-300">
                  {service.name}
                </h3>
              </div>

              <p className="text-foreground mb-4 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2 mb-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm text-textSecondary">
                    <Icon name="CheckCircleIcon" size={16} className="text-success flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center space-x-2 text-accent font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn More</span>
                <Icon name="ArrowRightIcon" size={16} />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-lg shadow-construction hover:shadow-construction-lg transition-all duration-300 hover:scale-105"
          >
            <span>View All Services</span>
            <Icon name="ArrowRightIcon" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;