import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const accountsList = [
  { id: 'acc1', name: 'All Island bosses', img: 'assets/sea7.png', price: '$89.99', desc: 'Defeat all bosses with this account' },
  { id: 'acc2', name: 'new acc bob tales DLC', img: 'assets/sea8.png', price: '$69.99', desc: 'Includes Bob\'s Tales DLC' },
  { id: 'acc3', name: 'New account no dlcs', img: 'assets/sea1.png', price: '$29.99', desc: 'Fresh account, no DLCs' },
];

const AccountsSection = () => {
  const { addToCart } = useCart();

  return (
    <section id="accounts" className="section">
      <div className="container">
        <h2 className="section-title">PREMIUM ACCOUNTS</h2>
        <div className="accounts-grid">
          {accountsList.map((account) => (
            <div className="card premium-card" key={account.id}>
              <Link to={`/account/${encodeURIComponent(account.name)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card-img" style={{ position: 'relative' }}>
                  <img src="assets/Label.png" alt="LIMITED" className="badge-img-centered" />
                  <img src={account.img} alt={account.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
                <h3>{account.name}</h3>
                <div className="desc">{account.desc}</div>
                <div className="price">{account.price}</div>
              </Link>
              <button className="btn-small" onClick={() => addToCart(account)}>Add to cart</button>
            </div>
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