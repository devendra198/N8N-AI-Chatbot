'use client';

import React from 'react';
import Image from 'next/image';
import {
  RocketIcon,
  TrendingUpIcon,
  UsersIcon,
  ChartBarIcon,
} from './Icons';

const FEATURES = [
  {
    id: 'reach',
    title: 'Expand Your Reach',
    description:
      'With a custom website from CodexStream, you can expand your reach and connect with more customers than ever before.',
    icon: RocketIcon,
  },
  {
    id: 'growth',
    title: 'Annualized Growth',
    description:
      'At CodexStream, we believe in the power of web development to drive growth and success for businesses of all sizes.',
    icon: TrendingUpIcon,
  },
  {
    id: 'providers',
    title: 'Book Your Providers',
    description:
      'Ready to take your web presence to the next level? Book your providers at CodexStream today.',
    icon: UsersIcon,
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="why-choose-us-section">
      <div className="container why-choose-grid">
        {/* Left Column: 3 Pillars */}
        <div className="why-choose-content">
          <div className="section-label-pill">WHY CHOOSE US</div>
          <h2 className="section-main-heading">Why Choose Us</h2>

          <div className="why-features-list">
            {FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.id} className="why-feature-item">
                  <div className="why-feature-icon-circle">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="why-feature-text">
                    <h3 className="why-feature-title">{feat.title}</h3>
                    <p className="why-feature-desc">{feat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Collaborative Team Visual */}
        <div className="why-choose-visual">
          <div className="why-image-card">
            <div className="why-img-frame">
              <Image
                src="/images/team-collab.jpg"
                alt="CODEXSTREAM collaborative project meeting"
                width={560}
                height={420}
                className="why-main-img"
              />
            </div>

            {/* Floating Priority Badge */}
            <div className="why-floating-badge">
              <div className="why-badge-icon">
                <ChartBarIcon className="w-5 h-5 text-blue-primary" />
              </div>
              <div>
                <p className="why-badge-text">Your Success,</p>
                <p className="why-badge-sub">Our Priority</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
