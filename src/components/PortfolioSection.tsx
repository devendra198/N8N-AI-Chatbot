'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from './Icons';

const PROJECTS = [
  {
    id: 'fitness',
    category: 'Fitness & Wellness',
    title: 'Modern Fitness Platform',
    image: '/images/project-fitness.jpg',
  },
  {
    id: 'dashboard',
    category: 'SaaS Platform',
    title: 'Business Analytics Dashboard',
    image: '/images/project-dashboard.jpg',
  },
  {
    id: 'fashion',
    category: 'E-Commerce',
    title: 'Online Fashion Store',
    image: '/images/project-fashion.jpg',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        {/* Header */}
        <div className="section-header-flex">
          <div>
            <div className="section-label-pill">OUR PORTFOLIO</div>
            <h2 className="section-main-heading">Featured Projects</h2>
          </div>
          <a href="#contact" className="section-view-all-link">
            <span>View All Projects</span>
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>

        {/* 3 Projects Grid */}
        <div className="portfolio-grid">
          {PROJECTS.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div className="portfolio-img-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="portfolio-img"
                />
              </div>

              <div className="portfolio-card-footer">
                <div className="portfolio-card-meta">
                  <span className="portfolio-category">{project.category}</span>
                  <h3 className="portfolio-title">{project.title}</h3>
                </div>

                <a
                  href="#contact"
                  className="portfolio-arrow-btn"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
