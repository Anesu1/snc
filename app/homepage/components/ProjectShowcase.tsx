'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface Project {
  id: number;
  name: string;
  value: string;
  category: string;
  location: string;
  completion: string;
  image: string;
  alt: string;
  description: string;
}

const ProjectShowcase = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const projects: Project[] = [
  {
    id: 1,
    name: "Surrey Deli & Group Promotion",
    value: "",
    category: "",
    location: "Mutare Depot",
    completion: "2024",
    image: "/images/surrey.webp",
    alt: "Modern multi-story retail complex with glass facade and steel framework under bright blue sky",
    description: "State-of-the-art retail facility with advanced structural engineering and modern amenities"
  },
  {
    id: 2,
    name: " Timeshares Troutbeck Property Showcase",
    value: "",
    category: "",
    location: "",
    completion: "",
    image: "/images/time.webp",
    alt: "Contemporary university building with red brick exterior and large windows surrounded by green landscaping",
    description: "Multi-purpose academic facility with lecture halls, laboratories, and student amenities"
  },
  {
    id: 3,
    name: "Late 2023/Early 2024 Interior & Detail Shots",
    value: "",
    category: "",
    location: "",
    completion: "2024",
    image: "/images/late.webp",
    alt: "Luxury residential homes with modern architecture featuring white walls and large glass windows",
    description: "Premium residential complex with 24 luxury units and community facilities"
  },
  {
    id: 4,
    name: "Mid-2024 General Updates",
    value: "",
    category: "",
    location: "",
    completion: "2024",
    image: "/images/mid.webp",
    alt: "Industrial facility with large metal silos and processing equipment against cloudy sky",
    description: "Complete industrial facility with processing equipment and storage infrastructure"
  },
  {
    id: 5,
    name: "Early 2022 Premises Documentation",
    value: "",
    category: "",
    location: "",
    completion: "2022",
    image: "/images/early.webp",
    alt: "Heavy construction equipment and earthmoving machinery at mining site with excavated terrain",
    description: "Comprehensive mining infrastructure including access roads and processing facilities"
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated, projects.length]);

  const handleProjectClick = (index: number) => {
    setActiveIndex(index);
  };

  if (!isHydrated) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              Showcasing excellence in construction across Zimbabwe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) =>
            <div key={i} className="bg-card rounded-lg overflow-hidden shadow-construction h-96 animate-pulse">
                <div className="h-64 bg-muted"></div>
                <div className="p-6">
                  <div className="h-6 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>);

  }

  const activeProject = projects[activeIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary bg-opacity-10 rounded-full mb-4">
            <Icon name="RectangleStackIcon" size={20} className="text-primary" />
            <span className="text-sm font-headline font-semibold text-primary">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Showcasing excellence in construction across Zimbabwe with multi-million dollar projects delivered on time and within budget
          </p>
        </div>

        {/* Main Project Display */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Project Image */}
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-construction-lg group">
              <AppImage
                key={activeProject.image} // Add a key to force re-render when the image changes
                src={activeProject.image}
                alt={activeProject.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-accent rounded-full mb-2">
                  <span className="text-sm font-headline font-semibold text-accent-foreground">
                    {activeProject.value}
                  </span>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-secondary bg-opacity-10 rounded-full mb-3">
                  <Icon name="BuildingOfficeIcon" size={16} className="text-secondary" />
                  <span className="text-sm font-medium text-secondary">{activeProject.category}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                  {activeProject.name}
                </h3>
                <p className="text-lg text-foreground mb-6">
                  {activeProject.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPinIcon" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-textSecondary">Location</div>
                    <div className="font-medium text-foreground">{activeProject.location}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CalendarIcon" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-textSecondary">Completed</div>
                    <div className="font-medium text-foreground">{activeProject.completion}</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-4">
               
                <Link
                  href="/get-quote"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-md font-headline font-semibold shadow-construction hover:shadow-construction-lg transition-all duration-300 hover:scale-105">

                  <Icon name="DocumentTextIcon" size={20} />
                  <span>Get Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="relative" ref={containerRef}>
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {projects.map((project, index) =>
            <button
              key={project.id}
              onClick={() => handleProjectClick(index)}
              className={`flex-shrink-0 w-64 rounded-lg overflow-hidden transition-all duration-300 ${
              index === activeIndex ?
              'ring-4 ring-accent shadow-construction-lg scale-105' :
              'opacity-60 hover:opacity-100 shadow-construction'}`
              }>

                <div className="relative h-40">
                  <AppImage
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover" />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="text-white font-headline font-semibold text-sm mb-1">
                      {project.name}
                    </div>
                    <div className="text-white text-xs opacity-90">{project.value}</div>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default ProjectShowcase;