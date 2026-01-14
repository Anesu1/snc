import Icon from '../../../components/ui/AppIcon';

interface TrustSignal {
  icon: string;
  title: string;
  description: string;
}

const TrustSignals = () => {
  const trustSignals: TrustSignal[] = [
    {
      icon: 'CheckBadgeIcon',
      title: 'ZIMRA Compliant',
      description: 'Fully registered and tax compliant (ITF263)',
    },
    {
      icon: 'ShieldCheckIcon',
      title: 'Licensed Contractor',
      description: 'Incorporation 11284/2019',
    },
    {
      icon: 'CurrencyDollarIcon',
      title: 'USD 2M+ Projects',
      description: 'Proven track record of large-scale delivery',
    },
    {
      icon: 'ClockIcon',
      title: '24-48 Hour Response',
      description: 'Fast turnaround on all quote requests',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {trustSignals.map((signal, index) => (
        <div
          key={index}
          className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-all duration-300 hover:shadow-md"
        >
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-lg bg-primary bg-opacity-10 flex items-center justify-center flex-shrink-0">
              <Icon name={signal.icon as any} size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-headline font-semibold text-foreground mb-1">
                {signal.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{signal.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustSignals;