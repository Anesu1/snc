import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  value: string;
  image: string;
  alt: string;
  description: string;
  achievements: string[];
}

interface FeaturedProjectsProps {
  projects: FeaturedProject[];
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-4">
            <Icon name="StarIcon" size={20} variant="solid" className="text-accent-foreground" />
            <span className="text-sm font-headline font-semibold text-accent-foreground">
              Featured Projects
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-4">
            Signature Projects That Define Excellence
          </h2>
          <p className="text-lg text-textSecondary max-w-3xl mx-auto">
            Explore our most impactful projects that showcase our commitment to quality, innovation,
            and client satisfaction across diverse construction sectors.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center bg-card rounded-lg overflow-hidden shadow-construction hover:shadow-construction-lg transition-all duration-500`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2 h-96 relative overflow-hidden group">
                <AppImage
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-40"></div>
                
                {/* Value Badge */}
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-card shadow-construction">
                    <Icon name="CurrencyDollarIcon" size={24} variant="solid" className="text-accent" />
                    <div>
                      <div className="text-xs text-textSecondary">Project Value</div>
                      <div className="text-lg font-headline font-bold text-accent">{project.value}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-8">
                {/* Category Badge */}
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold mb-4">
                  <Icon name="BuildingOffice2Icon" size={14} />
                  <span>{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-base text-foreground opacity-80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  <div className="text-sm font-headline font-semibold text-foreground mb-2">
                    Key Achievements
                  </div>
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-success bg-opacity-10 flex items-center justify-center mt-0.5">
                        <Icon name="CheckIcon" size={14} className="text-success" />
                      </div>
                      <p className="text-sm text-foreground flex-1">{achievement}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-headline font-semibold text-sm hover:bg-secondary transition-all duration-300 hover:shadow-construction">
                  <span>View Full Case Study</span>
                  <Icon name="ArrowRightIcon" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}