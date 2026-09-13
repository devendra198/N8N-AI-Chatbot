'use client';

import React from 'react';
import {
  CodeIcon,
  PaletteIcon,
  SmartphoneIcon,
  MegaphoneIcon,
  ArrowRightIcon,
} from './Icons';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

const SERVICES = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: CodeIcon,
    description:
      "Our development of powerful and unique software is intended to fulfill customers' demands while staying within time and budget limits.",
  },
  {
    id: 'web-design',
    title: 'Web Designing',
    icon: PaletteIcon,
    description:
      'We are a complete website designing company. Our creative web designing team includes dynamic and experienced web designers who design engaging, user-friendly experiences.',
  },
  {
    id: 'app-dev',
    title: 'App Development',
    icon: SmartphoneIcon,
    description:
      'Our quality mobile apps for iOS, Android and cross-platform aim at delivering a memorable user experience that helps drive user engagement, improves retention, and increases revenue.',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    icon: MegaphoneIcon,
    description:
      'Online promotion plays an essential role for businesses which need to establish their brand presence. Our digital marketing strategies are data-driven and result-oriented.',
  },
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-flex">
          <div>
            <div className="section-label-pill">OUR SERVICES</div>
            <h2 className="section-main-heading">Our Services</h2>
          </div>
          <a href="#contact" className="section-view-all-link">
            <span>View All Services</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Cards Grid */}
        <div className="services-cards-grid">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-card-icon-wrap">
                  <div className="service-icon-circle">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                <button
                  type="button"
                  className="service-learn-more-btn"
                  onClick={() => onSelectService && onSelectService(service.title)}
                >
                  <span>Learn More</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
