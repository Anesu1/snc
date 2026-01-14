import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

interface Testimonial {
  id: number;
  clientName: string;
  clientRole: string;
  companyName: string;
  projectType: string;
  projectValue: string;
  testimonial: string;
  rating: number;
  image: string;
  alt: string;
}

const ProjectTestimonials = () => {
  const testimonials: Testimonial[] = [
  {
    id: 1,
    clientName: 'Michael Chikwanha',
    clientRole: 'Project Manager',
    companyName: 'Mega Market Retail',
    projectType: 'Commercial Construction',
    projectValue: 'USD 1.6M',
    testimonial:
    'Six Nine Construction delivered our retail complex ahead of schedule and within budget. Their attention to detail and professional project management exceeded our expectations. The quality of workmanship is outstanding.',
    rating: 5,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10d17e2d1-1763293910418.png",
    alt: 'Professional African businessman in navy suit with confident smile in modern office'
  },
  {
    id: 2,
    clientName: 'Dr. Sarah Moyo',
    clientRole: 'Facilities Director',
    companyName: 'Africa University',
    projectType: 'Educational Infrastructure',
    projectValue: 'USD 890K',
    testimonial:
    'Working with SNC was a seamless experience. They understood our unique requirements for educational facilities and delivered a state-of-the-art building that serves our students excellently. Highly recommended.',
    rating: 5,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17abf6896-1763297793728.png",
    alt: 'Professional African woman in business attire with warm smile in university setting'
  },
  {
    id: 3,
    clientName: 'James Ndlovu',
    clientRole: 'Operations Manager',
    companyName: 'Hillcrest Mining',
    projectType: 'Industrial Infrastructure',
    projectValue: 'USD 1.2M',
    testimonial:
    'The team at Six Nine Construction demonstrated exceptional expertise in mining infrastructure. Their safety protocols and quality standards are industry-leading. We have complete confidence in their capabilities.',
    rating: 5,
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e5b063fc-1763295730212.png",
    alt: 'Mature African man in safety helmet and high-visibility vest at construction site'
  }];


  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-headline font-bold text-foreground mb-2">
          What Our Clients Say
        </h2>
        <p className="text-muted-foreground">
          Trusted by leading organizations across Zimbabwe
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) =>
        <div
          key={testimonial.id}
          className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-construction">

            <div className="flex items-center space-x-4 mb-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <AppImage
                src={testimonial.image}
                alt={testimonial.alt}
                className="w-full h-full object-cover" />

              </div>
              <div>
                <h3 className="font-headline font-semibold text-foreground">
                  {testimonial.clientName}
                </h3>
                <p className="text-sm text-muted-foreground">{testimonial.clientRole}</p>
                <p className="text-xs text-primary font-medium">{testimonial.companyName}</p>
              </div>
            </div>

            <div className="flex items-center space-x-1 mb-3">
              {Array.from({ length: testimonial.rating }).map((_, i) =>
            <Icon key={i} name="StarIcon" size={16} className="text-warning" variant="solid" />
            )}
            </div>

            <p className="text-sm text-foreground leading-relaxed mb-4">
              "{testimonial.testimonial}"
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div>
                <p className="text-xs text-muted-foreground">Project Type</p>
                <p className="text-sm font-medium text-foreground">{testimonial.projectType}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">Project Value</p>
                <p className="text-sm font-headline font-bold text-primary">
                  {testimonial.projectValue}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>);

};

export default ProjectTestimonials;