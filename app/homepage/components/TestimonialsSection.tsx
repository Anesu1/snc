'use client';

import { useState, useEffect } from 'react';
import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  rating: number;
  testimonial: string;
  project: string;
}

const TestimonialsSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Tendai Moyo",
    role: "Operations Director",
    company: "Mega Market Zimbabwe",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_138e07571-1763295086046.png",
    alt: "Professional African businessman in navy suit with confident smile in modern office setting",
    rating: 5,
    testimonial: "Six Nine Construction delivered our USD 1.6M retail complex ahead of schedule and within budget. Their attention to detail and commitment to quality is unmatched in Zimbabwe's construction industry.",
    project: "Mega Market Retail Complex"
  },
  {
    id: 2,
    name: "Dr. Chipo Ndlovu",
    role: "Facilities Manager",
    company: "Africa University",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7543eb1-1763298734839.png",
    alt: "Professional African woman with glasses in burgundy blazer smiling in university office",
    rating: 5,
    testimonial: "The campus expansion project was handled with exceptional professionalism. SNC's team understood our unique requirements and delivered a facility that perfectly serves our academic community.",
    project: "Africa University Campus"
  },
  {
    id: 3,
    name: "James Sibanda",
    role: "Project Manager",
    company: "Hillcrest Developments",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1f44f4439-1763293731587.png",
    alt: "Professional African man in gray suit with warm smile in contemporary office environment",
    rating: 5,
    testimonial: "Working with Six Nine Construction on our residential development was a game-changer. Their engineering expertise and transparent communication made the entire process seamless.",
    project: "Hillcrest Residential Development"
  }];


  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isHydrated, testimonials.length]);

  if (!isHydrated) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg text-textSecondary max-w-2xl mx-auto">
              Hear from our satisfied clients
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-card rounded-lg p-8 shadow-construction h-96 animate-pulse">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-muted rounded-full"></div>
              <div className="flex-1">
                <div className="h-6 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded w-2/3"></div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded"></div>
              <div className="h-4 bg-muted rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </section>);

  }

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary bg-opacity-10 rounded-full mb-4">
            <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-primary" />
            <span className="text-sm font-headline font-semibold text-primary">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-primary mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Hear from the clients who trust us with their most important construction projects
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 md:p-12 shadow-construction-lg relative">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Icon name="ChatBubbleLeftRightIcon" size={80} className="text-primary" />
            </div>

            {/* Client Info */}
            <div className="flex items-center space-x-4 mb-6 relative z-10">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-accent ring-opacity-20">
                <AppImage
                  src={activeTestimonial.image}
                  alt={activeTestimonial.alt}
                  className="w-full h-full object-cover" />

              </div>
              <div className="flex-1">
                <h3 className="text-xl font-headline font-bold text-primary">
                  {activeTestimonial.name}
                </h3>
                <p className="text-sm text-textSecondary">
                  {activeTestimonial.role}, {activeTestimonial.company}
                </p>
              </div>
              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(activeTestimonial.rating)].map((_, i) =>
                <Icon key={i} name="StarIcon" size={20} className="text-warning" variant="solid" />
                )}
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg text-foreground leading-relaxed mb-6 relative z-10">
              "{activeTestimonial.testimonial}"
            </blockquote>

            {/* Project Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary bg-opacity-10 rounded-full">
              <Icon name="BuildingOfficeIcon" size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">{activeTestimonial.project}</span>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {testimonials.map((_, index) =>
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all duration-300 ${
              index === activeIndex ?
              'w-8 h-3 bg-accent rounded-full' : 'w-3 h-3 bg-muted rounded-full hover:bg-primary'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;