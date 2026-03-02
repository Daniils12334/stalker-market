// components/ReviewsSection.js
import React from 'react';

const ReviewsSection = () => {
  const reviews = [
    { stars: 5, text: 'Insane account, all DLC unlocked, logged in immediately.', reviewer: 'xARK_Survivor' },
    { stars: 5, text: 'Bought a wyvern account, stats are crazy good. Delivery in 3 minutes!', reviewer: 'DragonTamerKK' },
    { stars: 5, text: 'Replaced a broken account within 1 hour. These guys are legit.', reviewer: 'PvP_Warlord' },
    { stars: 4, text: 'Very happy with the DLC pack. Smooth transaction.', reviewer: 'BeachBob' },
    { stars: 5, text: 'Best prices for high-level accounts. Will buy again.', reviewer: 'RexRider' },
    { stars: 5, text: 'Discord support helped me pick the right account. 10/10', reviewer: 'TekGamer' }
  ];

  return (
    <section id="reviews" className="section">
      <div className="container">
        <h2 className="section-title">PLAYER REVIEWS</h2>
        <div className="reviews-grid">
          {reviews.map((r, idx) => (
            <div className="review-card" key={idx}>
              <div className="stars">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
              <div className="review-text">"{r.text}"</div>
              <div className="reviewer">– {r.reviewer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;