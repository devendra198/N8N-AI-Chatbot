'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VideoSection from '@/components/VideoSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProcessSection from '@/components/ProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialSection from '@/components/TestimonialSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import N8nChatWidget from '@/components/N8nChatWidget';

export default function HomePage() {
  const openChatWithPrompt = (promptText?: string) => {
    // Check if chat window is already open
    const chatWindow = document.querySelector<HTMLElement>('.chat-window-wrapper .chat-window');
    const isHidden = !chatWindow || chatWindow.style.display === 'none';

    // Click the robot button or toggle to open
    const robotBtn = document.querySelector<HTMLElement>('.custom-robot-btn, .chat-window-toggle');
    if (isHidden && robotBtn) {
      robotBtn.click();
    }

    if (promptText) {
      setTimeout(() => {
        const chatInput = document.querySelector<HTMLTextAreaElement | HTMLInputElement>(
          '.chat-input-textarea, .chat-input, input[type="text"], textarea'
        );
        if (chatInput) {
          chatInput.value = promptText;
          chatInput.dispatchEvent(new Event('input', { bubbles: true }));
          chatInput.focus();
        }
      }, 350);
    }
  };

  const handleOpenQuote = () => {
    openChatWithPrompt('I would like to request a quote for a new web development project.');
  };

  const handleSelectService = (serviceName: string) => {
    openChatWithPrompt(`Can you tell me more about your ${serviceName} services and pricing?`);
  };

  return (
    <div className="codexstream-page-wrapper">
      {/* 1 & 2. Top Contact Bar & Sticky Navigation */}
      <Navbar onOpenQuote={handleOpenQuote} />

      <main>
        {/* 3. Hero Section */}
        <HeroSection
          onOpenChat={openChatWithPrompt}
          onOpenQuote={handleOpenQuote}
        />

        {/* 4. Video Showcase & Trusted Companies */}
        <VideoSection />

        {/* 5. About Section */}
        <AboutSection onLearnMore={() => handleSelectService('Web Development')} />

        {/* 6. Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 7. Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* 8. Our Working Process Section */}
        <ProcessSection />

        {/* 9. Featured Projects Section */}
        <PortfolioSection />

        {/* 10. Testimonials Section */}
        <TestimonialSection />

        {/* 11. Newsletter Subscription Section */}
        <NewsletterSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Official n8n Chat Widget with Robot Face & "Hey let's talk 👋" speech bubble */}
      <N8nChatWidget />
    </div>
  );
}
