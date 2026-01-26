import type { Metadata } from 'next';
import Header from '../../components/common/Header';
import ProjectHero from './components/ProjectHero';
import FeaturedProjects from './components/FeaturedProjects';
import ProjectsInteractive from './components/ProjectsInteractive';
import ProjectTimeline from './components/ProjectTimeline';
import ClientTestimonials from './components/ClientTestimonials';
import ProjectStats from './components/ProjectStats';
import ProjectCTA from './components/ProjectCTA';
import Footer from '../../components/common/Footer';


export const metadata: Metadata = {
  title: 'Projects - SNC Construction Hub',
  description: 'Explore Six Nine Construction\'s portfolio of successfully delivered projects across commercial, residential, industrial, and civil engineering sectors in Zimbabwe. View detailed case studies, client testimonials, and project timelines showcasing our commitment to excellence.'
};

interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  value: string;
  valueNumeric: number;
  duration: string;
  completionDate: string;
  status: string;
  image: string;
  alt: string;
  client: string;
  description: string;
  highlights: string[];
}

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

interface TimelineEvent {
  year: string;
  quarter: string;
  projects: {
    title: string;
    value: string;
    status: string;
  }[];
}

interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  projectName: string;
  rating: number;
  testimonial: string;
  image: string;
  alt: string;
  projectValue: string;
}

interface Stat {
  icon: string;
  value: string;
  label: string;
  description: string;
}

export default function ProjectsPage() {
  const allProjects: Project[] = [
  {
    id: 'mega-market-harare',
    title: 'Mega Market Harare',
    category: 'Commercial',
    location: 'Harare, Zimbabwe',
    value: '$1.6M',
    valueNumeric: 1600000,
    duration: '18 months',
    completionDate: '15/08/2025',
    status: 'Completed',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19d1cc887-1766601325766.png",
    alt: 'Modern commercial retail building with glass facade and steel framework in urban Harare setting',
    client: 'Mega Market Corporation',
    description: 'Large-scale commercial retail complex featuring modern architecture, advanced structural engineering, and sustainable building practices. The project included extensive civil works, electrical systems, and HVAC installations.',
    highlights: ['On-time delivery', 'LEED certified', 'Advanced HVAC', 'Seismic design']
  },
  {
    id: 'africa-university-maize',
    title: 'Africa University Maize Milling Facility',
    category: 'Industrial',
    location: 'Mutare, Zimbabwe',
    value: '$256K',
    valueNumeric: 256000,
    duration: '8 months',
    completionDate: '20/11/2025',
    status: 'Completed',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d1995559-1764662280745.png",
    alt: 'Industrial maize milling facility with modern processing equipment and steel structure',
    client: 'Africa University',
    description: 'State-of-the-art maize milling facility designed for educational and commercial purposes. Features include automated processing systems, quality control laboratories, and efficient material handling infrastructure.',
    highlights: ['Automated systems', 'Quality labs', 'Efficient workflow', 'Safety compliant']
  },
  {
    id: 'hillcrest-residential',
    title: 'Hillcrest Residential Development',
    category: 'Residential',
    location: 'Hillcrest, Harare',
    value: '$890K',
    valueNumeric: 890000,
    duration: '14 months',
    completionDate: '10/03/2026',
    status: 'Ongoing',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18da01383-1766747476584.png",
    alt: 'Luxury residential homes with modern architecture featuring white walls and large windows in suburban setting',
    client: 'Hillcrest Properties Ltd',
    description: 'Premium residential estate featuring 24 luxury homes with modern amenities, landscaped gardens, and community facilities. Incorporates sustainable design principles and energy-efficient systems.',
    highlights: ['Luxury finishes', 'Smart home tech', 'Landscaped gardens', 'Energy efficient']
  },
  {
    id: 'mining-infrastructure',
    title: 'Alrosa Mining Infrastructure',
    category: 'Industrial',
    location: 'Marange, Zimbabwe',
    value: '$2.1M',
    valueNumeric: 2100000,
    duration: '24 months',
    completionDate: '30/06/2024',
    status: 'Completed',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_17655c6ff-1766940937257.png",
    alt: 'Heavy industrial mining facility with steel structures and processing equipment in open pit setting',
    client: 'Alrosa Zimbabwe',
    description: 'Comprehensive mining infrastructure project including processing facilities, administrative buildings, worker accommodation, and supporting civil works. Designed to withstand harsh industrial conditions.',
    highlights: ['Heavy-duty design', 'Worker facilities', 'Processing plant', 'Safety systems']
  },
  {
    id: 'government-office',
    title: 'Government Office Complex',
    category: 'Commercial',
    location: 'Bulawayo, Zimbabwe',
    value: '$1.3M',
    valueNumeric: 1300000,
    duration: '16 months',
    completionDate: '15/12/2025',
    status: 'Completed',
    image: "https://images.unsplash.com/photo-1602917058415-d86121146559",
    alt: 'Modern government office building with glass and concrete facade in urban commercial district',
    client: 'Ministry of Infrastructure',
    description: 'Multi-story government office complex with modern facilities, conference rooms, and public service areas. Features include advanced security systems, backup power, and accessible design.',
    highlights: ['Security systems', 'Accessible design', 'Backup power', 'Modern facilities']
  },
  {
    id: 'school-expansion',
    title: 'St. Mary\'s School Expansion',
    category: 'Civil',
    location: 'Gweru, Zimbabwe',
    value: '$420K',
    valueNumeric: 420000,
    duration: '10 months',
    completionDate: '05/01/2026',
    status: 'Ongoing',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_129385bd6-1766060457018.png",
    alt: 'Educational facility with modern classrooms and outdoor learning spaces surrounded by greenery',
    client: 'St. Mary\'s School Board',
    description: 'Expansion project including new classroom blocks, science laboratories, sports facilities, and administrative offices. Designed to accommodate 500 additional students with modern learning environments.',
    highlights: ['Modern classrooms', 'Science labs', 'Sports facilities', 'Eco-friendly']
  },
  {
    id: 'hotel-renovation',
    title: 'Victoria Falls Hotel Renovation',
    category: 'Commercial',
    location: 'Victoria Falls, Zimbabwe',
    value: '$780K',
    valueNumeric: 780000,
    duration: '12 months',
    completionDate: '20/09/2024',
    status: 'Completed',
    image: "https://images.unsplash.com/photo-1631993034717-fc3a15d35796",
    alt: 'Luxury hotel exterior with colonial architecture featuring white columns and manicured gardens',
    client: 'Victoria Falls Hotels Group',
    description: 'Comprehensive renovation of historic hotel property including guest rooms, restaurants, conference facilities, and recreational areas. Preserved heritage features while incorporating modern amenities.',
    highlights: ['Heritage preservation', 'Luxury upgrades', 'Modern amenities', 'Landscaping']
  },
  {
    id: 'warehouse-facility',
    title: 'Logistics Warehouse Complex',
    category: 'Industrial',
    location: 'Chitungwiza, Zimbabwe',
    value: '$650K',
    valueNumeric: 650000,
    duration: '9 months',
    completionDate: '28/02/2026',
    status: 'Ongoing',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13d7e05ba-1768082738298.png",
    alt: 'Large industrial warehouse with steel frame construction and loading docks for logistics operations',
    client: 'Zimbabwe Logistics Ltd',
    description: 'Modern warehouse and distribution center with advanced material handling systems, cold storage facilities, and office spaces. Optimized for efficient logistics operations.',
    highlights: ['Cold storage', 'Loading docks', 'Security systems', 'Office spaces']
  },
  {
    id: 'medical-center',
    title: 'Community Medical Center',
    category: 'Commercial',
    location: 'Masvingo, Zimbabwe',
    value: '$920K',
    valueNumeric: 920000,
    duration: '15 months',
    completionDate: '10/07/2024',
    status: 'Completed',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_140394415-1767197730336.png",
    alt: 'Modern medical facility with clean white exterior and emergency entrance in healthcare district',
    client: 'Masvingo Health Authority',
    description: 'Comprehensive medical facility including outpatient clinics, diagnostic centers, pharmacy, and emergency services. Designed to international healthcare standards with patient-centered layouts.',
    highlights: ['Modern equipment', 'Emergency services', 'Patient-centered', 'Accessible']
  }];


  const featuredProjects: FeaturedProject[] = [
  {
    id: 'mega-market-harare',
    title: 'Mega Market Harare - Commercial Excellence',
    category: 'Commercial Construction',
    value: '$1.6M',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d0d0e1ea-1767465126516.png",
    alt: 'Panoramic view of completed Mega Market commercial complex with modern glass facade and bustling parking area',
    description: 'Our flagship commercial project showcasing Six Nine Construction\'s capability to deliver large-scale retail infrastructure. The Mega Market Harare project transformed a vacant lot into a thriving commercial hub serving thousands of customers daily. This project exemplifies our commitment to quality, timely delivery, and client satisfaction.',
    achievements: [
    'Delivered 2 weeks ahead of schedule despite challenging weather conditions',
    'Achieved LEED Silver certification for sustainable building practices',
    'Zero safety incidents throughout 18-month construction period',
    'Implemented innovative structural solutions reducing costs by 12%',
    'Created 150+ local employment opportunities during construction']

  },
  {
    id: 'africa-university-maize',
    title: 'Africa University Maize Milling - Industrial Innovation',
    category: 'Industrial Construction',
    value: '$256K',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11967ec0f-1768235282816.png",
    alt: 'Interior view of Africa University maize milling facility showing automated processing equipment and quality control systems',
    description: 'A testament to our industrial construction expertise, this state-of-the-art maize milling facility combines educational functionality with commercial viability. Working closely with Africa University, we delivered a facility that serves as both a teaching resource and a revenue-generating asset for the institution.',
    achievements: [
    'Integrated automated processing systems with 95% efficiency rating',
    'Designed flexible spaces accommodating both education and production',
    'Completed within 8-month timeline with zero budget overruns',
    'Implemented comprehensive safety protocols exceeding industry standards',
    'Established quality control laboratories meeting international standards']

  },
  {
    id: 'alrosa-mining',
    title: 'Alrosa Mining Infrastructure - Heavy Industrial Mastery',
    category: 'Mining & Heavy Industrial',
    value: '$2.1M',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d0793f0-1767080257287.png",
    alt: 'Aerial view of Alrosa mining infrastructure showing processing facilities and worker accommodation in industrial setting',
    description: 'Our largest and most complex project to date, the Alrosa Mining Infrastructure demonstrates Six Nine Construction\'s capability to handle multi-million dollar heavy industrial projects. This comprehensive development included processing facilities, administrative buildings, worker accommodation, and extensive civil works in challenging terrain.',
    achievements: [
    'Successfully managed $2.1M budget with transparent financial reporting',
    'Coordinated 200+ workers across multiple construction phases',
    'Implemented advanced safety systems resulting in exemplary safety record',
    'Delivered heavy-duty structures designed for 50+ year operational life',
    'Completed extensive civil works including roads, drainage, and utilities']

  }];


  const timeline: TimelineEvent[] = [
  {
    year: '2026',
    quarter: 'Q1',
    projects: [
    { title: 'Hillcrest Residential Development', value: '$890K', status: 'Ongoing' },
    { title: 'St. Mary\'s School Expansion', value: '$420K', status: 'Ongoing' },
    { title: 'Logistics Warehouse Complex', value: '$650K', status: 'Ongoing' }]

  },
  {
    year: '2025',
    quarter: 'Q4',
    projects: [
    { title: 'Mega Market Harare', value: '$1.6M', status: 'Completed' },
    { title: 'Africa University Maize Milling', value: '$256K', status: 'Completed' },
    { title: 'Government Office Complex', value: '$1.3M', status: 'Completed' }]

  },
  {
    year: '2024',
    quarter: 'Q3',
    projects: [
    { title: 'Victoria Falls Hotel Renovation', value: '$780K', status: 'Completed' },
    { title: 'Community Medical Center', value: '$920K', status: 'Completed' }]

  },
  {
    year: '2024',
    quarter: 'Q2',
    projects: [
    { title: 'Alrosa Mining Infrastructure', value: '$2.1M', status: 'Completed' }]

  }];


  const testimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Tendai Moyo',
    clientRole: 'Operations Director',
    company: 'Mega Market Corporation',
    projectName: 'Mega Market Harare',
    rating: 5,
    testimonial: 'Six Nine Construction exceeded our expectations in every way. Their attention to detail, commitment to timelines, and professional approach made our $1.6M project a resounding success. The team handled complex challenges with expertise and kept us informed throughout the entire process. We couldn\'t be happier with the final result.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_138e07571-1763295086046.png",
    alt: 'Professional African businessman in navy suit smiling confidently in modern office setting',
    projectValue: '$1.6M'
  },
  {
    id: '2',
    clientName: 'Dr. Chipo Ndlovu',
    clientRole: 'Vice Chancellor',
    company: 'Africa University',
    projectName: 'Maize Milling Facility',
    rating: 5,
    testimonial: 'Working with Six Nine Construction on our maize milling facility was an absolute pleasure. They understood our unique requirements as an educational institution and delivered a facility that serves both our teaching and commercial needs perfectly. The project was completed on time and within budget, which is rare in our experience.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3f1aeb1-1763298919911.png",
    alt: 'Professional African woman in business attire with warm smile in academic office environment',
    projectValue: '$256K'
  },
  {
    id: '3',
    clientName: 'Sergei Volkov',
    clientRole: 'Project Manager',
    company: 'Alrosa Zimbabwe',
    projectName: 'Mining Infrastructure',
    rating: 5,
    testimonial: 'SNC demonstrated exceptional capability in handling our complex $2.1M mining infrastructure project. Their expertise in heavy industrial construction, combined with their understanding of local conditions, resulted in a facility that exceeds international standards. The safety record throughout the project was exemplary, and the quality of work is outstanding.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_171b8b612-1765822393812.png",
    alt: 'Experienced Caucasian male engineer in safety vest and hard hat at industrial construction site',
    projectValue: '$2.1M'
  },
  {
    id: '4',
    clientName: 'Rudo Makoni',
    clientRole: 'Property Development Manager',
    company: 'Hillcrest Properties Ltd',
    projectName: 'Hillcrest Residential',
    rating: 5,
    testimonial: 'The ongoing Hillcrest project showcases SNC\'s excellence in residential construction. Their attention to luxury finishes, modern amenities, and sustainable design has impressed both our team and prospective buyers. The project management is transparent, and they consistently meet milestones. We look forward to the completion of this premium development.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1024e6707-1763299086310.png",
    alt: 'Professional African woman in elegant business suit standing in modern residential property showroom',
    projectValue: '$890K'
  }];


  const stats: Stat[] = [
  {
    icon: 'BuildingOffice2Icon',
    value: '10+',
    label: 'Projects Completed',
    description: 'Successfully delivered projects across commercial, residential, industrial, and civil engineering sectors'
  },
  {
    icon: 'CurrencyDollarIcon',
    value: '$5M+',
    label: 'Total Project Value',
    description: 'Cumulative value of projects delivered since 2019, demonstrating financial capability and trust'
  },
  {
    icon: 'CheckBadgeIcon',
    value: '98%',
    label: 'On-Time Delivery',
    description: 'Industry-leading completion rate with projects delivered on schedule and within budget'
  },
  {
    icon: 'FaceSmileIcon',
    value: '100%',
    label: 'Client Satisfaction',
    description: 'Perfect satisfaction score from clients who would recommend our services to others'
  }];


  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ProjectHero totalProjects={50} totalValue="$12M+" completionRate={98} />
        <FeaturedProjects projects={featuredProjects} />
        <ProjectsInteractive initialProjects={allProjects} />
        <ProjectTimeline timeline={timeline} />
        
        <ProjectStats stats={stats} />
        <ProjectCTA />
      </main>
      <Footer />
    </>);

}