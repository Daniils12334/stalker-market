// pages/AccountDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { accountsList } from '../components/AccountsSection';

const AccountDetail = () => {
  const { accountName } = useParams();
  const decodedName = decodeURIComponent(accountName);
  const account = accountsList.find(acc => acc.name === decodedName) || { name: decodedName, price: '$29.99', desc: '' };

  return (
    <section className="detail-page">
      <div className="container">
        <h1 className="page-title">{account.name}</h1>
        <div className="detail-content">
          <p>{account.desc}</p>
          <p>Price: {account.price}</p>
          <p>After pursching you will reciev your product on email</p>
          <button className="btn btn-primary">BUY NOW</button>
        </div>
      </div>
    </section>
  );
};

export default AccountDetail;