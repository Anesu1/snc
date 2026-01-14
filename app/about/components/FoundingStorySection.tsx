import Icon from '../../../components/ui/AppIcon';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface FoundingStorySectionProps {
  story: string;
  milestones: Milestone[];
}

const FoundingStorySection = ({ story, milestones }: FoundingStorySectionProps) => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-6">
            Our Founding Story
          </h2>
          <p className="text-lg text-foreground leading-relaxed">
            {story}
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden lg:block"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="flex-1 lg:text-right">
                  <div className={`bg-card p-6 rounded-lg shadow-construction ${
                    index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                  }`}>
                    <div className="flex items-center gap-3 mb-3 lg:justify-end">
                      <Icon name={milestone.icon as any} size={24} className="text-accent" />
                      <span className="text-2xl font-headline font-bold text-primary">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-headline font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="hidden lg:block w-12 h-12 rounded-full bg-primary flex-shrink-0 relative z-10 border-4 border-background shadow-construction"></div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoundingStorySection;