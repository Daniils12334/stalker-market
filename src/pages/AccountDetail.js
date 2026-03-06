import React from 'react';
import { useParams } from 'react-router-dom';
import { accountsList } from '../components/AccountsSection';
import { useCart } from '../context/CartContext';

const AccountDetail = () => {
  const { accountName } = useParams();
  const decodedName = decodeURIComponent(accountName);
  const account = accountsList.find(acc => acc.name === decodedName) || { id: 'unknown', name: decodedName, price: '$29.99', desc: '' };
  const { addToCart } = useCart();

  return (
    <section className="detail-page">
      <div className="container">
        <h1 className="page-title">{account.name}</h1>
        <div className="detail-content">
          <p>{account.desc}</p>
          <p>Price: {account.price}</p>
          <p>TextTextTextTextTextTextTextTextTextText</p>
          <button className="btn btn-primary" onClick={() => addToCart(account)}>BUY NOW</button>
        </div>
      </div>
    </section>
  );
};

export default AccountDetail;