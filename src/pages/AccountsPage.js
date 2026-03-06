import React from 'react';
import { Link } from 'react-router-dom';
import { accountsList } from '../components/AccountsSection';
import { useCart } from '../context/CartContext';

const AccountsPage = () => {
  const { addToCart } = useCart();

  return (
    <section className="accounts-page">
      <div className="container">
        <h1 className="page-title"> Accounts</h1>
        <div className="accounts-grid">
          {accountsList.map((account) => (
            <div className="card premium-card" key={account.id}>
              <Link to={`/account/${encodeURIComponent(account.name)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card-img">
                  <img src={account.img} alt={account.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </div>
                <h3>{account.name}</h3>
                <div className="desc">{account.desc}</div>
                <div className="price">{account.price}</div>
              </Link>
              <button className="btn-small" onClick={() => addToCart(account)}>ADD TO CART</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountsPage;