'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const offset = 100; // Offset for fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Close mobile menu after clicking
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full bg-white z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md py-2' : 'shadow-sm py-3'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image 
            src="/tarenologo.png" 
            alt="Tareno S.A. Logo" 
            width={120} 
            height={40}
            className="h-auto"
            priority
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-[#0a2e74] transition-colors text-base">
            About
          </a>
          <a href="#asset-management" onClick={(e) => handleNavClick(e, 'asset-management')} className="hover:text-[#0a2e74] transition-colors text-base">
            Asset Management
          </a>
          <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="hover:text-[#0a2e74] transition-colors text-base">
            Testimonials
          </a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-[#0a2e74] transition-colors text-base">
            Services
          </a>
          <a href="#case-studies" onClick={(e) => handleNavClick(e, 'case-studies')} className="hover:text-[#0a2e74] transition-colors text-base">
            Case Studies
          </a>
          <a href="#news-insights" onClick={(e) => handleNavClick(e, 'news-insights')} className="hover:text-[#0a2e74] transition-colors text-base">
            News & Insights
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-[#0a2e74] transition-colors text-base">
            Contact
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Mobile Menu Toggle */}
          <button 
            className="outline-none text-[#0a2e74]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-[#0a2e74] transition-colors text-base py-2">
              About
            </a>
            <a href="#asset-management" onClick={(e) => handleNavClick(e, 'asset-management')} className="hover:text-[#0a2e74] transition-colors text-base py-2">
              Asset Management
            </a>
            <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')} className="hover:text-[#0a2e74] transition-colors text-base py-2">
              Testimonials
            </a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-[#0a2e74] transition-colors text-base py-2">
              Services
            </a>
            <a href="#case-studies" onClick={(e) => handleNavClick(e, 'case-studies')} className="hover:text-[#0a2e74] transition-colors text-base py-2">
              Case Studies
            </a>
            <a href="#news-insights" onClick={(e) => handleNavClick(e, 'news-insights')} className="hover:text-[#0a2e74] transition-colors text-base py-2">
              News & Insights
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-[#0a2e74] transition-colors text-base py-2">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
