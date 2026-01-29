'use client';

import Link from 'next/link';
import Icon from '../ui/AppIcon';
import Image from 'next/image';
import { FaFacebook } from 'react-icons/fa';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Services', href: '/services' },
        { name: 'Projects', href: '/projects' },
        { name: 'Careers', href: '/careers' },
        { name: 'Get Quote', href: '/get-quote' },
      ],
    },
    // {
    //   title: 'Services',
    //   links: [
    //     { name: 'Commercial Construction', href: '/services#commercial' },
    //     { name: 'Residential Projects', href: '/services#residential' },
    //     { name: 'Mining Infrastructure', href: '/services#mining' },
    //     { name: 'Government Contracts', href: '/services#government' },
    //   ],
    // },
    // {
    //   title: 'Resources',
    //   links: [
    //     { name: 'Client Portal', href: '/client-portal' },
    //     { name: 'Project Planning Guide', href: '/resources/planning' },
    //     { name: 'Cost Calculator', href: '/resources/calculator' },
    //     { name: 'FAQs', href: '/resources/faq' },
    //   ],
    // },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', href: 'https://www.facebook.com/sixnineconstruction' },
    
  ];

  const certifications = [
    'ZIMRA Compliant',
    'ISO 9001:2015',
    'Safety Certified',
    'Licensed Contractor',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/homepage" className="inline-flex items-center space-x-3 mb-4 group">
              <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
               <Image src="/logo.png" alt="Six Nine Construction Logo" fill className="object-contain" />
              </div>
              <div>
                <div className="text-lg font-headline font-bold leading-tight">
                  Six Nine Construction
                </div>
                <div className="text-xs font-mono opacity-80 tracking-wide">
                  Building Zimbabwe's Future
                </div>
              </div>
            </Link>

            <p className="text-sm max-w-[500px] opacity-90 mb-4 leading-relaxed">
              Zimbabwe's premier construction innovator delivering USD 2M+ projects with precision,
              transparency, and unwavering commitment to excellence since 2015.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <a
                href="tel:+263772285499"
                className="flex items-center space-x-2 hover:text-accent transition-colors duration-200"
              >
                <Icon name="PhoneIcon" size={18} />
                <span> +263 77 100 1750 
 / +263 77 100 1577 / 0202 065 845</span>
              </a>
              <a
                href="mailto:info@snc.co.zw"
                className="flex items-center space-x-2 hover:text-accent transition-colors duration-200"
              >
                <Icon name="EnvelopeIcon" size={18} />
                <span>info@snc.co.zw / cosmas@snc.co.zw</span>
              </a>
              <div className="flex items-start space-x-2">
                <Icon name="MapPinIcon" size={18} className="mt-0.5 flex-shrink-0" />
                <span>No. 4 Kariba Rd Nyakamete, Industrial Area, Mutare Zimbabwe</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  className="w-10 h-10 rounded-md bg-white bg-opacity-10 flex items-center justify-center hover:bg-accent transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <FaFacebook />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-base font-headline font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white border-opacity-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm opacity-80">
              © {currentYear} Six Nine Construction. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="opacity-80 hover:opacity-100 hover:text-accent transition-all duration-200"
              >
                Terms of Service
              </Link>
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
