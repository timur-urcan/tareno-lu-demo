'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../lib/LanguageContext';

interface NavbarProps {
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentLanguage } = useLanguage();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Offset for fixed navbar
      const navbarHeight = 70;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Get language flag emoji
  const getLanguageFlag = (code: string) => {
    switch (code) {
      case 'en': return '🇬🇧';
      case 'de': return '🇩🇪';
      case 'fr': return '🇫🇷';
      case 'nl': return '🇳🇱';
      default: return '🇬🇧';
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
        <div className="hidden md:flex space-x-8 items-center">
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
          
          {/* Language Selector */}
          <button className="flex items-center justify-center text-[#0a2e74] cursor-default" aria-label="Language icon" disabled>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {/* Mobile Language Selector */}
          <button className="flex items-center justify-center text-[#0a2e74] cursor-default" aria-label="Current language" disabled>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm">{getLanguageFlag(currentLanguage)}</span>
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="outline-none text-[#0a2e74]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
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
