// pages/AccountsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { accountsList } from '../components/AccountsSection';

const AccountsPage = () => {
  return (
    <section className="accounts-page">
      <div className="container">
        <h1 className="page-title"> Accounts</h1>
        <div className="accounts-grid">
          {accountsList.map((account, idx) => (
            <Link to={`/account/${encodeURIComponent(account.name)}`} className="card premium-card" key={idx}>
              <div className="card-img">
                <img src={account.img} alt={account.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
              </div>
              <h3>{account.name}</h3>
              <div className="desc">{account.desc}</div>
              <div className="price">{account.price}</div>
              <div className="btn-small">VIEW DETAILS</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountsPage;