'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
  MenuIcon,
  CloseIcon,
  ArrowRightIcon,
} from './Icons';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenQuote) {
      onOpenQuote();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* 1. Top Contact Bar */}
      <div className="top-contact-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <a href="tel:+19724000019" className="top-bar-item">
              <PhoneIcon className="w-3.5 h-3.5 top-bar-icon" />
              <span>+1 972-400-0019</span>
            </a>
            <span className="top-bar-divider" aria-hidden="true">|</span>
            <a href="mailto:info@codexstream.com" className="top-bar-item">
              <MailIcon className="w-3.5 h-3.5 top-bar-icon" />
              <span>info@codexstream.com</span>
            </a>
          </div>

          <div className="top-bar-right">
            <span className="top-bar-follow">Follow Us:</span>
            <div className="top-bar-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="top-social-link" aria-label="Facebook">
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="top-social-link" aria-label="Twitter / X">
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="top-social-link" aria-label="LinkedIn">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="top-social-link" aria-label="YouTube">
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Sticky Navigation Bar */}
      <header className={`navbar-header ${isScrolled ? 'navbar-sticky' : ''}`}>
        <div className="container navbar-container">
          {/* Logo with official CODEXSTREAM branding */}
          <a href="#home" className="navbar-brand">
            <Image
              src="/images/logo.png"
              alt="CODEXSTREAM"
              width={200}
              height={50}
              className="navbar-logo-img"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="navbar-nav" aria-label="Main Navigation">
            <a
              href="#home"
              className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`}
            >
              About Us
            </a>
            <a
              href="#services"
              className={`navbar-link ${activeSection === 'services' ? 'active' : ''}`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={`navbar-link ${activeSection === 'portfolio' ? 'active' : ''}`}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`}
            >
              Contact Us
            </a>
          </nav>

          {/* Right Action: Get a Quote */}
          <div className="navbar-actions">
            <button
              type="button"
              className="btn-quote-nav"
              onClick={handleQuoteClick}
            >
              <span>Get a Quote</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="btn-mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="mobile-menu-drawer">
            <div className="container mobile-menu-inner">
              <a
                href="#home"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#services"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </a>
              <button
                type="button"
                className="btn-quote-mobile"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  handleQuoteClick(e);
                }}
              >
                <span>Get a Quote</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
