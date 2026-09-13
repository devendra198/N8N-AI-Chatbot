'use client';

import React from 'react';
import Image from 'next/image';
import {
  ArrowRightIcon,
  StarIcon,
  UsersIcon,
  FileTextIcon,
  ShieldCheckIcon,
} from './Icons';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export default function AboutSection({ onLearnMore }: AboutSectionProps) {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        {/* Left Column: Text & Story */}
        <div className="about-text-col">
          <div className="section-label-pill">ABOUT OUR COMPANY</div>

          <h2 className="about-heading">
            We Create Digital Solutions That Drive{' '}
            <span className="text-highlight-blue">Real Business Growth</span>
          </h2>

          <p className="about-body">
            CodexStream specializes in development and design services. Our team of experts creates custom solutions that help businesses thrive online.
          </p>

          <p className="about-body">
            From website development to graphic design, we provide comprehensive services that enhance your online presence. Trust CodexStream to take your platform to the next level.
          </p>

          <a href="#services" className="btn-about-cta" onClick={onLearnMore}>
            <span>Learn More About Us</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Center Column: Team Collage & Experience Badge */}
        <div className="about-visual-col">
          <div className="about-collage-card">
            <div className="collage-main-img-wrap">
              <Image
                src="/images/about-team.jpg"
                alt="CODEXSTREAM digital agency collaborative team"
                width={520}
                height={400}
                className="collage-main-img"
              />
            </div>

            {/* 10+ Years Floating Badge */}
            <div className="collage-exp-badge">
              <div className="exp-star-icon">
                <StarIcon className="w-5 h-5 text-blue-primary" />
              </div>
              <div>
                <p className="exp-num">10+</p>
                <p className="exp-sub">Years of Experience</p>
              </div>
            </div>

            {/* Playful Floating Note */}
            <div className="collage-playful-note">
              <span className="note-handwritten">Great Ideas, Brighter Futures!</span>
              <svg className="note-arrow-svg" width="40" height="25" viewBox="0 0 50 30" fill="none">
                <path d="M5 5 C 25 25, 35 25, 45 10" stroke="#168DD0" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M38 8 L46 9 L44 18" stroke="#168DD0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Stat Cards */}
        <div className="about-stats-col">
          <div className="about-stat-card">
            <div className="stat-card-icon icon-bg-blue">
              <UsersIcon className="w-6 h-6 text-blue-primary" />
            </div>
            <div className="stat-card-info">
              <h3 className="stat-card-number">250+</h3>
              <p className="stat-card-label">Happy Clients</p>
            </div>
          </div>

          <div className="about-stat-card">
            <div className="stat-card-icon icon-bg-cyan">
              <FileTextIcon className="w-6 h-6 text-cyan-accent" />
            </div>
            <div className="stat-card-info">
              <h3 className="stat-card-number">500+</h3>
              <p className="stat-card-label">Projects Delivered</p>
            </div>
          </div>

          <div className="about-stat-card">
            <div className="stat-card-icon icon-bg-blue">
              <StarIcon className="w-6 h-6 text-blue-primary" />
            </div>
            <div className="stat-card-info">
              <h3 className="stat-card-number">10+</h3>
              <p className="stat-card-label">Years of Experience</p>
            </div>
          </div>

          <div className="about-stat-card">
            <div className="stat-card-icon icon-bg-cyan">
              <ShieldCheckIcon className="w-6 h-6 text-cyan-accent" />
            </div>
            <div className="stat-card-info">
              <h3 className="stat-card-number">24/7</h3>
              <p className="stat-card-label">Support &amp; Maintenance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
