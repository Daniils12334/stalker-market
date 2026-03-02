// components/GuaranteesSection.js
import React from 'react';

const GuaranteesSection = ({ openPaymentModal }) => {
  const guarantees = [
    { icon: '⚡', text: 'Instant Delivery' },
    { icon: '🔒', text: 'Secure Payment' },
    { icon: '🔄', text: 'Replacement Guarantee' },
    { icon: '📞', text: '24/7 Support' }
  ];

  return (
    <section id="guarantees" className="section">
      <div className="container">
        <h2 className="section-title">WHY WE'RE LEGIT</h2>
        <div className="guarantees-grid">
          {guarantees.map((g, idx) => (
            <div className="guarantee-item" key={idx}>
              <div className="guarantee-icon">{g.icon}</div>
              <h4>{g.text}</h4>
            </div>
          ))}
        </div>
        <div className="payment-trigger">
          <button className="btn btn-gold" onClick={openPaymentModal}>VIEW PAYMENT OPTIONS</button>
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;