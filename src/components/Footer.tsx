'use client';

import React from 'react';
import Image from 'next/image';
import {
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  YoutubeIcon,
  ArrowUpIcon,
} from './Icons';
//htr
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        {/* Main 4-Column Footer Grid */}
        <div className="footer-columns-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo-link">
              <Image
                src="/images/logo.png"
                alt="CODEXSTREAM"
                width={190}
                height={48}
                className="footer-logo-img"
              />
            </a>
            <p className="footer-bio">
              CodexStream specializes in development and design services. Our team of experts creates custom solutions that help businesses thrive online.
            </p>
            <div className="footer-social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="Twitter / X">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Useful Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#portfolio">Blog</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links-list">
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Web Designing</a></li>
              <li><a href="#services">App Development</a></li>
              <li><a href="#services">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="footer-contact-col">
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact-items">
              <a href="tel:+19724000019" className="footer-contact-row">
                <PhoneIcon className="w-4 h-4 text-blue-primary flex-shrink-0" />
                <span>+1 972-400-0019</span>
              </a>
              <a href="mailto:info@codexstream.com" className="footer-contact-row">
                <MailIcon className="w-4 h-4 text-blue-primary flex-shrink-0" />
                <span>info@codexstream.com</span>
              </a>
              <div className="footer-contact-row">
                <svg width="16" height="16" className="w-4 h-4 text-blue-primary flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Office No. 69, D-166, CodexStream Phase 8B, Industrial Area, Mohali</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copy">© 2026 CODEXSTREAM. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#terms">Terms of Service</a>
            <span>|</span>
            <a href="#sitemap">Sitemap</a>
          </div>
          <button
            type="button"
            className="scroll-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            title="Scroll to top"
          >
            <ArrowUpIcon className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
