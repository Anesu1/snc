import AppImage from '../../../components/ui/AppImage';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
}

const HeroSection = ({ title, subtitle, description, heroImage, heroImageAlt }: HeroSectionProps) => {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-accent rounded-md">
              <span className="text-sm font-headline font-semibold">{subtitle}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-accent opacity-20 rounded-lg blur-xl"></div>
            <div className="relative rounded-lg overflow-hidden shadow-construction-lg">
              <AppImage
                src={heroImage}
                alt={heroImageAlt}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;