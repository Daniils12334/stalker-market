// components/FaqSection.js
import React from 'react';

const FaqSection = () => {
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="section-title">QUESTIONS?</h2>
        <p style={{ color: '#bbb', maxWidth: '700px', margin: '0 auto 2rem', textAlign: 'center' }}>
          Got questions? Our support team is online 24/7. Join our Discord or Telegram for instant help.
        </p>
        <div className="social-links">
          <a href="#" className="social-link">
            <img src="assets/youtube.svg" alt="YouTube" className="social-icon" />
          </a>
          <a href="#" className="social-link">Telegram</a>
          <a href="#" className="social-link">Discord</a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;