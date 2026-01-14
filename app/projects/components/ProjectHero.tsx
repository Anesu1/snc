import Icon from '../../../components/ui/AppIcon';

interface ProjectHeroProps {
  totalProjects: number;
  totalValue: string;
  completionRate: number;
}

export default function ProjectHero({ totalProjects, totalValue, completionRate }: ProjectHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-20 overflow-hidden">
      {/* Hexagonal Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 clip-hexagon bg-white"></div>
        <div className="absolute top-40 right-20 w-24 h-24 clip-hexagon bg-white"></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 clip-hexagon bg-white"></div>
        <div className="absolute bottom-10 right-1/3 w-20 h-20 clip-hexagon bg-white"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent px-4 py-2 rounded-full mb-6 animate-pulse-subtle">
            <Icon name="RectangleStackIcon" size={20} variant="solid" />
            <span className="text-sm font-headline font-semibold">Portfolio Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-6 leading-tight">
            Building Zimbabwe's Future,
            <span className="block text-accent">One Project at a Time</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl opacity-90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Explore our portfolio of successfully delivered projects across commercial, residential, industrial, and civil engineering sectors. Each project represents our commitment to excellence, precision, and client satisfaction.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-center justify-center mb-3">
                <Icon name="BuildingOffice2Icon" size={32} variant="solid" className="text-accent" />
              </div>
              <div className="text-3xl font-headline font-bold mb-1">{totalProjects}+</div>
              <div className="text-sm opacity-80">Completed Projects</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-center justify-center mb-3">
                <Icon name="CurrencyDollarIcon" size={32} variant="solid" className="text-accent" />
              </div>
              <div className="text-3xl font-headline font-bold mb-1">{totalValue}</div>
              <div className="text-sm opacity-80">Total Project Value</div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 border border-white border-opacity-20">
              <div className="flex items-center justify-center mb-3">
                <Icon name="CheckBadgeIcon" size={32} variant="solid" className="text-success" />
              </div>
              <div className="text-3xl font-headline font-bold mb-1">{completionRate}%</div>
              <div className="text-sm opacity-80">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}