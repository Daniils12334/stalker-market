// components/AccountsSection.js
import React from 'react';
import { Link } from 'react-router-dom';

export const accountsList = [
  { name: 'All Island bosses', img: 'assets/sea7.png', price: '$89.99', desc: 'Defeat all bosses with this account' },
  { name: 'new acc bob tales DLC', img: 'assets/sea8.png', price: '$69.99', desc: 'Includes Bob\'s Tales DLC' },
  { name: 'New account no dlcs', img: 'assets/sea1.png', price: '$29.99', desc: 'Fresh account, no DLCs' },
];

const AccountsSection = () => {
  return (
    <section id="accounts" className="section">
      <div className="container">
        <h2 className="section-title">PREMIUM ACCOUNTS</h2>
        <div className="accounts-grid">
          {accountsList.map((account, idx) => (
            <Link to={`/account/${encodeURIComponent(account.name)}`} className="card premium-card" key={idx}>
              <div className="card-img" style={{ position: 'relative' }}>
                <img src="assets/Label.png" alt="LIMITED" className="badge-img-centered" />
                <img src={account.img} alt={account.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <h3>{account.name}</h3>
              <div className="desc">{account.desc}</div>
              <div className="price">{account.price}</div>
            </Link>
          ))}
        </div>
        <div className="view-all">
          <Link to="/accounts" className="btn btn-secondary">VIEW ALL ACCOUNTS</Link>
        </div>
      </div>
    </section>
  );
};

export default AccountsSection;