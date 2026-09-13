import React from 'react';

const PARTNERS = [
  {
    name: 'Microsoft',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 110 24" fill="currentColor">
        <path d="M0 0h11v11H0zm13 0h11v11H13zM0 13h11v11H0zm13 13h11v11H13z" fill="#737373" />
        <text x="32" y="17" fontFamily="var(--font-family)" fontSize="15" fontWeight="700" fill="currentColor">Microsoft</text>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 95 24" fill="currentColor">
        <path d="M12.8 1.4c-.1 0-.2.1-.3.2l-2.1 4.5h-.1C10 5.4 9.1 5 8.2 5c-3 0-5.3 2.5-5.3 5.8 0 3.8 3.2 7.7 8.3 11.8.4.3 1 .3 1.4 0 5.1-4.1 8.3-8 8.3-11.8 0-3.3-2.3-5.8-5.3-5.8-.9 0-1.8.4-2.5 1.1h-.1L13.1 1.6c-.1-.1-.2-.2-.3-.2z" fill="#96bf48" />
        <text x="26" y="17" fontFamily="var(--font-family)" fontSize="15" fontWeight="700" fill="currentColor">shopify</text>
      </svg>
    ),
  },
  {
    name: 'Google',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 85 24" fill="currentColor">
        <text x="0" y="18" fontFamily="var(--font-family)" fontSize="18" fontWeight="800" letterSpacing="-0.5px" fill="currentColor">Google</text>
      </svg>
    ),
  },
  {
    name: 'Slack',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 75 24" fill="currentColor">
        <text x="0" y="18" fontFamily="var(--font-family)" fontSize="18" fontWeight="800" letterSpacing="-0.5px" fill="currentColor"># slack</text>
      </svg>
    ),
  },
  {
    name: 'AWS',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 65 24" fill="currentColor">
        <text x="0" y="18" fontFamily="var(--font-family)" fontSize="18" fontWeight="900" letterSpacing="1px" fill="currentColor">aws</text>
      </svg>
    ),
  },
  {
    name: 'Adobe',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 80 24" fill="currentColor">
        <path d="M3 3h4.5l-4.5 18zm14 0h-4.5l4.5 18zm-7 8 2.5 7h-5z" fill="#FA0F00" />
        <text x="24" y="17" fontFamily="var(--font-family)" fontSize="15" fontWeight="700" fill="currentColor">Adobe</text>
      </svg>
    ),
  },
  {
    name: 'Figma',
    svg: (
      <svg className="h-6 w-auto" viewBox="0 0 75 24" fill="currentColor">
        <text x="0" y="18" fontFamily="var(--font-family)" fontSize="17" fontWeight="700" fill="currentColor">Figma</text>
      </svg>
    ),
  },
];

export default function TrustedStrip() {
  return (
    <section className="trusted-strip-section">
      <div className="container">
        <p className="trusted-strip-title">TRUSTED BY BUSINESSES AROUND THE WORLD</p>
        <div className="trusted-logos-grid">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="partner-logo-item" title={partner.name}>
              {partner.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
