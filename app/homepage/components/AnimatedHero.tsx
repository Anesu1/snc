'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';

interface ValueProposition {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
}

const AnimatedHero = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const valuePropositions: ValueProposition[] = [
    {
      id: 1,
      title: "Building Zimbabwe's Future",
      subtitle: "Premier construction innovator delivering USD 2M+ projects with precision",
      badge: "Market Leader"
    },
    {
      id: 2,
      title: "Engineering Excellence",
      subtitle: "Fusion of Zimbabwean craftsmanship and cutting-edge innovation",
      badge: "ISO Certified"
    },
    {
      id: 3,
      title: "Trust & Reliability",
      subtitle: "On-time delivery, within budget, every single project since 2015",
      badge: "100% Success Rate"
    }
  ];

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % valuePropositions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated, valuePropositions.length]);

  if (!isHydrated) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent rounded-full mb-6">
              <span className="text-sm font-headline font-semibold">Market Leader</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 leading-tight">
              Building Zimbabwe's Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Premier construction innovator delivering USD 2M+ projects with precision
            </p>
          </div>
        </div>
      </section>
    );
  }

  const currentProposition = valuePropositions[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary animate-pulse-subtle"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-20 animate-pulse-subtle"></div>
      </div>

      {/* Hexagonal Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-8 h-full">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="clip-hexagon bg-white"></div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Animated Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent rounded-full mb-6 shadow-construction animate-pulse-subtle">
            <Icon name="CheckBadgeIcon" size={20} />
            <span className="text-sm font-headline font-semibold">{currentProposition.badge}</span>
          </div>

          {/* Main Heading with Animation */}
          <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6 leading-tight transition-all duration-700 ease-in-out">
            {currentProposition.title}
          </h1>

          {/* Subtitle with Animation */}
          <p className="text-xl md:text-2xl mb-8 opacity-90 transition-all duration-700 ease-in-out">
            {currentProposition.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Link
              href="/get-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-md font-headline font-semibold text-lg shadow-construction-lg hover:shadow-construction transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Icon name="DocumentTextIcon" size={24} />
              <span>Get Free Quote</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white bg-opacity-10 text-primary-foreground rounded-md font-headline font-semibold text-lg border-2 border-white border-opacity-30 hover:bg-opacity-20 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Icon name="RectangleStackIcon" size={24} />
              <span>View Projects</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          {/* <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={20} className="text-success" />
              <span>ZIMRA ITF263 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={20} className="text-success" />
              <span>Inc. 11284/2019</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="CheckCircleIcon" size={20} className="text-success" />
              <span>USD 2M+ Projects</span>
            </div>
          </div> */}

          {/* Scroll Indicator */}
         
        </div>
      </div>
 <div className="absolute  bottom-0 text-white left-1/2 transform -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDownIcon" size={32} className="opacity-60" />
          </div>
      {/* Progress Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {valuePropositions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-accent w-8' : 'bg-white bg-opacity-30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AnimatedHero;