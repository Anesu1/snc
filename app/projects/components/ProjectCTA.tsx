import Link from 'next/link';
import Icon from '../../../components/ui/AppIcon';

export default function ProjectCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-accent to-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-48 h-48 clip-hexagon bg-white"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 clip-hexagon bg-white"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 clip-hexagon bg-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white bg-opacity-20 backdrop-blur-sm mb-6">
            <Icon name="RocketLaunchIcon" size={40} variant="solid" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-6 leading-tight">
            Ready to Start Your Next Project?
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join the growing list of satisfied clients who have trusted Six Nine Construction with
            their most important building projects. Let's bring your vision to life with precision,
            quality, and unwavering commitment to excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/get-quote"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-card text-primary rounded-md font-headline font-bold text-base shadow-construction-lg hover:shadow-construction transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
            >
              <Icon name="DocumentTextIcon" size={24} />
              <span>Get Free Quote</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-primary-foreground rounded-md font-headline font-semibold text-base border-2 border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              <Icon name="WrenchScrewdriverIcon" size={24} />
              <span>Explore Services</span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-white border-opacity-20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm">
              <a
                href="tel:+263771001577"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
              >
                <Icon name="PhoneIcon" size={20} />
                <span>+263 77 100 1577 </span>
              </a>
              <a
                href="mailto:info@snc.co.zw"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200"
              >
                <Icon name="EnvelopeIcon" size={20} />
                <span>cosmas@snc.co.zw</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}