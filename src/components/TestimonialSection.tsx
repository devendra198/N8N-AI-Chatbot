'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { QuoteIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'CodexStream definitely have one of the best developers I have ever met. They are responsible, fluent in English, and have a vast knowledge about complex architectures. They helped us deliver a critical enterprise project on time and within budget. I strongly recommend CodexStream for any digital development work.',
    name: 'Guy Becheras',
    role: 'CEO, E-Commerce Store',
    avatar: '/images/client-guy.jpg',
  },
  {
    id: 2,
    quote:
      'Working with the CodexStream engineering team was effortless. Their attention to detail, modern UI design principles, and automated workflow integrations exceeded our expectations. Our web traffic and conversion rate increased by over 140% after the redesign.',
    name: 'Sarah Jenkins',
    role: 'Product Director, SaaS Cloud',
    avatar: '/images/client-guy.jpg',
  },
  {
    id: 3,
    quote:
      'From discovery to deployment, CodexStream provided exceptional transparency and technical leadership. The custom web application they built handles thousands of concurrent users seamlessly. They are our go-to agency partner.',
    name: 'David Martinez',
    role: 'Founder & CTO, FinTech Labs',
    avatar: '/images/client-guy.jpg',
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Header */}
        <div className="section-label-pill">OUR TESTIMONIAL</div>
        <h2 className="section-main-heading">What Our Clients Say</h2>

        {/* Large Testimonial Card */}
        <div className="testimonial-card">
          <div className="testimonial-inner-grid">
            {/* Left: Client Avatar */}
            <div className="testimonial-avatar-wrap">
              <div className="testimonial-avatar-frame">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  width={140}
                  height={140}
                  className="testimonial-avatar-img"
                />
              </div>
            </div>

            {/* Right: Quote Content & Slider Controls */}
            <div className="testimonial-content">
              <div className="testimonial-quote-mark">
                <QuoteIcon className="w-8 h-8 text-blue-primary" />
              </div>

              <blockquote className="testimonial-quote-text">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="testimonial-author-flex">
                <div>
                  <h3 className="testimonial-author-name">{current.name}</h3>
                  <p className="testimonial-author-role">{current.role}</p>
                </div>

                {/* Slider Controls */}
                <div className="testimonial-controls">
                  <button
                    type="button"
                    className="slider-arrow-btn"
                    onClick={prev}
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeftIcon className="w-4 h-4 text-blue-primary" />
                  </button>
                  <button
                    type="button"
                    className="slider-arrow-btn"
                    onClick={next}
                    aria-label="Next testimonial"
                  >
                    <ChevronRightIcon className="w-4 h-4 text-blue-primary" />
                  </button>

                  <div className="slider-dots-wrap">
                    {TESTIMONIALS.map((t, idx) => (
                      <button
                        key={t.id}
                        type="button"
                        className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
