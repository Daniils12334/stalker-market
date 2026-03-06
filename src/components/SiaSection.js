// components/SiaSection.js
import React from 'react';

const SiaSection = ({ openImageModal }) => {
  const siaImages = [
    'assets/sea1.png', 'assets/sea2.png', 'assets/sea3.png', 'assets/sea4.png',
    'assets/sea5.png', 'assets/sea6.png', 'assets/sea7.png', 'assets/sea8.png'
  ];

  return (
    <section id="sia" className="section">
      <div className="container">
        <h2 className="section-title">SEA EXPERIENCE</h2>
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
        <div className="svip-video">
          <h3 className="subtitle">WATCH SEA IN ACTION</h3>
          <div className="video-wrapper">
            <iframe width="100%" height="450" src="https://www.youtube.com/embed/UrSILtu_zEQ" title="YouTube" frameBorder="0" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiaSection;