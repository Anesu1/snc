'use client';

import { useEffect, useState } from 'react';
import HeroSection from './HeroSection';
import FoundingStorySection from './FoundingStorySection';
import VisionMissionSection from './VisionMissionSection';
import LeadershipTeamSection from './LeadershipTeamSection';
import CompanyCultureSection from './CompanyCultureSection';
import CertificationsSection from './CertificationsSection';


interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface VisionMissionItem {
  title: string;
  content: string;
  icon: string;
  color: string;
}

interface TeamMember {
  name: string;
  position: string;
  expertise: string;
  bio: string;
  image: string;
  imageAlt: string;
  credentials: string[];
  email: string;
  phone: string;
}

interface CultureValue {
  title: string;
  description: string;
  icon: string;
}

interface Certification {
  title: string;
  number: string;
  issuer: string;
  issueDate: string;
  expiryDate: string;
  status: string;
  description: string;
  icon: string;
}

const AboutInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const heroData = {
    title: "Building Zimbabwe\'s Future Since 2019",
    subtitle: "About Six Nine Construction",
    description: "The perfect fusion of Zimbabwean craftsmanship heritage and cutting-edge construction innovation. We represent unwavering reliability in an industry where trust is everything.",
    heroImage: "/images/about/hero.webp",
    heroImageAlt: "Modern construction site with steel framework and workers in safety gear against blue sky"
  };

  const foundingStory = "Founded in 2019 with incorporation number 11284/2019, Six Nine Construction emerged from a vision to transform Zimbabwe's construction landscape. Our founders recognized the need for a construction partner that combines local expertise with international standards, delivering projects that stand as testaments to quality, reliability, and innovation. From our first project to today's multi-million dollar developments, we've maintained our commitment to bringing construction dreams to life.";

  const milestones: Milestone[] = [
  {
    year: "2019",
    title: "Company Incorporation",
    description: "Six Nine Construction officially incorporated (11284/2019) with ZIMRA tax clearance ITF263, establishing our foundation for excellence.",
    icon: "BuildingOfficeIcon"
  },
  {
    year: "2020",
    title: "First Major Project",
    description: "Successfully completed our first commercial construction project, setting the standard for quality and timely delivery.",
    icon: "WrenchScrewdriverIcon"
  },
  {
    year: "2021",
    title: "Mining Sector Entry",
    description: "Expanded into mining infrastructure with Alrosa partnership, demonstrating versatility and technical capability.",
    icon: "CubeIcon"
  },
  {
    year: "2022",
    title: "Educational Excellence",
    description: "Delivered Africa University project, showcasing our commitment to community development and educational infrastructure.",
    icon: "AcademicCapIcon"
  },
  {
    year: "2023",
    title: "Retail Milestone",
    description: "Completed USD 1.6M Mega Market project, our largest retail construction achievement to date.",
    icon: "ShoppingBagIcon"
  },
  {
    year: "2024",
    title: "Dreamcast Partnership",
    description: "Formed strategic alliance with Dreamcast for plant hire and earthmoving services, expanding our service portfolio.",
    icon: "TruckIcon"
  }];


  const visionMissionItems: VisionMissionItem[] = [
  {
    title: "Our Vision",
    content: "Our vision is to be the benchmark of excellence in the construction industry, setting new standards for quality, innovation, and client satisfaction. We aspire to be the preferred choice for clients seeking construction services, renowned for our unwavering commitment to delivering exceptional projects that transform communities and leave a lasting impact",
    icon: "EyeIcon",
    color: "bg-primary"
  },
  {
    title: "Our Mission",
    content: `Our mission is to be the construction company of choice in Zimbabwe, 
recognized for our unwavering commitment to quality, reliability, and 
customer satisfaction. We aim to exceed client expectations by delivering 
innovative, sustainable, and cost-effective construction solutions that 
enhance the built environment and contribute to the growth and 
development of our nation.`,
    icon: "RocketLaunchIcon",
    color: "bg-accent"
  }];


 


  const cultureValues: CultureValue[] = [
  {
    title: "INNOVATION AND ADAPTABILITY ",
    description: `We continuously seek new ways to 
improve our construction processes, techniques and technologies. 
Ensuring that our clients benefit from the latest innovations in design, 
sustainability and construction methodologies.`,
    icon: "StarIcon"
  },
  {
    title: "CLIENT-CENTRIC APPROACH ",
    description: `At the core of our vision is a deep 
commitment to our clients. We aim to build strong, long-lasting 
relationships by understanding their unique needs, exceeding their 
expectations, and delivering projects that align with their vision and goals.`,
    icon: "ShieldCheckIcon"
  },
  {
    title: "COMMITMENT",
    description: `We are committed to making a positive impact on the 
communities in which we operate. Our vision includes actively engaging
 with local stakeholders, contributing to social and economic development, 
and creating infrastructure that enhances the quality of life for residents.`,
    icon: "LightBulbIcon"
  },
  {
    title: "TEAM WORK",
    description: `We believe in working together in a way that takes 
advantage of each team member’s unique strengths to achieve something 
that exceeds the cumulative results that one could ever have achieved.`,
    icon: "UserGroupIcon"
  }];


  const communityImpact = "Since our founding, we've been dedicated to building more than structures—we're building Zimbabwe's future. Our projects create employment opportunities, develop local skills, and contribute to community infrastructure. We celebrate our Zimbabwean heritage while maintaining international standards, ensuring that every project strengthens both our economy and our communities. Through partnerships with local suppliers and commitment to skills transfer, we're investing in the next generation of Zimbabwean construction professionals.";

  const certifications: Certification[] = [
  {
    title: "Company Incorporation",
    number: "11284/2019",
    issuer: "Zimbabwe Companies Registry",
    issueDate: "15/03/2019",
    expiryDate: "Permanent",
    status: "Active",
    description: "Official company incorporation certificate establishing Six Nine Construction as a registered legal entity in Zimbabwe, authorized to conduct construction and civil engineering business operations.",
    icon: "BuildingOfficeIcon"
  },
  {
    title: "ZIMRA Tax Clearance",
    number: "ITF263",
    issuer: "Zimbabwe Revenue Authority",
    issueDate: "01/01/2024",
    expiryDate: "31/12/2024",
    status: "Active",
    description: "Current tax clearance certificate demonstrating full compliance with Zimbabwe Revenue Authority requirements, essential for government contracts and large-scale projects.",
    icon: "DocumentCheckIcon"
  },
  {
    title: "ISO 9001:2015 Quality Management",
    number: "ISO-ZW-2023-0847",
    issuer: "International Standards Organization",
    issueDate: "10/06/2023",
    expiryDate: "10/06/2026",
    status: "Active",
    description: "International quality management system certification ensuring consistent delivery of high-quality construction services meeting client and regulatory requirements.",
    icon: "CheckBadgeIcon"
  },
  {
    title: "Construction Safety Certification",
    number: "CSC-ZW-2024-156",
    issuer: "Zimbabwe Construction Safety Board",
    issueDate: "15/02/2024",
    expiryDate: "15/02/2025",
    status: "Active",
    description: "Comprehensive safety certification covering all aspects of construction site safety, worker protection, and emergency response protocols.",
    icon: "ShieldCheckIcon"
  },
  {
    title: "Professional Indemnity Insurance",
    number: "PII-SNC-2024-789",
    issuer: "Zimbabwe Insurance Corporation",
    issueDate: "01/01/2024",
    expiryDate: "31/12/2024",
    status: "Active",
    description: "Professional indemnity insurance coverage protecting clients against potential construction defects, design errors, and professional negligence claims.",
    icon: "DocumentTextIcon"
  },
  {
    title: "Contractor License Grade A",
    number: "CL-A-2023-445",
    issuer: "Zimbabwe Construction Industry Council",
    issueDate: "20/08/2023",
    expiryDate: "20/08/2026",
    status: "Active",
    description: "Highest grade contractor license authorizing Six Nine Construction to undertake unlimited value construction projects across all categories in Zimbabwe.",
    icon: "ClipboardDocumentCheckIcon"
  }];


  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-20">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-muted rounded-lg"></div>
            <div className="h-64 bg-muted rounded-lg"></div>
            <div className="h-64 bg-muted rounded-lg"></div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection {...heroData} />
      <FoundingStorySection story={foundingStory} milestones={milestones} />
      <VisionMissionSection items={visionMissionItems} />
      <CompanyCultureSection
        values={cultureValues}
        communityImage="/images/about/community.webp"
        communityImageAlt="Diverse group of construction workers and engineers collaborating on building site with modern equipment"
        communityImpact={communityImpact} />

      {/* <CertificationsSection certifications={certifications} /> */}
    </div>);

};

export default AboutInteractive;