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
    heroImage: "https://images.unsplash.com/photo-1516122525-233a985caa45",
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
    content: "To be Zimbabwe's most trusted construction partner, recognized for transforming ambitious visions into enduring structures that shape communities and drive economic growth. We envision a future where every project we undertake becomes a landmark of quality, innovation, and sustainable development.",
    icon: "EyeIcon",
    color: "bg-primary"
  },
  {
    title: "Our Mission",
    content: "Bringing construction dreams to life through unwavering commitment to excellence, transparency, and client satisfaction. Every project is a testament to our dedication to quality craftsmanship, timely delivery, and building lasting relationships with our clients, partners, and communities.",
    icon: "RocketLaunchIcon",
    color: "bg-accent"
  }];


  const teamMembers: TeamMember[] = [
  {
    name: "Cosmas Munyoro",
    position: "Chief Executive Officer",
    expertise: "Strategic Leadership & Business Development",
    bio: "With over 15 years of construction industry experience, Cosmas leads SNC's strategic vision and client relationships. His expertise in large-scale project management and business development has positioned SNC as Zimbabwe's premier construction innovator.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_138e07571-1763295086046.png",
    imageAlt: "Professional African businessman in navy suit with confident smile in modern office setting",
    credentials: [
    "MBA in Construction Management",
    "Certified Project Management Professional (PMP)",
    "15+ years construction industry experience",
    "Led USD 10M+ in project delivery"],

    email: "cosmas@sncconstruction.co.zw",
    phone: "+263 123 456 789"
  },
  {
    name: "Clive Chikwanha",
    position: "Chief Operations Officer",
    expertise: "Operations Management & Technical Excellence",
    bio: "Clive oversees all operational aspects of SNC's projects, ensuring quality standards and timely delivery. His technical expertise and attention to detail have been instrumental in maintaining SNC's reputation for excellence.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b5408773-1763295371393.png",
    imageAlt: "Professional African man in gray suit with engineering blueprints in construction office",
    credentials: [
    "BSc Civil Engineering",
    "Chartered Engineer (CEng)",
    "12+ years operational leadership",
    "Safety & Quality Management Certified"],

    email: "clive@sncconstruction.co.zw",
    phone: "+263 123 456 790"
  },
  {
    name: "Gloria Mapfumo",
    position: "Chief Financial Officer",
    expertise: "Financial Strategy & Compliance",
    bio: "Gloria manages SNC's financial operations, ensuring fiscal responsibility and regulatory compliance. Her strategic financial planning has enabled SNC to undertake increasingly ambitious projects while maintaining financial stability.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13f6f0de1-1763295015458.png",
    imageAlt: "Professional African businesswoman in burgundy blazer with confident expression in corporate office",
    credentials: [
    "CA(Z) Chartered Accountant",
    "MBA in Finance",
    "10+ years financial leadership",
    "ZIMRA Compliance Expert"],

    email: "gloria@sncconstruction.co.zw",
    phone: "+263 123 456 791"
  }];


  const cultureValues: CultureValue[] = [
  {
    title: "Excellence",
    description: "We pursue the highest standards in every aspect of our work, from initial planning to final delivery. Excellence is not just a goal—it's our standard operating procedure.",
    icon: "StarIcon"
  },
  {
    title: "Integrity",
    description: "Transparency and honesty guide every decision we make. We build trust through consistent ethical practices and open communication with all stakeholders.",
    icon: "ShieldCheckIcon"
  },
  {
    title: "Innovation",
    description: "We embrace cutting-edge construction techniques and technologies while respecting traditional craftsmanship. Innovation drives our competitive advantage.",
    icon: "LightBulbIcon"
  },
  {
    title: "Community",
    description: "Every project contributes to Zimbabwe's development. We're committed to local employment, skills development, and sustainable community impact.",
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
      <LeadershipTeamSection teamMembers={teamMembers} />
      <CompanyCultureSection
        values={cultureValues}
        communityImage="https://images.pixabay.com/photo/2016/11/29/03/36/architecture-1867187_1280.jpg"
        communityImageAlt="Diverse group of construction workers and engineers collaborating on building site with modern equipment"
        communityImpact={communityImpact} />

      <CertificationsSection certifications={certifications} />
    </div>);

};

export default AboutInteractive;