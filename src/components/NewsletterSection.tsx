'use client';

import React, { useState } from 'react';
import { MailIcon, ArrowRightIcon } from './Icons';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-left">
            <div className="newsletter-icon-circle">
              <MailIcon className="w-6 h-6 text-blue-primary" />
            </div>
            <div className="newsletter-text">
              <h2 className="newsletter-title">Subscribe now to Our Newsletter.</h2>
              <p className="newsletter-sub">
                Get the latest insights, tips and updates straight to your inbox.
              </p>
            </div>
          </div>

          <div className="newsletter-right">
            {isSubscribed ? (
              <div className="newsletter-success">
                <span>🎉 Thank you! You have been successfully subscribed.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  aria-label="Email address for newsletter"
                />
                <button type="submit" className="newsletter-submit-btn">
                  <span>Subscribe</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
