'use client';

import { useState } from 'react';
import ServiceHero from './ServiceHero';
import ServiceCard from './ServiceCard';
import ServiceComparison from './ServiceComparison';
import PlantHireSection from './PlantHireSection';
import ProcessTimeline from './ProcessTimeline';
import ServiceCTA from './ServiceCTA';
import Icon from '../../../components/ui/AppIcon';

interface Service {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
  features: Array<{text: string;}>;
  colorScheme: 'primary' | 'accent';
  category: string;
}

export default function ServicesInteractive() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const heroStats = [
  { value: '4+', label: 'Service Areas', icon: 'WrenchScrewdriverIcon' },
  { value: '100%', label: 'Quality Rate', icon: 'CheckBadgeIcon' },
  { value: '24/7', label: 'Support', icon: 'ClockIcon' }];


  const categories = [
  { id: 'all', name: 'All Services', icon: 'Squares2X2Icon' },
  { id: 'construction', name: 'Construction', icon: 'HomeIcon' },
  { id: 'civil', name: 'Civil Engineering', icon: 'WrenchScrewdriverIcon' },
  { id: 'consultancy', name: 'Consultancy', icon: 'LightBulbIcon' },
  { id: 'plant', name: 'Plant Hire', icon: 'TruckIcon' }];


  const services: Service[] = [
  {
    title: 'Residential Construction',
    description: 'Premium home building services for individual property owners seeking quality craftsmanship. From custom homes to renovations, we deliver living spaces that exceed expectations.',
    image: "https://images.unsplash.com/photo-1660361339517-33999f18c149",
    imageAlt: 'Modern two-story residential house with white exterior walls, large windows, and landscaped front yard with green lawn',
    icon: 'HomeIcon',
    features: [
    { text: 'Custom home design and construction' },
    { text: 'Renovation and remodeling services' },
    { text: 'Quality materials and finishes' },
    { text: 'Energy-efficient building practices' }],

    colorScheme: 'primary',
    category: 'construction'
  },
  {
    title: 'Commercial Construction',
    description: 'Large-scale commercial projects for retail chains and businesses. Proven expertise with projects like Mega Market USD 1.6M, delivering functional spaces that drive business success.',
    image: "https://images.unsplash.com/photo-1727224453606-e4d32c71cf78",
    imageAlt: 'Modern commercial building with glass facade and steel framework under construction with cranes visible against blue sky',
    icon: 'BuildingOfficeIcon',
    features: [
    { text: 'Retail and shopping center development' },
    { text: 'Office building construction' },
    { text: 'Warehouse and distribution facilities' },
    { text: 'Fast-track project delivery' }],

    colorScheme: 'accent',
    category: 'construction'
  },
  {
    title: 'Industrial Construction',
    description: 'Specialized industrial facilities for mining companies like Alrosa and manufacturing operations. Heavy-duty construction built to withstand demanding operational requirements.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17655c6ff-1766940937257.png",
    imageAlt: 'Industrial construction site with steel framework and heavy machinery including cranes working on large-scale facility',
    icon: 'BuildingLibraryIcon',
    features: [
    { text: 'Mining infrastructure development' },
    { text: 'Manufacturing plant construction' },
    { text: 'Heavy equipment foundations' },
    { text: 'Safety-compliant design' }],

    colorScheme: 'primary',
    category: 'construction'
  },
  {
    title: 'Civil Engineering & Foundations',
    description: 'Expert civil engineering solutions for government agencies and NGOs. Comprehensive foundation work, site preparation, and infrastructure development with precision engineering.',
    image: "https://images.unsplash.com/photo-1652303713917-2666b8bee507",
    imageAlt: 'Construction workers in safety vests operating excavator on earthwork site with exposed foundation and soil',
    icon: 'WrenchScrewdriverIcon',
    features: [
    { text: 'Site surveying and preparation' },
    { text: 'Foundation design and installation' },
    { text: 'Drainage and earthwork solutions' },
    { text: 'Road and infrastructure development' }],

    colorScheme: 'accent',
    category: 'civil'
  },
  {
    title: 'Engineering Consultancy',
    description: 'Technical precision and innovation-forward consulting services. Modern techniques, sustainable practices, and cutting-edge construction methods for optimal project outcomes.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_14fe25644-1768161384094.png",
    imageAlt: 'Engineering team reviewing blueprints and technical drawings on construction site with hard hats and safety equipment',
    icon: 'LightBulbIcon',
    features: [
    { text: 'Project feasibility studies' },
    { text: 'Structural engineering design' },
    { text: 'Construction management consulting' },
    { text: 'Sustainable building solutions' }],

    colorScheme: 'primary',
    category: 'consultancy'
  },
  {
    title: 'Project Management',
    description: 'End-to-end project oversight ensuring on-time, on-budget delivery. Dedicated project managers coordinate all aspects from planning through completion with transparent communication.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_162e3922d-1767199713989.png",
    imageAlt: 'Project manager in hard hat reviewing construction plans with tablet on active building site with workers in background',
    icon: 'ClipboardDocumentCheckIcon',
    features: [
    { text: 'Comprehensive project planning' },
    { text: 'Budget and timeline management' },
    { text: 'Quality control and inspections' },
    { text: 'Stakeholder communication' }],

    colorScheme: 'accent',
    category: 'consultancy'
  }];


  const comparisonFeatures = [
  { name: 'Project Planning & Design', basic: true, standard: true, premium: true },
  { name: 'Quality Materials', basic: true, standard: true, premium: true },
  { name: 'Dedicated Project Manager', basic: false, standard: true, premium: true },
  { name: 'Regular Progress Updates', basic: false, standard: true, premium: true },
  { name: 'Engineering Consultancy', basic: false, standard: false, premium: true },
  { name: 'Plant Hire Services', basic: false, standard: false, premium: true },
  { name: 'Post-Completion Support', basic: false, standard: true, premium: true },
  { name: 'Warranty Coverage', basic: '1 Year', standard: '3 Years', premium: '5 Years' }];


  const equipment = [
  {
    name: 'Excavator CAT 320',
    category: 'Earthmoving',
    image: "https://images.unsplash.com/photo-1689596312049-0a21da693515",
    imageAlt: 'Yellow CAT excavator with extended arm and bucket on construction site with dirt and gravel',
    specs: [
    'Operating weight: 20 tons',
    'Bucket capacity: 1.2 m³',
    'Max digging depth: 6.5m',
    'Operator included'],

    dailyRate: '$450'
  },
  {
    name: 'Bulldozer D6T',
    category: 'Earthmoving',
    image: "https://images.unsplash.com/photo-1603814744174-115311ad645e",
    imageAlt: 'Heavy-duty yellow bulldozer with large blade on construction terrain with dirt and rocks',
    specs: [
    'Operating weight: 18 tons',
    'Blade capacity: 3.4 m³',
    'Power: 215 HP',
    'GPS grade control'],

    dailyRate: '$520'
  },
  {
    name: 'Wheel Loader 950',
    category: 'Material Handling',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_194ab642e-1766743936291.png",
    imageAlt: 'Yellow wheel loader with large front bucket on construction site ready for material handling',
    specs: [
    'Bucket capacity: 2.5 m³',
    'Operating weight: 16 tons',
    'Lift capacity: 5 tons',
    'Quick coupler system'],

    dailyRate: '$380'
  }];


  const processSteps = [
  {
    title: 'Initial Consultation',
    description: 'We begin with a comprehensive discussion of your project requirements, budget, and timeline. Our experts assess site conditions and provide preliminary recommendations.',
    icon: 'ChatBubbleLeftRightIcon',
    duration: '1-2 Days'
  },
  {
    title: 'Design & Planning',
    description: 'Our engineering team develops detailed plans, specifications, and cost estimates. We collaborate with you to refine the design and ensure all requirements are met.',
    icon: 'PencilSquareIcon',
    duration: '1-2 Weeks'
  },
  {
    title: 'Approval & Permits',
    description: 'We handle all regulatory approvals, building permits, and compliance documentation. Our team ensures your project meets all local and national construction standards.',
    icon: 'DocumentCheckIcon',
    duration: '2-4 Weeks'
  },
  {
    title: 'Construction Phase',
    description: 'Skilled craftsmen execute the build with precision. Your dedicated project manager provides regular updates and coordinates all trades for seamless progress.',
    icon: 'WrenchScrewdriverIcon',
    duration: 'Project Specific'
  },
  {
    title: 'Quality Inspection',
    description: 'Rigorous quality checks at every milestone ensure work meets our high standards. We conduct thorough inspections and address any issues immediately.',
    icon: 'MagnifyingGlassIcon',
    duration: 'Ongoing'
  },
  {
    title: 'Project Handover',
    description: 'Final walkthrough, documentation delivery, and warranty activation. We provide comprehensive training on systems and ongoing support for your peace of mind.',
    icon: 'CheckBadgeIcon',
    duration: '1 Week'
  }];


  const filteredServices = activeCategory === 'all' ?
  services :
  services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <ServiceHero
        title="Comprehensive Construction Solutions"
        description="From residential homes to large-scale industrial projects, we deliver excellence across all construction disciplines with proven expertise and unwavering commitment to quality."
        stats={heroStats} />


      {/* Category Filter */}
      <section className="py-12 bg-muted border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) =>
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
              activeCategory === category.id ?
              'bg-primary text-primary-foreground shadow-construction' :
              'bg-card text-foreground hover:bg-primary hover:text-primary-foreground'}`
              }>

                <Icon name={category.icon as any} size={20} />
                <span>{category.name}</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) =>
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              imageAlt={service.imageAlt}
              icon={service.icon}
              features={service.features}
              colorScheme={service.colorScheme} />

            )}
          </div>
        </div>
      </section>

      <ServiceComparison features={comparisonFeatures} />

      <PlantHireSection equipment={equipment} />

      <ProcessTimeline steps={processSteps} />

      <ServiceCTA />
    </div>);

}