// pages/GptPage.js
import React from 'react';
import UpdateLog from '../components/UpdateLog';

const gptUpdates = [
  "1.2.0.1 Update (GPT) – Click Update in the SEA launcher",
  "1: Enhanced AI targeting",
  "2: Improved ESP performance",
  "3: Fixed crash on startup",
  "4: Added new radar features",
  "5: Optimized memory usage",
  "6: Compatibility with latest game patch",
  "7: Aimbot improvements coming soon"
];

const GptPage = ({ openImageModal, openPaymentModal }) => {
  const gptImages = ['assets/gpt1.png'];

  return (
    <section className="gpt-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">GPT EXPERIENCE</h1>
          <div className="status-indicator">
            <span className="green-dot"></span>
            <span className="status-text">undetected, last detect 12.03.2025</span>
          </div>
        </div>
        <div className="gallery-grid">
          {gptImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="GPT feature"
              className="gallery-img"
              onClick={() => openImageModal(img)}
            />
          ))}
        </div>
        <div className="video-section">
          <h2 className="subtitle">WATCH GPT IN ACTION</h2>
          <div className="video-wrapper">
            <iframe 
              width="100%" 
              height="450" 
              src="https://www.youtube.com/embed/2C5AFR6rRis" 
              title="GPT Video" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <UpdateLog updates={gptUpdates} />
        <div className="buy-section price-row">
          <span className="price-large">$39.99</span>
          <button className="btn btn-primary" onClick={openPaymentModal}>BUY NOW</button>
        </div>
      </div>
    </section>
  );
};

export default GptPage;