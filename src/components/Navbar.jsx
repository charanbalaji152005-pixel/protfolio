import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Sun, Moon, Send } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section spy
      const sections = ['home', 'about', 'education', 'projects', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Resume', href: '#resume', id: 'resume' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <nav className={`navbar-custom ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container d-flex align-items-center justify-content-between">
          {/* Brand Logo */}
          <a href="#home" className="brand-logo">
            <span className="brand-badge">CB</span>
            <span>{personalInfo.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links-desktop">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`nav-item-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(link.id)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Action buttons (Theme Toggle & Contact CTA) */}
          <div className="d-flex align-items-center gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="#contact" className="btn-modern-primary d-none d-lg-inline-flex" style={{ padding: '9px 20px', fontSize: '0.88rem' }}>
              <Send size={15} />
              <span>Get in Touch</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-btn d-lg-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={`nav-item-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => {
              setActiveSection(link.id);
              setMobileMenuOpen(false);
            }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-modern-primary mt-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Send size={16} />
          <span>Contact Me</span>
        </a>
      </div>
    </>
  );
}
