'use client';

import { useState } from 'react';
import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  projectName: string;
  rating: number;
  testimonial: string;
  image: string;
  alt: string;
  projectValue: string;
}

interface ClientTestimonialsProps {
  testimonials: Testimonial[];
}

export default function ClientTestimonials({ testimonials }: ClientTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-secondary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 clip-hexagon bg-white"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 clip-hexagon bg-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-4">
            <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" className="text-accent-foreground" />
            <span className="text-sm font-headline font-semibold text-accent-foreground">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            What Our Clients Say About Us
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Real feedback from satisfied clients who trusted us with their construction projects and
            experienced our commitment to excellence firsthand.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-card text-foreground rounded-lg shadow-construction-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-construction">
                  <AppImage
                    src={activeTestimonial.image}
                    alt={activeTestimonial.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Icon
                      key={index}
                      name="StarIcon"
                      size={20}
                      variant="solid"
                      className={index < activeTestimonial.rating ? 'text-warning' : 'text-muted'}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                  "{activeTestimonial.testimonial}"
                </blockquote>

                {/* Client Info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="text-lg font-headline font-bold text-foreground">
                      {activeTestimonial.clientName}
                    </div>
                    <div className="text-sm text-textSecondary">
                      {activeTestimonial.clientRole}, {activeTestimonial.company}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-xs text-textSecondary">Project</div>
                      <div className="text-sm font-medium text-foreground">
                        {activeTestimonial.projectName}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-textSecondary">Value</div>
                      <div className="text-sm font-headline font-bold text-accent">
                        {activeTestimonial.projectValue}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              <button
                onClick={prevTestimonial}
                className="flex items-center space-x-2 px-4 py-2 rounded-md bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <Icon name="ChevronLeftIcon" size={20} />
                <span className="hidden md:inline">Previous</span>
              </button>

              {/* Dots */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex ? 'bg-primary w-8' : 'bg-muted'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex items-center space-x-2 px-4 py-2 rounded-md bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Next testimonial"
              >
                <span className="hidden md:inline">Next</span>
                <Icon name="ChevronRightIcon" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}