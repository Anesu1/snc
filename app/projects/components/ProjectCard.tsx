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
        <div className="absolute top-4 right-4">
          <div
            className={`flex items-center space-x-1 px-3 py-1 rounded-full bg-card text-xs font-semibold ${getStatusColor(
              project.status
            )}`}
          >
            <Icon
              name={project.status.toLowerCase() === 'completed' ? 'CheckCircleIcon' : 'ClockIcon'}
              size={14}
              variant="solid"
            />
            <span>{project.status}</span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
            <Icon name={getCategoryIcon(project.category) as any} size={14} />
            <span>{project.category}</span>
          </div>
        </div>

        {/* Value Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center space-x-1 px-3 py-2 rounded-md bg-card text-accent text-sm font-headline font-bold">
            <Icon name="CurrencyDollarIcon" size={16} variant="solid" />
            <span>{project.value}</span>
          </div>
        </div>
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
        <div className="grid grid-cols-2 gap-3 mb-4 pb-4 border-b border-border">
          <div className="flex items-start space-x-2">
            <Icon name="MapPinIcon" size={16} className="text-textSecondary mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs text-textSecondary">Location</div>
              <div className="text-sm font-medium text-foreground">{project.location}</div>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Icon name="CalendarIcon" size={16} className="text-textSecondary mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-xs text-textSecondary">Duration</div>
              <div className="text-sm font-medium text-foreground">{project.duration}</div>
            </div>
          </div>
        </div>

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

        {/* View Details Button */}
        <Link
          href={`/projects/${project.id}`}
          className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-sm hover:bg-secondary transition-all duration-300 group-hover:shadow-construction"
        >
          <span>View Case Study</span>
          <Icon
            name="ArrowRightIcon"
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}