import Icon from '../../../components/ui/AppIcon';

interface ComparisonFeature {
  name: string;
  basic: boolean;
  standard: boolean;
  premium: boolean;
}

interface ServiceComparisonProps {
  features: ComparisonFeature[];
}

export default function ServiceComparison({ features }: ServiceComparisonProps) {
  const packages = [
    {
      name: 'Basic',
      price: 'From $50K',
      description: 'Essential construction services for small-scale projects',
      color: 'bg-muted',
      textColor: 'text-foreground',
      icon: 'HomeIcon'
    },
    {
      name: 'Standard',
      price: 'From $250K',
      description: 'Comprehensive solutions for medium-scale developments',
      color: 'bg-primary',
      textColor: 'text-primary-foreground',
      icon: 'BuildingOfficeIcon',
      popular: true
    },
    {
      name: 'Premium',
      price: 'From $1M+',
      description: 'Full-service excellence for large-scale projects',
      color: 'bg-accent',
      textColor: 'text-accent-foreground',
      icon: 'BuildingLibraryIcon'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary bg-opacity-10 rounded-full mb-4">
            <Icon name="ChartBarIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Service Comparison</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Choose Your Service Level
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Flexible service packages designed to match your project scale and requirements
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full bg-card rounded-2xl shadow-construction overflow-hidden">
            <thead>
              <tr className="border-b border-border">
                <th className="p-6 text-left">
                  <span className="text-lg font-headline font-bold text-foreground">Features</span>
                </th>
                {packages.map((pkg, index) => (
                  <th key={index} className="p-6 text-center relative">
                    {pkg.popular && (
                      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${pkg.color} rounded-xl mb-3`}>
                      <Icon name={pkg.icon as any} size={32} className={pkg.textColor} />
                    </div>
                    <div className="text-xl font-headline font-bold text-foreground mb-1">
                      {pkg.name}
                    </div>
                    <div className="text-2xl font-headline font-bold text-primary mb-2">
                      {pkg.price}
                    </div>
                    <div className="text-sm text-textSecondary">
                      {pkg.description}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-border last:border-b-0 hover:bg-muted transition-colors duration-200">
                  <td className="p-6 text-foreground font-medium">
                    {feature.name}
                  </td>
                  <td className="p-6 text-center">
                    {feature.basic ? (
                      <Icon name="CheckCircleIcon" size={24} className="text-success mx-auto" />
                    ) : (
                      <Icon name="XCircleIcon" size={24} className="text-muted-foreground mx-auto opacity-30" />
                    )}
                  </td>
                  <td className="p-6 text-center bg-primary bg-opacity-5">
                    {feature.standard ? (
                      <Icon name="CheckCircleIcon" size={24} className="text-success mx-auto" />
                    ) : (
                      <Icon name="XCircleIcon" size={24} className="text-muted-foreground mx-auto opacity-30" />
                    )}
                  </td>
                  <td className="p-6 text-center">
                    {feature.premium ? (
                      <Icon name="CheckCircleIcon" size={24} className="text-success mx-auto" />
                    ) : (
                      <Icon name="XCircleIcon" size={24} className="text-muted-foreground mx-auto opacity-30" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-textSecondary mb-6">
            Need a custom solution? Our team can create a tailored package for your specific requirements.
          </p>
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-headline font-semibold shadow-construction hover:shadow-construction-lg transition-all duration-300 hover:scale-105">
            <Icon name="ChatBubbleLeftRightIcon" size={20} />
            <span>Request Custom Quote</span>
          </button>
        </div>
      </div>
    </section>
  );
}