'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    location: string;
    value: string;
    duration: string;
    completionDate: string;
    status: string;
    image: string;
    alt: string;
    client: string;
    description: string;
    highlights: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      commercial: 'BuildingOffice2Icon',
      residential: 'HomeIcon',
      industrial: 'WrenchScrewdriverIcon',
      civil: 'CogIcon',
    };
    return icons[category.toLowerCase()] || 'RectangleStackIcon';
  };

  const getStatusColor = (status: string) => {
    return status.toLowerCase() === 'completed' ? 'text-success' : 'text-warning';
  };

  return (
    <div
      className="bg-card rounded-lg overflow-hidden shadow-construction hover:shadow-construction-lg transition-all duration-500 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={project.image}
          alt={project.alt}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60"></div>

        {/* Status Badge */}
       

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            <Icon name={getCategoryIcon(project.category) as any} size={14} />
            <span>{project.category}</span>
          </div>
        </div>

        {/* Value Badge */}
        
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-headline font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Client */}
        <p className="text-sm text-textSecondary mb-3">
          <span className="font-medium">Client:</span> {project.client}
        </p>

        {/* Description */}
        <p className="text-sm text-foreground opacity-80 mb-4 line-clamp-2">{project.description}</p>

        {/* Project Details Grid */}
       

        {/* Highlights */}
        <div className="mb-4">
          <div className="text-xs text-textSecondary mb-2 font-medium">Key Highlights</div>
          <div className="flex flex-wrap gap-2">
            {project.highlights.slice(0, 2).map((highlight, index) => (
              <div
                key={index}
                className="flex items-center space-x-1 px-2 py-1 bg-muted rounded text-xs text-foreground"
              >
                <Icon name="CheckIcon" size={12} className="text-success" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </div>
  );
}