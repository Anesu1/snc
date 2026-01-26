import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface ServiceFeature {
  text: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  features: ServiceFeature[];
  colorScheme: 'primary' | 'accent';
}

export default function ServiceCard({
  title,
  description,
  image,
  imageAlt,
  icon,
  features,
  colorScheme
}: ServiceCardProps) {
  const bgColor = colorScheme === 'primary' ? 'bg-primary' : 'bg-accent';
  const textColor = colorScheme === 'primary' ? 'text-primary-foreground' : 'text-accent-foreground';

  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-construction hover:shadow-construction-lg transition-all duration-300 group">
      {/* Image Section */}
    

      {/* Content Section */}
      <div className="p-8">
        <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
          {title}
        </h3>

        <p className="text-textSecondary mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features List */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="w-5 h-5 rounded-full bg-success bg-opacity-10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Icon name="CheckIcon" size={14} className="text-success" />
              </div>
              <span className="text-sm text-foreground">{feature.text}</span>
            </li>
          ))}
        </ul>

       
      </div>
    </div>
  );
}