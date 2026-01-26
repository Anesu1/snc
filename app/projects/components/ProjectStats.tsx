import Icon from '../../../components/ui/AppIcon';

interface Stat {
  icon: string;
  value: string;
  label: string;
  description: string;
}

interface ProjectStatsProps {
  stats: Stat[];
}

export default function ProjectStats({ stats }: ProjectStatsProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary px-4 py-2 rounded-full mb-4">
            <Icon name="ChartBarIcon" size={20} variant="solid" className="text-white" />
            <span className="text-sm font-headline font-semibold text-primary-foreground">
              Performance Metrics
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            Our track record of excellence is reflected in these key performance indicators that
            demonstrate our commitment to quality and client satisfaction.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-construction hover:shadow-construction-lg transition-all duration-500 hover:-translate-y-1 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-primary bg-opacity-10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:bg-opacity-100 transition-all duration-300">
                <Icon
                  name={stat.icon as any}
                  size={28}
                  variant="solid"
                  className="text-white group-hover:text-primary-foreground transition-colors duration-300"
                />
              </div>

              {/* Value */}
              <div className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-2">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-base font-headline font-semibold text-foreground mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <p className="text-sm text-textSecondary leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}