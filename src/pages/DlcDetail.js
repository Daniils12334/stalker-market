// pages/DlcDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { dlcItems } from '../components/DlcSection';

const DlcDetail = () => {
  const { dlcName } = useParams();
  const dlc = dlcItems.find(item => item.name === dlcName) || { name: dlcName, price: '$29.99' };

  return (
    <section className="detail-page">
      <div className="container">
        <h1 className="page-title">{dlc.name}</h1>
        <div className="detail-content">
          <p>This is the detail page for {dlc.name}.</p>
          <p>Price: {dlc.price}</p>
          <p>TextTextTextTextTextTextTextTextTextText</p>
          <button className="btn btn-primary">BUY NOW</button>
        </div>
      </div>
    </section>
  );
};

export default DlcDetail;