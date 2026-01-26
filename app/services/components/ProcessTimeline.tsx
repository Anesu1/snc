import Icon from '../../../components/ui/AppIcon';

interface TimelineStep {
  title: string;
  description: string;
  icon: string;
  duration: string;
}

interface ProcessTimelineProps {
  steps: TimelineStep[];
}

export default function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary bg-opacity-10 rounded-full mb-4">
            <Icon name="ClockIcon" size={20} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            How We Deliver Excellence
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            A proven methodology that ensures quality, transparency, and timely project completion
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-border hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6 mb-12 last:mb-0">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-construction">
                      <Icon name={step.icon as any} size={32} className="text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-headline font-bold text-sm shadow-construction">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-xl p-6 md:p-8 shadow-construction hover:shadow-construction-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl md:text-2xl font-headline font-bold text-foreground mb-2 md:mb-0">
                      {step.title}
                    </h3>
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-muted rounded-full">
                      <Icon name="ClockIcon" size={16} className="text-primary" />
                      <span className="text-sm font-medium text-foreground">{step.duration}</span>
                    </div>
                  </div>
                  <p className="text-textSecondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-headline font-semibold shadow-construction hover:shadow-construction-lg transition-all duration-300 hover:scale-105">
            <Icon name="RocketLaunchIcon" size={20} />
            <span>Start Your Project</span>
          </button>
        </div> */}
      </div>
    </section>
  );
}