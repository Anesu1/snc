'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '../ui/AppIcon';
import Image from 'next/image';

interface NavigationItem {
  name: string;
  href: string;
  icon?: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/homepage', icon: 'HomeIcon' },
    { name: 'About', href: '/about', icon: 'InformationCircleIcon' },
    { name: 'Services', href: '/services', icon: 'WrenchScrewdriverIcon' },
    { name: 'Projects', href: '/projects', icon: 'RectangleStackIcon' },
  ];



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-card shadow-construction' : 'bg-card'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/homepage" className="flex items-center space-x-3 group" onClick={closeMobileMenu}>
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-105">
              <Image src="/logo.png" alt="Six Nine Construction Logo" fill className="object-contain" />
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-headline font-bold text-primary leading-tight">
                Six Nine Construction
              </div>
              <div className="text-xs font-mono text-textSecondary tracking-wide">
                Building Zimbabwe's Future
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground shadow-construction'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}

           
           
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/get-quote"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-accent text-accent-foreground rounded-md font-headline font-semibold text-sm shadow-construction hover:shadow-construction-lg transition-all duration-300 hover:scale-105 animate-pulse-subtle"
            >
              <Icon name="DocumentTextIcon" size={20} />
              <span>Get Free Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {[...navigationItems].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMobileMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground shadow-construction'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                {item.icon && <Icon name={item.icon as any} size={20} />}
                <span>{item.name}</span>
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/get-quote"
              onClick={closeMobileMenu}
              className="flex items-center justify-center space-x-2 w-full px-4 py-3 mt-4 bg-accent text-accent-foreground rounded-md font-headline font-semibold text-sm shadow-construction"
            >
              <Icon name="DocumentTextIcon" size={20} />
              <span>Get Free Quote</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;