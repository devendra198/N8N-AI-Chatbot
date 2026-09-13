'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRightIcon,
  MonitorIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  FolderIcon,
  StarIcon,
} from './Icons';

interface HeroSectionProps {
  onOpenChat: (prompt?: string) => void;
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenChat, onOpenQuote }: HeroSectionProps) {
  return (
    <section id="home" className="hero-section hero-clean-light">
      {/* Soft Ambient Background Glows & Dot Patterns */}
      <div className="hero-light-glow" aria-hidden="true" />
      <div className="hero-dot-pattern hero-dots-left" aria-hidden="true" />
      <div className="hero-dot-pattern hero-dots-right" aria-hidden="true" />

      <div className="container hero-layout">
        {/* Left Content */}
        <div className="hero-content">
          {/* Pill Badge */}
          <div
            className="hero-pill-badge"
            onClick={() => onOpenChat?.('Hello, I would like to learn more about CODEXSTREAM services.')}
            role="button"
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            title="Chat with CODEXSTREAM"
          >
            <span className="hero-pill-dots">
              <span className="hero-dot"></span>
            </span>
            <span className="hero-pill-text">BUILD • INNOVATE • GROW</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-title">
            We Build Digital <br />
            Products That Move <br />
            <span className="hero-title-cyan">Businesses Forward</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-desc">
            Strategy, design and development for fast, scalable web and mobile experiences.
          </p>

          {/* Call to Actions */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn-hero-primary"
              onClick={onOpenQuote}
            >
              <span>Start Your Project</span>
              <ArrowRightIcon className="w-4 h-4" />
            </button>

            <a href="#portfolio" className="btn-hero-secondary">
              <span>View Our Work</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Visual with Minimal Floating Cards & Trust Indicators */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            {/* Top Left Floating Card: 500+ Projects Delivered */}
            <div className="hero-floating-card-top">
              <div className="floating-card-icon-folder">
                <FolderIcon className="w-5 h-5 text-blue" />
              </div>
              <div className="floating-card-content">
                <span className="floating-card-number">500+</span>
                <span className="floating-card-subtitle">Projects Delivered</span>
              </div>
            </div>

            {/* Main Developer Image Frame */}
            <div className="hero-image-frame">
              <Image
                src="/images/hero-light.jpg"
                alt="CodeXstream team developing high-impact digital products"
                width={680}
                height={480}
                className="hero-main-img"
                priority
              />
            </div>

            {/* Bottom Right Floating Card: 98% Client Satisfaction */}
            <div className="hero-floating-card-bottom">
              <div className="floating-card-icon-star">
                <StarIcon className="w-4 h-4 text-blue" />
              </div>
              <div className="floating-card-content">
                <span className="floating-card-number">98%</span>
                <span className="floating-card-subtitle">Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators: Placed DOWN below the image in the exact slot indicated by user */}
          <div className="hero-trust-bar-bottom">
            <div className="hero-trust-item">
              <div className="hero-trust-icon">
                <MonitorIcon className="w-4 h-4" />
              </div>
              <span className="hero-trust-label">Modern Solutions</span>
            </div>

            <div className="hero-trust-item">
              <div className="hero-trust-icon">
                <TrendingUpIcon className="w-4 h-4" />
              </div>
              <span className="hero-trust-label">Scalable Growth</span>
            </div>

            <div className="hero-trust-item">
              <div className="hero-trust-icon">
                <ShieldCheckIcon className="w-4 h-4" />
              </div>
              <span className="hero-trust-label">Trusted Partnership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
