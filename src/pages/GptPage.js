import React, { useState } from 'react';
import UpdateLog from '../components/UpdateLog';
import { useCart } from '../context/CartContext';

const gptUpdates = [ "1.2.0.1 Update (GPT) – Click Update in the SEA launcher" ];

const GptPage = ({ openImageModal, openPaymentModal }) => {
  const { addToCart } = useCart();

  const versions = {
    vip: { name: 'VIP', price: 39.99 },
    svip: { name: 'SVIP', price: 69.99 },
    ssvip: { name: 'SSVIP', price: 99.99 },
  };

  const [selectedVersion, setSelectedVersion] = useState('vip');

  const getProductForVersion = (versionKey) => {
    const version = versions[versionKey];
    return {
      id: `gpt-${versionKey}`,
      name: `GPT EXPERIENCE (${version.name})`,
      baseName: 'GPT EXPERIENCE',
      version: version.name,
      price: `$${version.price.toFixed(2)}`,
      img: 'assets/gptlogo.png',
    };
  };

  const handleAddToCart = () => {
    addToCart(getProductForVersion(selectedVersion));
  };

  const handleBuyNow = () => {
    openPaymentModal();
  };

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

        {/* Блок выбора версии */}
        <div className="version-selector">
          <h3>Choose your version:</h3>
          <div className="version-buttons">
            {Object.entries(versions).map(([key, v]) => (
              <button
                key={key}
                className={`version-btn ${selectedVersion === key ? 'active' : ''}`}
                onClick={() => setSelectedVersion(key)}
              >
                {v.name} — ${v.price}
              </button>
            ))}
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
          <span className="price-large">${versions[selectedVersion].price}</span>
          <button className="btn btn-primary" onClick={handleBuyNow}>BUY NOW</button>
          <button className="btn btn-secondary" onClick={handleAddToCart}>ADD TO CART</button>
        </div>
      </div>
    </section>
  );
};

export default GptPage;