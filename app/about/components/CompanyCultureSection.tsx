import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface CultureValue {
  title: string;
  description: string;
  icon: string;
}

interface CompanyCultureSectionProps {
  values: CultureValue[];
  communityImage: string;
  communityImageAlt: string;
  communityImpact: string;
}

const CompanyCultureSection = ({
  values,
  communityImage,
  communityImageAlt,
  communityImpact,
}: CompanyCultureSectionProps) => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Company Culture & Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building Zimbabwe's future through excellence, integrity, and community impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-construction hover:shadow-construction-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4">
                <Icon name={value.icon as any} size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-headline font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-card rounded-lg overflow-hidden shadow-construction-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-80 lg:h-auto overflow-hidden">
              <AppImage
                src={communityImage}
                alt={communityImageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="inline-block px-4 py-2 bg-accent rounded-md mb-6 self-start">
                <span className="text-sm font-headline font-semibold text-white">
                  Community Impact
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-6">
                Building Zimbabwe's Future Together
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {communityImpact}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckBadgeIcon" size={20} className="text-success" />
                  <span className="text-sm font-semibold text-foreground">Local Heritage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckBadgeIcon" size={20} className="text-success" />
                  <span className="text-sm font-semibold text-foreground">International Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckBadgeIcon" size={20} className="text-success" />
                  <span className="text-sm font-semibold text-foreground">Community Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyCultureSection;