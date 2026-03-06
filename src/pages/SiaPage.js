import React, { useState } from 'react';
import UpdateLog from '../components/UpdateLog';
import { useCart } from '../context/CartContext';

const siaUpdates = [ /* ... массив обновлений ... */ ];

const SiaPage = ({ openImageModal, openPaymentModal }) => {
  const { addToCart } = useCart();

  // Определяем доступные версии
  const versions = {
    vip: { name: 'VIP', price: 49.99, multiplier: 1 },
    svip: { name: 'SVIP', price: 79.99, multiplier: 1.6 },
  };

  const [selectedVersion, setSelectedVersion] = useState('vip');

  const getProductForVersion = (versionKey) => {
    const version = versions[versionKey];
    return {
      id: `sea-${versionKey}`,          // уникальный id для каждой версии
      name: `SEA EXPERIENCE (${version.name})`,
      baseName: 'SEA EXPERIENCE',
      version: version.name,
      price: `$${version.price.toFixed(2)}`,
      img: 'assets/sea1.png',
    };
  };

  const handleAddToCart = () => {
    addToCart(getProductForVersion(selectedVersion));
  };

  const handleBuyNow = () => {
    // Можно сразу добавить в корзину и открыть оплату, или просто открыть оплату
    // По желанию: addToCart(...); openPaymentModal();
    openPaymentModal();
  };

  const siaImages = [ /* ... массив изображений ... */ ];

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
          <span className="price-large">${versions[selectedVersion].price}</span>
          <button className="btn btn-primary" onClick={handleBuyNow}>BUY NOW</button>
          <button className="btn btn-secondary" onClick={handleAddToCart}>ADD TO CART</button>
        </div>
      </div>
    </section>
  );
};

export default SiaPage;