import Icon from '../../../components/ui/AppIcon';

interface VisionMissionItem {
  title: string;
  content: string;
  icon: string;
  color: string;
}

interface VisionMissionSectionProps {
  items: VisionMissionItem[];
}

const VisionMissionSection = ({ items }: VisionMissionSectionProps) => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Vision & Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bringing construction dreams to life through unwavering commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg shadow-construction hover:shadow-construction-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-lg ${item.color} flex items-center justify-center mb-6`}>
                <Icon name={item.icon as any} size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;