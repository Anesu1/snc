import AppImage from '../../../components/ui/AppImage';
import Icon from '../../../components/ui/AppIcon';

interface Equipment {
  name: string;
  category: string;
  image: string;
  imageAlt: string;
  specs: string[];
  dailyRate: string;
}

interface PlantHireSectionProps {
  equipment: Equipment[];
}

export default function PlantHireSection({ equipment }: PlantHireSectionProps) {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent bg-opacity-10 rounded-full mb-4">
            <Icon name="TruckIcon" size={20} className="text-accent" />
            <span className="text-sm font-semibold text-accent">Dreamcast Partnership</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Plant Hire & Earthmoving
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Premium equipment fleet through our strategic partnership with Dreamcast, ensuring your project has the right machinery at the right time
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {equipment.map((item, index) =>
          <div key={index} className="bg-card rounded-xl overflow-hidden shadow-construction hover:shadow-construction-lg transition-all duration-300 group">
              {/* Equipment Image */}
              <div className="relative h-56 overflow-hidden">
                <AppImage
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent opacity-60" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                  {item.category}
                </div>

               
              </div>

              {/* Equipment Details */}
              <div className="p-6">
                <h3 className="text-xl font-headline font-bold text-foreground mb-4">
                  {item.name}
                </h3>

                <ul className="space-y-2">
                  {item.specs.map((spec, specIndex) =>
                <li key={specIndex} className="flex items-start space-x-2">
                      <Icon name="CheckIcon" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-textSecondary">{spec}</span>
                    </li>
                )}
                </ul>

                {/* <button className="mt-6 w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 hover:shadow-construction flex items-center justify-center space-x-2">
                  <Icon name="CalendarIcon" size={18} />
                  <span>Check Availability</span>
                </button> */}
              </div>
            </div>
          )}
        </div>

        {/* Partnership Info */}
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-construction">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-xl flex items-center justify-center">
                  <Icon name="HandshakeIcon" size={32} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-headline font-bold text-foreground">
                    Dreamcast Partnership
                  </h3>
                  <p className="text-sm text-textSecondary">Your Equipment Solutions Partner</p>
                </div>
              </div>

              <p className="text-textSecondary mb-6 leading-relaxed">
                We are proud to mention some of our clients who have been part of our journey, either for plant hire or construction services:
              </p>
              <ul className="list-disc mb-10 list-inside text-textSecondary">
                <li>Mega Market</li>
                <li>Africa University</li>
                <li>Surrey</li>
                <li>Hillcrest College</li>
                <li>Alrosa Zimbabwe</li>
              </ul>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Icon name="ShieldCheckIcon" size={24} className="text-success" />
                  <span className="text-sm font-medium text-foreground">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="WrenchScrewdriverIcon" size={24} className="text-success" />
                  <span className="text-sm font-medium text-foreground">Maintained Fleet</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="ClockIcon" size={24} className="text-success" />
                  <span className="text-sm font-medium text-foreground">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="TruckIcon" size={24} className="text-success" />
                  <span className="text-sm font-medium text-foreground">Fast Delivery</span>
                </div>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden">
              <AppImage
                src="/images/services/dream.webp"
                alt="Yellow excavator and bulldozer heavy machinery equipment parked on construction site with dirt and gravel"
                className="w-full h-full object-cover" />

            </div>
          </div>
        </div>
      </div>
    </section>);

}