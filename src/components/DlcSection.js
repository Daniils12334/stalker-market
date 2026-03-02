// components/DlcSection.js
import React from 'react';
import { Link } from 'react-router-dom';

export const dlcItems = [
  { name: 'SIA', img: 'assets/sialogo.png', link: '/sia', price: '$49.99' },
  { name: 'GPT', img: 'assets/gptlogo.png', link: '/gpt', price: '$39.99' },
  { name: 'IA', img: 'assets/sea3.png', price: '$29.99' },
  { name: 'REX', img: 'assets/sea4.png', price: '$34.99' },
  { name: 'DEX', img: 'assets/sea5.png', price: '$24.99' },
  { name: 'Ark-Tribe-Logger', img: 'assets/sea6.png', price: '$19.99' },
];

const DlcSection = ({ openImageModal }) => {
  return (
    <section id="dlc" className="section">
      <div className="container">
        <h2 className="section-title">EXPANSION DLC</h2>
        <div className="dlc-grid">
          {dlcItems.map((item, index) => (
            <div className="card" key={index}>
              <div className="card-img" onClick={() => openImageModal(item.img)} style={{ cursor: 'pointer' }}>
                <img src={item.img} alt={item.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <h3>{item.name}</h3>
              <div className="desc">TextTextTextTextTextTextTextTextTextText</div>
              <div className="price">{item.price}</div>
              {item.link ? (
                <Link to={item.link} className="btn-small">MORE DETAILS</Link>
              ) : (
                <Link to={`/dlc/${item.name}`} className="btn-small">MORE DETAILS</Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DlcSection;