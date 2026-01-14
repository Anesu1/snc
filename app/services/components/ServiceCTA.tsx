import Icon from '../../../components/ui/AppIcon';
import AppImage from '../../../components/ui/AppImage';

export default function ServiceCTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent rounded-full mb-6">
              <Icon name="SparklesIcon" size={20} className="text-accent-foreground" />
              <span className="text-sm font-semibold text-accent-foreground">Ready to Build?</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-bold mb-6 leading-tight">
              Let's Bring Your Construction Vision to Life
            </h2>

            <p className="text-lg opacity-90 mb-8 leading-relaxed">
              From initial consultation to project completion, our team of experts is ready to deliver exceptional results. Get a free, detailed quote tailored to your specific requirements.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
              'Free detailed project assessment and consultation',
              'Transparent pricing with no hidden costs',
              'Dedicated project manager assigned to your build',
              'Regular progress updates and quality inspections']?.
              map((benefit, index) =>
              <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-success bg-opacity-20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="CheckIcon" size={16} className="text-success" />
                  </div>
                  <span className="text-sm opacity-90">{benefit}</span>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-accent text-accent-foreground rounded-lg font-headline font-semibold shadow-construction hover:shadow-construction-lg transition-all duration-300 hover:scale-105">
                <Icon name="DocumentTextIcon" size={20} />
                <span>Get Free Quote</span>
              </button>
              <button className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white bg-opacity-10 text-primary-foreground rounded-lg font-headline font-semibold border-2 border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                <Icon name="PhoneIcon" size={20} />
                <span>Call Us Now</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-white border-opacity-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Icon name="PhoneIcon" size={20} className="opacity-80" />
                  <div>
                    <div className="text-xs opacity-70">Call Us</div>
                    <div className="font-semibold">+263 123 456 789</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="EnvelopeIcon" size={20} className="opacity-80" />
                  <div>
                    <div className="text-xs opacity-70">Email Us</div>
                    <div className="font-semibold">info@sncconstruction.co.zw</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-construction-lg">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_1b7e40a0c-1767813710195.png"
                alt="Professional construction team of diverse workers in hard hats and safety gear reviewing blueprints on construction site with modern building in background"
                className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-40" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-card text-foreground p-6 rounded-xl shadow-construction-lg">
              <div className="text-center">
                <div className="text-3xl font-headline font-bold text-primary mb-1">2000+</div>
                <div className="text-sm text-textSecondary">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}