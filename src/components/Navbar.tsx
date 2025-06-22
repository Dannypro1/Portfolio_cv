
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12",
      scrolled ? "bg-tech-blue/95 py-3 shadow-lg backdrop-blur-sm" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-2xl font-mono text-tech-teal">
         <span className="container mx-auto"></span> H<span className="text-white">D</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}>
                <a href={link.href} className="nav-link">
                  <span className="text-tech-teal mr-1">{index + 1}.</span> {link.name}
                </a>
              </li>
            ))}
            <li className="opacity-0 animate-fade-in" style={{ animationDelay: `500ms`, animationFillMode: 'forwards' }}>
              <a 
                href="src/assets/CV Danny.Hategekimana.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 border border-tech-teal rounded text-tech-teal text-sm font-mono hover:bg-tech-teal/10 transition-colors"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-tech-teal" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 bg-tech-blue/95 z-50 flex flex-col justify-center items-center transition-all duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <button 
            className="absolute top-6 right-6 text-tech-teal"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav>
            <ul className="flex flex-col space-y-6 items-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-xl font-mono text-tech-light-blue hover:text-tech-teal transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-tech-teal mr-1">{index + 1}.</span> {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a 
                  href="src/assets/CV Danny.Hategekimana.pdf"
                  //target="_blank"
                  rel="noopener noreferrer" 
                  className="px-6 py-3 border border-tech-teal rounded text-tech-teal font-mono hover:bg-tech-teal/10 transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
