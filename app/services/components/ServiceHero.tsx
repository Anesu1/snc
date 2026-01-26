import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface ServiceHeroProps {
  title: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
    icon: string;
  }>;
}

export default function ServiceHero({ title, description, stats }: ServiceHeroProps) {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent rounded-full mb-6">
              <Icon name="WrenchScrewdriverIcon" size={20} className="text-accent-foreground" />
              <span className="text-sm font-semibold text-accent-foreground">Our Services</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
              {description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) =>
              <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-white bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Icon name={stat.icon as any} size={24} className="text-accent" />
                  </div>
                  <div className="text-2xl md:text-3xl font-headline font-bold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-construction-lg">
              <AppImage
                src="/images/services/hero.webp"
                alt="Construction workers in yellow hard hats and safety vests working on steel framework of modern building structure against blue sky"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-card text-foreground p-6 rounded-xl shadow-construction-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success bg-opacity-10 rounded-lg flex items-center justify-center">
                  <Icon name="CheckBadgeIcon" size={28} className="text-success" />
                </div>
                <div>
                  <div className="text-2xl font-headline font-bold text-primary">100%</div>
                  <div className="text-sm text-textSecondary">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}