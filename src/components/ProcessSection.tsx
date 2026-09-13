import React from 'react';
import {
  SearchIcon,
  FileTextIcon,
  SettingsIcon,
  RocketIcon,
} from './Icons';

const STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Uncover your business needs, competition and customer strategy.',
    icon: SearchIcon,
  },
  {
    number: '02',
    title: 'Planning',
    description:
      'Develop a comprehensive project plan that aligns with your business goals.',
    icon: FileTextIcon,
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'Put the strategy into action with expert developers and designers.',
    icon: SettingsIcon,
  },
  {
    number: '04',
    title: 'Growth & Marketing',
    description:
      'Promote your website and drive traffic with SEO, social media marketing and PPC advertising.',
    icon: RocketIcon,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        {/* Header */}
        <div className="process-header-flex">
          <div>
            <div className="process-label-pill">OUR WORKING PROCESS</div>
            <h2 className="process-main-heading">Our Working Process</h2>
          </div>
          <p className="process-header-subtitle">
            A clear and proven process to turn your ideas into successful digital products.
          </p>
        </div>

        {/* 4 Connected Steps Timeline */}
        <div className="process-timeline-wrap">
          {/* Connecting Line */}
          <div className="process-connector-line" aria-hidden="true" />

          <div className="process-steps-grid">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="process-step-item">
                  <div className="process-step-node">
                    <span className="process-step-badge">{step.number}</span>
                    <div className="process-node-circle">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-desc">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
