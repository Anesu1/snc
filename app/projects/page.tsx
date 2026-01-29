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
  images: string[];
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
      id: "1",
      title: "Hillcrest College Boys Hostel Construction",
      client: "Hillcrest College",
      description: "Construction of a new institutional residential facility, demonstrating structural progress from foundation to near completion of a major section.",
      category: "Commercial",
      location: "Hillcrest",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "May - Jul 2024",
      completionDate: "2024-07-31",
      status: "Ongoing",
      highlights: [
        "11 weeks of consistent progress tracking",
        "Focus on educational infrastructure",
        "Recent construction activity in July 2024"
      ],
      image: "/images/projects/hill.webp",
      alt: "Hillcrest College Boys Hostel Construction",
      images: ["/images/projects/hill.webp", "/images/projects/hillcrest1.webp", "/images/projects/hillcrest2.webp", "/images/projects/hillcrest3.webp", "/images/projects/hillcrest4.webp", "/images/projects/hillcrest5.webp", "/images/projects/hillcrest6.webp"]
    },
    {
      id: "2",
      title: "Mega Market Flour Mill Substation",
      client: "Mega Market / Industrial Partner",
      description: "Design and construction of critical electrical infrastructure (substation) to ensure a stable, high-capacity power supply for a large industrial/commercial user.",
      category: "Industrial",
      location: "Mega Market Complex",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "Apr - Jul 2022",
      completionDate: "2022-07-31",
      status: "Completed",
      highlights: [
        "Specialized electrical infrastructure",
        "Rapid civil works completion",
        "Installation of major electrical components"
      ],
      image: "/images/projects/mega-mill2.webp",
      alt: "Mega Market Flour Mill Substation",
      images: ["/images/projects/mega-mill1.webp", "/images/projects/mega-mill2.webp", "/images/projects/mega-mill3.webp", "/images/projects/mega-mill4.webp", "/images/projects/mega-mill5.webp" ]
    },
    {
      id: "2a",
      title: "Mega Market Retaining Walls",
      client: "Mega Market / Industrial Partner",
      description: "Construction of substantial retaining walls to support site grading and infrastructure for the Mega Market complex, ensuring stability and proper drainage.",
      category: "Civil Engineering",
      location: "Mega Market Complex",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "Apr - May 2022",
      completionDate: "2022-05-31",
      status: "Completed",
      highlights: [
        "Specialized civil engineering works",
        "Rapid construction timeline",
        "Critical support for overall site infrastructure"
      ],
      image: "/images/projects/retaining-walls.webp",
      alt: "Mega Market Retaining Walls",
      images: ["/images/projects/retaining-walls.webp", "/images/projects/retaining1.webp", "/images/projects/retaining2.webp", "/images/projects/retaining3.webp", "/images/projects/retaining4.webp", "/images/projects/retaining5.webp"]
    },
    {
      id: "2b",
      title: "Mega Market Storm Water Drainage",
      client: "Mega Market / Industrial Partner",
      description: "Installation of storm water drainage systems to manage runoff and prevent flooding at the Mega Market site, ensuring compliance with environmental and safety standards.",
      category: "Civil Engineering",
      location: "Mega Market Complex",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "Apr - May 2022",
      completionDate: "2022-05-31",
      status: "Completed",
      highlights: [
        "Effective storm water management solutions",
        "Rapid installation timeline",
        "Enhancement of site safety and environmental compliance"
      ],
      image: "/images/projects/storm-water-drain.webp",
      alt: "Mega Market Storm Water Drainage",
      images: ["/images/projects/storm-water-drain.webp", "/images/projects/storm-water1.webp", "/images/projects/storm-water2.webp", "/images/projects/storm-water3.webp", "/images/projects/storm-water4.webp", "/images/projects/storm-water5.webp"]
    },
    {
      id: "2c",
      title: "Mega Market Transport Yard",
      client: "Mega Market / Industrial Partner",
      description: "Development of a dedicated transport yard to facilitate logistics and vehicle movement for the Mega Market complex, enhancing operational efficiency.",
      category: "Civil Engineering",
      location: "Mega Market Complex",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "Apr - May 2022",
      completionDate: "2022-05-31",
      status: "Completed",
      highlights: [
        "Optimized logistics infrastructure",
      ],
      image: "/images/projects/transport-yard.webp",
      alt: "Mega Market Transport Yard",
      images: ["/images/projects/transport-yard.webp", "/images/projects/transport-yard1.webp", "/images/projects/transport-yard2.webp", "/images/projects/transport-yard3.webp", "/images/projects/transport-yard4.webp", "/images/projects/transport-yard5.webp"]
    },
    {
      id: "2d",
      title: "Mega Market Transport Yard Ablution",
      client: "Mega Market / Industrial Partner",
      description: "Construction of ablution facilities within the Mega Market transport yard, providing essential amenities for staff and drivers.",
      category: "Commercial",
      location: "Mega Market Complex",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "Apr - May 2022",
      completionDate: "2022-05-31",
      status: "Completed",
      highlights: [
        "Essential staff amenities",
      ],
      image: "/images/projects/transport-yard-ablution.webp",
      alt: "Mega Market Transport Yard Ablution",
      images: ["/images/projects/transport-yard-ablution.webp", "/images/projects/yard-ablution1.webp", "/images/projects/yard-ablution2.webp", "/images/projects/yard-ablution3.webp", "/images/projects/yard-ablution4.webp", "/images/projects/yard-ablution5.webp", "/images/projects/yard-ablution6.webp"]
    },
    {
      id: "3",
      title: "Surrey Pie Shop Renovation",
      client: "Surrey Group",
      description: "Complete internal fit-out and exterior branding renovation of a retail food outlet, transitioning an existing space into a functional and branded deli shop.",
      category: "Commercial",
      location: "Mutare Depot (First Street)",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "Jan - Mar 2024",
      completionDate: "2024-03-31",
      status: "Completed",
      highlights: [
        "Successful retail fit-out and branding",
        "Fast-track project completion",
        "Focus on customer-facing aesthetic"
      ],
      image: "/images/projects/surrey-pie.webp",
      alt: "Surrey Pie Shop Renovation",
      images: ["/images/projects/surrey-pie.webp", "/images/projects/surrey1.webp", "/images/projects/surrey2.webp", "/images/projects/surrey3.webp", "/images/projects/surrey4.webp"]
    },
    {
      id: "4",
      title: "Troutbeck Timeshares Infrastructure",
      client: "Hospitality/Leisure Developer",
      description: "Construction and finishing work on residential/leisure units within a resort area, focusing on quality finishes suitable for the hospitality sector.",
      category: "Residential",
      location: "Troutbeck (Nyanga)",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "Nov 2025",
      completionDate: "2025-11-30",
      status: "Ongoing",
      highlights: [
        "Resort/timeshare development experience",
        "High-altitude construction environment"
      ],
      image: "/images/projects/times.webp",
      alt: "Troutbeck Timeshares Infrastructure",
      images: ["/images/projects/times.webp", "/images/projects/time1.webp", "/images/projects/time2.webp", "/images/projects/time3.webp", "/images/projects/time4.webp", "/images/projects/time5.webp"]
    },
    {
      id: "5",
      title: "General Civil Works - Drainage & Foundations",
      client: "Various",
      description: "Execution of miscellaneous civil engineering tasks, including ground preparation, minor structural support, and drainage infrastructure.",
      category: "Civil Engineering",
      location: "Various",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "Intermittent",
      completionDate: "Not Specified",
      status: "Ongoing",
      highlights: [
        "Versatility in handling diverse civil tasks",
        "Experience with foundations and ground support systems"
      ],
      image: "/images/projects/other.webp",
      alt: "General Civil Works - Drainage & Foundations",
      images: ["/images/projects/other.webp", "/images/projects/others1.webp", "/images/projects/others2.webp", "/images/projects/others3.webp", "/images/projects/others4.webp", "/images/projects/others5.webp", "/images/projects/others6.webp", "/images/projects/others7.webp", "/images/projects/others8.webp"]
    },
    {
      id: "6",
      title: "In-House Plant & Equipment Mobilization",
      client: "Internal Asset Showcase",
      description: "Documentation of the company's internal fleet, confirming ownership and readiness of heavy machinery for industrial and civil projects.",
      category: "Industrial",
      location: "Equipment Yard",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "N/A",
      completionDate: "Not Specified",
      status: "Ongoing",
      highlights: [
        "Demonstrates internal capacity and control over resources",
        "Showcase of heavy earth-moving equipment"
      ],
      image: "/images/projects/plant.webp",
      alt: "In-House Plant & Equipment Mobilization",
      images: ["/images/projects/plant.webp", "/images/projects/plant1.webp", "/images/projects/plant2.webp", "/images/projects/plant3.webp", "/images/projects/plant4.webp"]
    },
    {
      id: "7",
      title: "Padel Court Construction",
      client: "Recreational Facility Developer",
      description: "Construction of specialized sports facilities, focusing on padel courts, which require specific surface preparation and structural considerations.",
      category: "Recreational",
      location: "Various",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "Intermittent",
      completionDate: "Not Specified",
      status: "Ongoing",
      highlights: [
        "Specialized sports facility construction",
        "Experience with recreational infrastructure"
      ],
      image: "/images/projects/padel.webp",
      alt: "Padel Court Construction",
      images: ["/images/projects/padel.webp", "/images/projects/padel1.webp", "/images/projects/padel2.webp", "/images/projects/padel3.webp"]

    },
    {
      id: "8",
      title: "Private Renovation Works",
      client: "Various Private Clients",
      description: "Execution of renovation and refurbishment projects for private residential and commercial clients, focusing on quality finishes and client satisfaction.",
      category: "Residential/Commercial",
      location: "Various",
      value: "Undisclosed",
      valueNumeric: 0,
      duration: "Intermittent",
      completionDate: "Not Specified",
      status: "Ongoing",
      highlights: [
        "Diverse renovation experience",
        "Client-focused project execution"
      ],
      image: "/images/projects/renovations.webp",
      alt: "Private Renovation Works",
      images: ["/images/projects/renovations.webp", "/images/projects/private1.webp", "/images/projects/private2.webp", "/images/projects/private3.webp", "/images/projects/private4.webp"]
    }
  ];


  const featuredProjects: FeaturedProject[] = [

    {
      id: 'hillcrest-college-boys-hostel',
      title: 'Hillcrest College Boys Hostel - Educational Infrastructure Upgrade',
      category: 'Educational Infrastructure',
      value: 'Undisclosed',
      image: '/images/projects/hillcrest.webp',
      alt: 'Hillcrest College Boys Hostel construction progress',
      description: 'Our key project showcasing dedicated progress tracking and on-site delivery for the education sector. The Hillcrest College Boys Hostel project involved the construction or significant renovation of a large-scale student accommodation facility, documented meticulously through visual evidence. This project exemplifies our commitment to consistent documentation, structured site activity, and timely work progression.',
      achievements: [
        '11-week construction progress documented with photos and videos.',
        '25 high-quality photos and 1 video captured for audit trail.',
        'Consistent site activity and well-managed construction timeline.',
        'Transitioned from foundation to near-completion in 3 months.'
      ]
    },
    {
      id: 'mega-market-flour-mill-substation',
      title: 'Mega Market Flour Mill Substation - Critical Power Infrastructure',
      category: 'Industrial Infrastructure',
      value: 'Undisclosed',
      image: '/images/projects/mega-mill.webp',
      alt: 'Mega Market Flour Mill Substation construction progress',
      description: 'Our specialized project demonstrating expertise in electrical power infrastructure development for large-scale industrial and commercial users. The Mega Market Flour Mill Substation project involved the construction and installation of a dedicated substation, ensuring high-capacity, stable power supply to a major facility (likely Mega Market and the associated flour mill). The comprehensive photographic record showcases methodical progress in civil works and electrical component installation. This project exemplifies our commitment to engineering precision and compliance with critical utility standards.',
      achievements: [
        '52 files document progress from civil works to equipment installation.',
        'Rapid civil works completion from April to May 2022.',
        'Successful installation of critical equipment, including transformers.',
        '10-week timeline from site prep to operational readiness.'
      ]
    },
    {
      id: 'surrey-pie-shop-renovations',
      title: 'Surrey Pie Shop Renovations - Retail Outlet Revitalization',
      category: 'Retail Construction',
      value: 'Undisclosed',
      image: '/images/projects/surrey-pie-shop.webp',
      alt: 'Surrey Pie Shop Renovations showcasing vibrant retail outlet',
      description: 'Our focused project showcasing the transformation of an existing retail space into a vibrant and fully functional outlet for the Surrey Group. The Surrey Pie shop renovations project involved the internal and external upgrade of a pie deli shop, with documentation spanning from the initial construction phase to the final branding and operation readiness. This project exemplifies our commitment to high-quality finishing, adherence to client branding standards, and efficient retail build-out timelines.',
      achievements: [
        'Photos document progress from construction to branding (Jan-Mar 2024).',
        'Final exterior features Surrey branding and Mutare Depot details.',
        'Interior progress includes framing, ceiling, and wall preparation.',
        'Project transitioned to a ready-to-operate retail outlet.'
      ]
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
        {/* <ProjectTimeline timeline={timeline} /> */}

        <ProjectStats stats={stats} />
        <ProjectCTA />
      </main>
      <Footer />
    </>);

}