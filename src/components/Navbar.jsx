import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <div className="navbar-logo-icon">
            <GraduationCap size={24} />
          </div>
          <span className="navbar-logo-text">
            LGU <span className="navbar-logo-accent">GradFlow</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li><a href="#features">Features</a></li>
          <li><a href="#dashboards">Dashboards</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>

        {/* CTA Buttons */}
        <div className="navbar-actions">
          <button className="btn">Log In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <a href="#features">Features</a>
          <a href="#dashboards">Dashboards</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
          <hr />
          <button className="btn btn-outline">Log In</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
