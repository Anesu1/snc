import Icon from '../../../components/ui/AppIcon';

interface TimelineEvent {
  year: string;
  quarter: string;
  projects: {
    title: string;
    value: string;
    status: string;
  }[];
}

interface ProjectTimelineProps {
  timeline: TimelineEvent[];
}

export default function ProjectTimeline({ timeline }: ProjectTimelineProps) {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary px-4 py-2 rounded-full mb-4">
            <Icon name="ClockIcon" size={20} variant="solid" className="text-primary-foreground" />
            <span className="text-sm font-headline font-semibold text-primary-foreground">
              Project Timeline
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Our Journey of Excellence
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            Track our consistent delivery of high-quality projects year after year, demonstrating our
            commitment to on-time completion and client satisfaction.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={index} className="relative">
                  {/* Year Marker */}
                  <div className="flex items-center mb-6">
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-construction z-10">
                      <div className="text-center">
                        <div className="text-lg font-headline font-bold text-primary-foreground">
                          {event.year}
                        </div>
                        <div className="text-xs text-primary-foreground opacity-80">{event.quarter}</div>
                      </div>
                    </div>
                  </div>

                  {/* Projects Grid */}
                  <div className="ml-28 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                    <div className={index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:col-start-2 md:pl-16'}>
                      <div className="space-y-4">
                        {event.projects.map((project, projIndex) => (
                          <div
                            key={projIndex}
                            className="bg-card p-4 rounded-lg shadow-construction hover:shadow-construction-lg transition-all duration-300"
                          >
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="text-base font-headline font-semibold text-foreground flex-1">
                                {project.title}
                              </h4>
                              <div
                                className={`flex items-center space-x-1 px-2 py-1 rounded text-xs font-semibold ${
                                  project.status.toLowerCase() === 'completed'
                                    ? 'bg-success bg-opacity-10 text-success' :'bg-warning bg-opacity-10 text-warning'
                                }`}
                              >
                                <Icon
                                  name={
                                    project.status.toLowerCase() === 'completed'
                                      ? 'CheckCircleIcon' :'ClockIcon'
                                  }
                                  size={12}
                                  variant="solid"
                                />
                                <span>{project.status}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 text-accent">
                              <Icon name="CurrencyDollarIcon" size={16} variant="solid" />
                              <span className="text-sm font-headline font-bold">{project.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}