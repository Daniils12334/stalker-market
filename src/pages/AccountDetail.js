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
<<<<<<< HEAD
          <p>TextTextTextTextTextTextTextTextTextText</p>
          <button className="btn btn-primary" onClick={() => addToCart(account)}>BUY NOW</button>
=======
          <p>After pursching you will reciev your product on email</p>
          <button className="btn btn-primary">BUY NOW</button>
>>>>>>> 356fa2286f5c3d4c795b5123630c692f6b4bbc6a
        </div>
      </div>
    </section>
  );
};

export default AccountDetail;