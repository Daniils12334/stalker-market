// pages/SiaPage.js
import React from 'react';
import UpdateLog from '../components/UpdateLog';

const siaUpdates = [
  "1.1.0.3 Update (SIA) – Click Update in the SEA launcher",
  "1: Repair Ghost Mode",
  "2: Repair the Air Stack",
  "3: Fix speed dino",
  "4: Repair desync",
  "5: Repair automatic nail changing and flashing back",
  "6: Repair automatic storage Tek dedi box",
  "7: Optimize EPIC compatibility",
  "8: Aimbot is scheduled to be fixed soon"
];

const SiaPage = ({ openImageModal, openPaymentModal }) => {
  const siaImages = [
    'assets/sea1.png', 'assets/sea2.png', 'assets/sea3.png', 'assets/sea4.png',
    'assets/sea5.png', 'assets/sea6.png', 'assets/sea7.png', 'assets/sea8.png'
  ];

  return (
    <section className="sia-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">SEA EXPERIENCE</h1>
          <div className="status-indicator">
            <span className="green-dot"></span>
            <span className="status-text">undetected, last detect 12.03.2025</span>
          </div>
        </div>
        <div className="gallery-grid">
          {siaImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`SIA ${idx + 1}`}
              className="gallery-img"
              onClick={() => openImageModal(img)}
            />
          ))}
        </div>
        <div className="video-section">
          <h2 className="subtitle">WATCH SEA IN ACTION</h2>
          <div className="video-wrapper">
            <iframe 
              width="100%" 
              height="450" 
              src="https://www.youtube.com/embed/UrSILtu_zEQ" 
              title="SIA Video" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <UpdateLog updates={siaUpdates} />
        <div className="buy-section price-row">
          <span className="price-large">$49.99</span>
          <button className="btn btn-primary" onClick={openPaymentModal}>BUY NOW</button>
        </div>
      </div>
    </section>
  );
};

export default SiaPage;